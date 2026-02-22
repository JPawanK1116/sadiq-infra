import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="py-28 bg-primary relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('/images/cta-workers.jpg')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-accent/80"></div>

            <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
                <span className="inline-block px-5 py-1.5 border border-secondary/40 text-secondary text-xs font-bold uppercase tracking-[0.3em] mb-8">
                    Contract & Tender Inquiries
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6 leading-tight tracking-tight">
                    Partner With <span className="font-display italic text-secondary">Proven</span> Leadership
                </h2>
                <p className="text-gray-400 text-lg md:text-xl mx-auto mb-12 font-light leading-relaxed max-w-2xl">
                    Multi-crore public infrastructure and corporate developments with uncompromising adherence to quality, compliance, and deadlines.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-5">
                    <Link to="/contact" className="group bg-secondary text-primary px-10 py-4 font-bold text-base hover:bg-white transition-colors inline-flex items-center justify-center uppercase tracking-wide">
                        Get a Free Quote <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={18} />
                    </Link>
                    <a href={`tel:+919876543210`} className="border border-white/20 text-white px-10 py-4 font-semibold text-base hover:bg-white hover:text-primary transition-all inline-flex items-center justify-center backdrop-blur-sm">
                        <PhoneCall className="mr-3" size={18} /> Call Direct
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
