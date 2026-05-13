import { MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <a
      href="https://wa.me/919456874629?text=Hello! I would like to know more about Hotel Pandey Residency"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
