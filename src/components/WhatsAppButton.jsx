import React from 'react';
import { MessageCircle } from 'lucide-react';
import { contactConfig } from '../config/contact';

const WhatsAppButton = () => {
    const handleClick = () => {
        const message = "Hello Sadik Infra, I am interested in your construction services.";
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const url = isMobile
            ? `https://wa.me/${contactConfig.whatsapp}?text=${encodeURIComponent(message)}`
            : `https://web.whatsapp.com/send?phone=${contactConfig.whatsapp}&text=${encodeURIComponent(message)}`;

        window.open(url, '_blank');
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50 group"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={28} className="fill-current" />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
                Chat with us
            </span>
        </button>
    );
};

export default WhatsAppButton;
