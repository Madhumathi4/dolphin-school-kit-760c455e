import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/919655467791?text=Hello%2C%20I%20would%20like%20to%20know%20about%20admissions.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-whatsapp flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-bounce-gentle"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-primary-foreground" fill="currentColor" />
    </a>
  );
};

export default WhatsAppButton;
