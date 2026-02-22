import React from 'react';
import { CheckCircle } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import CTASection from '../components/CTASection';
import MetaWrapper from '../components/MetaWrapper';
import { servicesData } from '../data/servicesData';

const Services = () => {
    return (
        <div className="flex flex-col bg-white">
            <MetaWrapper
                title="Sadiq Infra Services | Civil, Sewerage & Irrigation Contracts"
                description="Government-approved specialists in CC Roads, Deep Excavation pipelines, Irrigation Canal desilting, and comprehensive Structural Engineering."
            />

            {/* Page Header */}
            <div className="bg-primary text-white py-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('/images/capability-sewerage.jpg')] bg-cover bg-center"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-4 hero-heading uppercase tracking-wide">
                        Our Expertise
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light hero-subtext">
                        Heavy engineering and public infrastructure works executed perfectly.
                    </p>
                </div>
            </div>

            <Breadcrumbs />

            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="space-y-32">
                        {servicesData.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={service.id}
                                    id={service.title.toLowerCase().replace(/\s+/g, '-')}
                                    className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                        }`}
                                >
                                    {/* Image Side */}
                                    <div className="lg:w-1/2 w-full">
                                        <div className="relative border-2 border-light shadow-2xl p-3 bg-white">
                                            <div className="overflow-hidden relative group">
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="w-full h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                                    loading="lazy"
                                                />
                                            </div>
                                            {/* Decorative box */}
                                            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-secondary/10 hidden md:block"></div>
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="lg:w-1/2 w-full">
                                        <div className="flex items-center mb-8 border-b-2 border-gray-100 pb-6">
                                            {Icon && (
                                                <div className="p-4 bg-primary rounded-sm text-secondary mr-6 shadow-md">
                                                    <Icon size={40} strokeWidth={1.5} />
                                                </div>
                                            )}
                                            <h2 className="text-4xl font-heading font-extrabold text-primary leading-tight">
                                                {service.title}
                                            </h2>
                                        </div>

                                        <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light">
                                            {service.description}
                                        </p>

                                        <div className="bg-light p-8 border-l-4 border-secondary">
                                            <h4 className="font-extrabold text-primary mb-6 uppercase tracking-widest text-sm">
                                                Execution Capabilities
                                            </h4>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                                                {service.benefits.map((benefit, idx) => (
                                                    <li key={idx} className="flex items-start text-gray-700 font-medium">
                                                        <CheckCircle size={20} className="text-secondary mr-3 mt-0.5 flex-shrink-0" />
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
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
