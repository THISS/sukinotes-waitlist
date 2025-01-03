import { Send, Bell, Heart } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export function Features() {
  return (
    <div className="max-w-3xl mx-auto mb-16">
      <p>With all the important dates to message all of the people you care for in a year, it’s no wonder you miss the occasional one whether it be a birthday, anniversary or mothers day.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard
          Icon={Send}
          text="We handle the work of crafting meaningful messages and posts"
        />
        <FeatureCard
          Icon={Bell}
          text="We'll nudge you with options"
        />
        <FeatureCard
          Icon={Heart}
          text="You just hit send"
        />
      </div>

      <p className="text-xl text-darkGray text-center">
        We'll help you nurture your relationships with thoughtful, effortless messages.
      </p>
    </div>
  );
}