import { useState } from 'react'

interface ExampleCardProps {
  imageSrc: string
  disableViewer?: boolean
}

export function ExampleCard({
  imageSrc,
  disableViewer = false,
}: ExampleCardProps) {
  const [isViewerOpen, setIsViewerOpen] = useState(false)

  const openViewer = () => {
    if (!disableViewer) {
      setIsViewerOpen(true)
    }
  }
  const closeViewer = () => setIsViewerOpen(false)

  return (
    <>
      <div
        className={`bg-[#FFFFFF] p-6 rounded-lg shadow-md max-w-md ${
          disableViewer ? '' : 'cursor-pointer'
        }`}
        onClick={openViewer}
      >
        <img
          src={imageSrc}
          alt="Example message"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>
      {isViewerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeViewer}
        >
          <div className="relative max-h-[80%] max-w-[80%] overflow-auto">
            <button
              onClick={closeViewer}
              className="absolute top-4 right-4 text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <img
              src={imageSrc}
              alt="Example message"
              className="max-w-full max-h-full rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}
