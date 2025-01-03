import { Heart, Send, Calendar } from 'lucide-react';

export function Hero() {
  return (
    <div className="text-center mb-16">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">
        message them effortlessly
      </h1>
      <div className="flex justify-center space-x-4 mb-8">
        <Heart className="text-rose-500 w-8 h-8" />
        <Send className="text-rose-500 w-8 h-8" />
        <Calendar className="text-rose-500 w-8 h-8" />
      </div>
    </div>
  );
}