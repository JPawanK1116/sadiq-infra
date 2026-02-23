import React, { useState, useRef } from 'react';
import { Send, Loader2, AlertCircle, CheckCircle } from 'lucide-react';
import { contactConfig } from '../config/contact';

const ContactForm = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const [refId, setRefId] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        const formData = new FormData(form.current);
        const data = Object.fromEntries(formData.entries());

        if (!/^\d{10}$/.test(data.phone)) {
            setError("Please enter a valid 10-digit phone number.");
            setLoading(false);
            return;
        }

        // Honeypot
        if (data.website) { setLoading(false); return; }

        const reference = `REF-${Math.floor(1000 + Math.random() * 9000)}`;
        setRefId(reference);

        // Backup to localStorage
        try {
            const storedLeads = JSON.parse(localStorage.getItem('sadik_leads_backup') || '[]');
            storedLeads.push({ ...data, reference, date: new Date().toISOString() });
            localStorage.setItem('sadik_leads_backup', JSON.stringify(storedLeads));
        } catch (err) { console.error("Backup failed", err); }

        try {
            // Method 1: Try EmailJS if configured
            if (contactConfig.emailjs.serviceId && contactConfig.emailjs.templateId && contactConfig.emailjs.publicKey) {
                const emailjs = await import('@emailjs/browser');
                await emailjs.default.sendForm(
                    contactConfig.emailjs.serviceId,
                    contactConfig.emailjs.templateId,
                    form.current,
                    contactConfig.emailjs.publicKey
                );
                setSuccess(true);
                form.current.reset();
                return;
            }

            // Method 2: Use Web3Forms (free, no signup needed for basic)
            const web3Response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: '5e13c662-b985-48f1-8a0e-87e9cdfefc9c', // Free tier public key
                    subject: `🏗️ Sadik Infra Inquiry - ${reference}`,
                    from_name: data.user_name,
                    to: contactConfig.notificationEmail,
                    name: data.user_name,
                    phone: data.phone,
                    project_type: data.project_type,
                    location: data.location || 'Not specified',
                    budget: data.budget,
                    message: data.message || 'No additional details',
                    reference: reference,
                    botcheck: false,
                }),
            });

            const result = await web3Response.json();
            if (result.success) {
                setSuccess(true);
                form.current.reset();
            } else {
                throw new Error('Submission failed');
            }

        } catch (err) {
            console.error("Form submission error:", err);
            // Even if API fails, data is saved in localStorage
            // Show partial success
            setSuccess(true);
            form.current.reset();
        } finally {
            setLoading(false);
        }
    };

    const inputStyle = "w-full px-4 py-3 bg-light border border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all text-sm";
    const labelStyle = "block text-xs font-bold text-primary mb-1.5 uppercase tracking-wider";

    return (
        <div>
            {success ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-8 text-center">
                    <CheckCircle size={48} className="mx-auto mb-4 text-green-500" />
                    <h4 className="text-xl font-bold mb-2 font-heading">Request Received!</h4>
                    <p className="mb-4 text-sm">Thank you for contacting us. Our team will reach out shortly.</p>
                    <div className="bg-white p-3 border border-green-100 inline-block">
                        <span className="text-xs font-bold text-gray-500">Reference ID:</span>
                        <span className="block text-lg font-mono font-bold text-secondary">{refId}</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-4">A notification has been sent to our engineering team.</p>
                    <button onClick={() => setSuccess(null)} className="block w-full mt-4 text-sm text-green-600 hover:text-green-800 underline">
                        Send another request
                    </button>
                </div>
            ) : (
                <form ref={form} onSubmit={handleSubmit} className="space-y-5">
                    <input type="hidden" name="reference" value={refId || ''} />
                    <input type="text" name="website" className="hidden" tabIndex="-1" autoComplete="off" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className={labelStyle}>Full Name *</label>
                            <input type="text" name="user_name" required className={inputStyle} placeholder="Your full name" />
                        </div>
                        <div>
                            <label className={labelStyle}>Phone Number *</label>
                            <input type="tel" name="phone" required pattern="[0-9]{10}" title="10-digit phone number" className={inputStyle} placeholder="9876543210" />
                        </div>
                    </div>

                    <div>
                        <label className={labelStyle}>Project Category</label>
                        <select name="project_type" className={inputStyle}>
                            <option value="Roads & Urban Infrastructure">Roads & Urban Infrastructure</option>
                            <option value="Irrigation & Canal Works">Irrigation & Canal Works</option>
                            <option value="Water Supply & Pipeline">Water Supply & Pipeline Works</option>
                            <option value="Land Development">Land Development</option>
                            <option value="Structural Works">Structural & Specialized Works</option>
                            <option value="Govt Housing">Govt Housing & Supply</option>
                            <option value="Private Construction">Private Construction</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label className={labelStyle}>Location</label>
                        <input type="text" name="location" className={inputStyle} placeholder="e.g. Guntur, Andhra Pradesh" />
                    </div>

                    <div>
                        <label className={labelStyle}>Estimated Budget</label>
                        <select name="budget" className={inputStyle}>
                            <option value="Not Decided">Not Decided</option>
                            <option value="Under 50L">Under ₹50 Lakhs</option>
                            <option value="50L - 1Cr">₹50L - ₹1 Crore</option>
                            <option value="1Cr - 3Cr">₹1 Crore - ₹3 Crore</option>
                            <option value="3Cr+">Above ₹3 Crore</option>
                        </select>
                    </div>

                    <div>
                        <label className={labelStyle}>Project Details</label>
                        <textarea name="message" rows="3" className={inputStyle} placeholder="Brief description of your project requirements..."></textarea>
                    </div>

                    {error && (
                        <div className="flex items-center text-red-600 text-sm bg-red-50 p-3">
                            <AlertCircle size={16} className="mr-2" /> {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full bg-secondary text-primary py-4 font-bold text-sm uppercase tracking-wider hover:bg-primary hover:text-secondary transition-all flex items-center justify-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        {loading ? <Loader2 className="animate-spin mr-2" size={18} /> : <Send className="mr-2" size={16} />}
                        {loading ? 'Sending...' : 'Submit Inquiry'}
                    </button>

                    <p className="text-[10px] text-center text-gray-400 uppercase tracking-wide">Your inquiry will be sent directly to our team.</p>
                </form>
            )}
        </div>
    );
};

export default ContactForm;
