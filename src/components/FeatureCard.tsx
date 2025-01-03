import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  Icon: LucideIcon;
  text: string;
}

export function FeatureCard({ Icon, text }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-pink mb-4">
        <Icon className="w-8 h-8" />
      </div>
      <p className="text-charcoal">{text}</p>
    </div>
  );
}