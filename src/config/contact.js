export const contactConfig = {
    whatsapp: "+919876543210", // Update with actual WhatsApp number
    emailjs: {
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
        templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
    }
};
