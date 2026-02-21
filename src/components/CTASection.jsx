import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="py-16 md:py-20 bg-primary relative overflow-hidden">
            {/* Background Image Overlay could go here */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[url('/images/cta-workers.jpg')] bg-cover bg-center"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                    Ready to Start Your <span className="text-secondary">Dream Project?</span>
                </h2>
                <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    From residential homes to government contracts, we bring decades of engineering expertise to every build. Get a free consultation today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        to="/contact"
                        className="bg-secondary text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1 shadow-lg inline-flex items-center justify-center"
                    >
                        Get Free Quote <ArrowRight className="ml-2" />
                    </Link>
                    <a
                        href="tel:+919876543210"
                        className="border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-primary transition-all inline-flex items-center justify-center"
                    >
                        Call Experts
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
