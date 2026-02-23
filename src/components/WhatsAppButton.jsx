import React from 'react';
import { contactConfig } from '../config/contact';

const WhatsAppButton = () => {
    const handleClick = () => {
        const message = "Hello Sadik Infra, I am interested in your construction services.";
        // Always use wa.me — it opens WhatsApp Web on desktop, WhatsApp app on mobile
        const url = `https://wa.me/${contactConfig.whatsapp}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 focus:outline-none group overflow-hidden"
            aria-label="Chat on WhatsApp"
        >
            <img
                src="/images/whatsup.png"
                alt="WhatsApp"
                className="w-full h-full object-cover rounded-full"
            />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-3 py-1.5 rounded-lg text-xs font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
                Chat with us
            </span>
        </button>
    );
};

export default WhatsAppButton;
