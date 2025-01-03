import { SignupForm } from './components/SignupForm'
import { FeatureList } from './components/FeatureList'
import { Carousel } from './components/Carousel'

export default function App() {
  return (
    <div className="min-h-screen bg-peach flex items-center justify-center p-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          {/* <Logo /> */}
          <h1 className="text-4xl font-playfair font-bold text-charcoal mb-6">
            message them effortlessly
          </h1>

          <FeatureList />

          <SignupForm />
        </div>

        <div className="hidden lg:block h-full">
          <Carousel />
        </div>
      </div>
    </div>
  )
}
