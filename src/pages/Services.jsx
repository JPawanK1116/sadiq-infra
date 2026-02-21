import React from 'react';
import { CheckCircle } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import CTASection from '../components/CTASection';
import MetaWrapper from '../components/MetaWrapper';
import { servicesData } from '../data/servicesData';

const Services = () => {
    return (
        <div className="flex flex-col">
            <MetaWrapper
                title="House & Building Construction Services in Guntur"
                description="We offer Individual House Construction, Villa Development, Commercial Complexes, and Structural Repairs. Best prices and government grade quality."
            />

            {/* Page Header */}
            <div className="bg-primary text-white py-16 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('/images/commercial-building.jpg')] bg-cover bg-center"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 hero-heading">Our Services</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto hero-subtext">
                        Comprehensive construction solutions tailored to your needs.
                    </p>
                </div>
            </div>

            <Breadcrumbs />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="space-y-24">
                        {servicesData.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={service.id}
                                    id={service.title.toLowerCase().replace(/\s+/g, '-')}
                                    className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                        }`}
                                >
                                    {/* Image Side */}
                                    <div className="lg:w-1/2 w-full">
                                        <div className="relative rounded-lg overflow-hidden shadow-xl group">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors"></div>
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="lg:w-1/2 w-full">
                                        <div className="flex items-center mb-4">
                                            {Icon && (
                                                <div className="p-3 bg-secondary/10 rounded-full text-secondary mr-4">
                                                    <Icon size={32} />
                                                </div>
                                            )}
                                            <h2 className="text-3xl font-heading font-bold text-primary">
                                                {service.title}
                                            </h2>
                                        </div>

                                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                            {service.description}
                                        </p>

                                        <div className="bg-gray-50 p-6 rounded-lg mb-6 border border-gray-100">
                                            <h4 className="font-bold text-primary mb-4 uppercase tracking-wide text-sm">
                                                Key Benefits
                                            </h4>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {service.benefits.map((benefit, idx) => (
                                                    <li key={idx} className="flex items-center text-gray-700">
                                                        <CheckCircle size={16} className="text-secondary mr-2 flex-shrink-0" />
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <span className="font-bold text-primary">Ideal for: </span>
                                            <span className="text-gray-600 italic">
                                                {service.idealFor}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default Services;
