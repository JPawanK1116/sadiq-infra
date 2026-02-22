import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="py-24 bg-primary relative overflow-hidden border-t border-gray-800">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[url('/images/cta-construction-team.jpg')] bg-cover bg-center mix-blend-overlay"></div>

            <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                <span className="inline-block px-4 py-1.5 border border-secondary text-secondary font-bold text-xs uppercase tracking-widest mb-6">
                    Contract & Tender Inquiries
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6 leading-tight tracking-tight">
                    Partner With Proven <br /> <span className="text-secondary">Engineering Leadership</span>
                </h2>
                <p className="text-gray-300 text-lg md:text-xl mx-auto mb-10 font-light leading-relaxed">
                    We deliver multi-crore public infrastructure and private corporate developments with uncompromising adherence to quality, compliance, and deadlines.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <Link
                        to="/contact"
                        className="bg-secondary text-primary px-10 py-4 font-extrabold text-lg hover:bg-white transition-colors shadow-xl inline-flex items-center justify-center group uppercase tracking-wide"
                    >
                        Schedule Technical Consultation <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
                    </Link>
                    <a
                        href="/contact"
                        className="bg-transparent border-2 border-gray-400 text-white px-10 py-4 font-bold text-lg hover:border-white hover:bg-white hover:text-primary transition-colors inline-flex items-center justify-center uppercase tracking-wide"
                    >
                        <PhoneCall className="mr-3" size={20} /> Corporate Desk
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
