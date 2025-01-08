import { useCallback, useEffect, useState } from 'react'
import { ExampleCard } from './ExampleCard'
const images = [
  // '/example-message-1.png',
  // '/example-message-2.png',
  // '/example-message-0.png',
  '/example-message-8.png',
  '/example-message-3.png',
  '/example-message-4.png',
  '/example-message-5.png',
  '/example-message-6.png',
]

function getNextIndex(currentIndex: number) {
  return (currentIndex + 1) % images.length
}

function getPrevIndex(currentIndex: number) {
  return (currentIndex - 1 + images.length) % images.length
}

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState('init')

  const prevIndex = getPrevIndex(currentIndex)
  const nextIndex = getNextIndex(currentIndex)

  const handlePrev = useCallback(() => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex(getPrevIndex)
      setIsAnimating(false)
    }, 500)
  }, [])

  const handleNext = useCallback(() => {
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex(getNextIndex)
      setIsAnimating(false)
    }, 500)
  }, [])

  const onPrevClick = () => {
    if (isAnimating) return
    if (direction === 'next' || direction === 'init') {
      setDirection('prev')
      return
    }
    handlePrev()
  }
  const onNextClick = () => {
    if (isAnimating) return
    if (direction === 'prev' || direction === 'init') {
      setDirection('next')
      return
    }
    handleNext()
  }

  useEffect(() => {
    if (direction === 'init') return
    if (direction === 'next') {
      handleNext()
    } else {
      handlePrev()
    }
  }, [direction, handleNext, handlePrev])

  const cardOneClass = isAnimating
    ? `transition-transform duration-500 ease-in-out ${
        direction === 'next' ? '-translate-x-full' : 'translate-x-full'
      }`
    : 'translate-x-0'
  const cardTwoClass = isAnimating
    ? 'translate-x-0 transition-transform duration-500 ease-in-out'
    : direction === 'next'
    ? 'translate-x-full'
    : '-translate-x-full'

  return (
    <div className="relative w-full max-w-md overflow-hidden h-full flex items-center justify-center">
      {!isAnimating && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <ExampleCard imageSrc={images[currentIndex]} disableViewer />
        </div>
      )}
      <div
        className={`absolute top-0 left-0 w-full h-full transform ${cardOneClass} flex items-center justify-center`}
      >
        <ExampleCard imageSrc={images[currentIndex]} disableViewer />
      </div>
      <div
        className={`absolute top-0 left-0 w-full h-full transform ${cardTwoClass} flex items-center justify-center`}
      >
        <ExampleCard
          imageSrc={
            direction === 'next' ? images[nextIndex] : images[prevIndex]
          }
          disableViewer
        />
      </div>

      <button
        onClick={onPrevClick}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-3 m-2 rounded-full opacity-75 hover:opacity-100 transition-opacity duration-300"
      >
        &lt;
      </button>
      <button
        onClick={onNextClick}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-3 m-2 rounded-full opacity-75 hover:opacity-100 transition-opacity duration-300"
      >
        &gt;
      </button>
    </div>
  )
}
