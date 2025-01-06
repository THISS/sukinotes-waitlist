import { SignupForm } from './components/SignupForm'
import { FeatureList, FeatureVariant } from './components/FeatureList'
import { Carousel } from './components/Carousel'
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal'
import { ExampleCard } from './components/ExampleCard'

export default function App() {
  return (
    <div className="min-h-screen bg-peach flex flex-col items-center justify-center p-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <FeatureList variant={FeatureVariant.A} />

          <SignupForm />
        </div>

        <div className="hidden lg:block h-full">
          <div className="flex flex-col h-full">
            <ExampleCard imageSrc={'/example-message-1.png'} />
            <Carousel />
          </div>
        </div>
      </div>
      <footer className="mt-8 text-center">
        <PrivacyPolicyModal />
        <span className="mx-4">|</span>
        <a
          href="https://x.com/brenton_on_x"
          className="text-charcoal underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact me on 𝕏
        </a>
      </footer>
    </div>
  )
}
