import { useState } from 'react'
import { X } from 'lucide-react'

export function PrivacyPolicyModal() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <button onClick={openModal} className="text-charcoal underline">
        Privacy Policy
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full mx-4 lg:mx-auto overflow-y-auto max-h-[80%] mt-8 mb-8 relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-charcoal"
            >
              <X className="w-6 h-6" />
            </button>
            <h1 className="text-4xl font-playfair font-bold text-charcoal mb-6">
              Privacy Policy
            </h1>
            <p className="mb-4">
              <strong>TLDR;</strong> We only collect your email address to let
              you know when Suki Notes launches. We won't share it with anyone
              else, and you can unsubscribe at any time.
            </p>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              Full Privacy Policy
            </h2>
            <p className="mb-4">Effective Date: January 6, 2025</p>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              Introduction
            </h2>
            <p className="mb-4">
              Suki Notes ("we," "us," or "our") is committed to protecting the
              privacy of our website visitors and users ("you"). This Privacy
              Policy explains how we collect, use, and disclose your personal
              information when you visit our website.
            </p>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              Information We Collect
            </h2>
            <p className="mb-4">
              We collect only the following information from you:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                Email Address: When you provide your email address to receive
                updates about our product launch.
              </li>
            </ul>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              How We Use Your Information
            </h2>
            <p className="mb-4">
              We use your email address solely for the purpose of notifying you
              when Suki Notes is ready. We will not use your email address for
              any other marketing purposes or share it with any third parties.
            </p>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              Data Security
            </h2>
            <p className="mb-4">
              We take reasonable measures to protect your personal information
              from unauthorized access, use, or disclosure. However, no method
              of transmission over the Internet or method of electronic storage
              is completely secure. Therefore, while we strive to use
              commercially acceptable means to protect your personal
              information, we cannot guarantee its absolute security.
            </p>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              Your Choices
            </h2>
            <p className="mb-4">
              You can unsubscribe from our email notifications at any time by
              clicking the "unsubscribe" link at the bottom of any email.
            </p>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              Changes to this Privacy Policy
            </h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will post
              any changes on this page and, if the changes are significant, we
              will provide a more prominent notice (including, for certain
              services, email notification of Privacy Policy changes).
            </p>
            <h2 className="text-2xl font-semibold text-charcoal mb-4">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us via the link in our website footer.
            </p>
            <button
              onClick={closeModal}
              className="mt-4 bg-pink text-charcoal py-2 px-4 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}
