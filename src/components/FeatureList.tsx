import { Send, Bell, Heart } from 'lucide-react'

const features = [
  {
    Icon: Send,
    text: 'We handle the work of crafting meaningful messages and posts',
  },
  { Icon: Bell, text: "We'll nudge you with options" },
  { Icon: Heart, text: 'You just hit send' },
]

export function FeatureList() {
  return (
    <div className="grid grid-cols-1 gap-6 mb-8 max-w-lg mx-auto">
      <p>
        With all the important dates to message all of the people you care for
        in a year, it’s no wonder you miss the occasional one whether it be a
        birthday, anniversary or mothers day.
      </p>

      {features.map(({ Icon, text }) => (
        <div key={text} className="flex items-start gap-4">
          <Icon className="w-6 h-6 text-charcoal shrink-0 mt-1" />
          <p className="text-charcoal">{text}</p>
        </div>
      ))}

      <p className="text-lg text-darkGray mb-8 text-center">
        We'll help you nurture your relationships with thoughtful, effortless
        messages.
      </p>
    </div>
  )
}
