import { Helmet } from 'react-helmet'
export function SignupForm() {
  return (
    <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-xl font-semibold text-charcoal mb-4 text-center">
        Be notified when we go live. Sign up now!
      </h2>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
        />
        <script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"></script>
      </Helmet>
      <div
        id="getWaitlistContainer"
        data-waitlist_id="23599"
        data-widget_type="WIDGET_2"
      ></div>
      <p className="text-sm text-darkGray text-center mt-4 italic">
        We promise to only send you awesome helpful emails
      </p>
    </div>
  )
}
