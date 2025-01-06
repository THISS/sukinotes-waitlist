import { Send, Bell, Heart } from 'lucide-react'

const features = [
  {
    Icon: Heart,
    text: 'We handle the work of crafting meaningful messages and posts',
  },
  { Icon: Bell, text: "We'll nudge you with options" },
  { Icon: Send, text: 'You just hit send' },
]

export enum FeatureVariant {
  A = 'a',
  B = 'b',
}

export function FeatureList({ variant }: { variant: FeatureVariant }) {
  return variant === FeatureVariant.A ? <FeatureListA /> : <FeatureListB />
}

function FeatureListA() {
  return (
    <div className="grid grid-cols-1 gap-6 mb-8 max-w-lg mx-auto">
      <h1 className="text-4xl font-playfair font-bold text-charcoal mb-6">
        Never miss a special occasion again. Send heartfelt, personalized
        messages effortlessly with Sukinotes.
      </h1>

      <p>
        Juggling birthdays, anniversaries, and holidays for everyone you care
        about is tough. It's easy to let a special day slip by, leaving you
        feeling guilty and disconnected.
      </p>
      <p>
        <b>Sukinotes</b> is your personal relationship assistant. We help you
        remember every important date and craft the perfect message, ensuring
        you stay connected with the people who matter most.
      </p>

      <div className="how-it-works mb-8">
        <h2 className="text-2xl font-bold text-charcoal mb-4">
          Here's how it works:
        </h2>
        <ol className="list-decimal pl-5 space-y-4">
          <li>
            <b>Add your loved ones:</b> Enter contact details, birthdays,
            anniversaries, and other special occasions for your family, friends,
            and colleagues.
          </li>
          <li>
            <b>Share your memories:</b> Enrich each contact with fond memories,
            inside jokes, and photos. Sukinotes uses these details to
            personalize your messages.
          </li>
          <li>
            <b>Get gentle reminders:</b> Sukinotes will notify you of upcoming
            special days, so you're never caught off guard.
          </li>
          <li>
            <b>Personalize your message:</b> When a special occasion arrives,
            Sukinotes will suggest thoughtful, heartfelt messages tailored to
            the recipient and the occasion, based on the memories you have
            provided. You can edit the provided message to make it perfect.
          </li>
          <li>
            <b>Send with a click:</b> Approve the message and send it via your
            prefered method (email, text, etc.), bringing a smile to your loved
            one's face.
          </li>
        </ol>
      </div>

      {features.map(({ Icon, text }) => (
        <div key={text} className="flex items-start gap-4">
          <Icon className="w-6 h-6 text-charcoal shrink-0 mt-1" />
          <p className="text-charcoal">{text}</p>
        </div>
      ))}

      <p className="text-lg text-darkGray mb-8 text-center">
        Nurture your relationships effortlessly. Let Sukinotes help you show
        your loved ones how much you care, one heartfelt message at a time.
      </p>
    </div>
  )
}

function FeatureListB() {
  return (
    <div className="grid grid-cols-1 gap-6 mb-8 max-w-lg mx-auto">
      <h1 className="text-4xl font-playfair font-bold text-charcoal mb-6">
        Never forget a special moment. Send heartfelt, personalized messages
        with Sukinotes.
      </h1>

      <p>
        Life gets busy, and it’s easy to miss birthdays, anniversaries, or
        holidays. When that happens, you may feel disconnected or guilty for not
        reaching out to the people who matter most.
      </p>
      <p>
        <b>Sukinotes</b> is here to help. Think of it as your personal
        relationship assistant, ensuring you never miss an important occasion
        while crafting the perfect message every time. Stay connected with ease
        and make your loved ones feel truly special.
      </p>

      <div className="how-it-works mb-8">
        <h2 className="text-2xl font-bold text-charcoal mb-4">
          Here’s how it works:
        </h2>
        <ol className="list-decimal pl-5 space-y-4">
          <li>
            <b>Save important dates:</b> Enter birthdays, anniversaries, and
            other key dates for family, friends, and colleagues.
          </li>
          <li>
            <b>Personalize the memories:</b> Add inside jokes, photos, and
            personal notes. Sukinotes uses these to craft messages that feel
            truly yours.
          </li>
          <li>
            <b>Receive timely reminders:</b> Sukinotes sends friendly reminders
            so you’re never caught off guard by an upcoming occasion.
          </li>
          <li>
            <b>Craft the perfect message:</b> Receive thoughtful message
            suggestions tailored to the recipient and occasion, and tweak them
            as needed to make it just right.
          </li>
          <li>
            <b>Send with ease:</b> Once you're happy, send the message through
            your preferred method—email, text, or anything else—with just one
            click.
          </li>
        </ol>
      </div>

      {features.map(({ Icon, text }) => (
        <div key={text} className="flex items-start gap-4">
          <Icon className="w-6 h-6 text-charcoal shrink-0 mt-1" />
          <p className="text-charcoal">{text}</p>
        </div>
      ))}

      <p className="text-lg text-darkGray mb-8 text-center">
        Strengthen your relationships effortlessly. Let Sukinotes help you show
        your loved ones how much they mean to you—one heartfelt message at a
        time.
      </p>
    </div>
  )
}
