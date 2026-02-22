import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, FileCheck } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import ContactForm from '../components/ContactForm';
import MetaWrapper from '../components/MetaWrapper';
import { companyConfig } from '../config/company';

const Contact = () => {
    return (
        <div className="flex flex-col bg-white">
            <MetaWrapper
                title="Contact Sadiq Infra | Government Civil Contractors"
                description="Consult with our civil engineers for your next large scale infrastructure or structural project in Andhra Pradesh and Telangana."
            />

            {/* Page Header */}
            <div className="bg-primary text-white py-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('/images/contact-map-bg.jpg')] bg-cover bg-center"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-4 hero-heading uppercase tracking-wide">
                        Contact Us
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light hero-subtext">
                        Connect with our engineering team for tender inquiries and consultations.
                    </p>
                </div>
            </div>

            <Breadcrumbs />

            <section className="py-24">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* Contact Info & Map */}
                        <div className="lg:w-5/12">
                            <div className="mb-12">
                                <h2 className="text-3xl font-heading font-extrabold text-primary mb-6">Corporate Office</h2>
                                <p className="text-gray-600 mb-8 leading-relaxed font-light text-lg">
                                    Our technical team is available to discuss structural requirements, government tenders, and private industrial contracts.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex items-start bg-light p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-14 h-14 bg-primary text-secondary rounded-sm flex items-center justify-center flex-shrink-0 mr-6">
                                            <Phone size={28} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary font-heading uppercase tracking-wider text-sm mb-1">Direct Line</h4>
                                            <p className="text-gray-700 font-medium text-lg">{companyConfig.phone}</p>
                                            <p className="text-sm text-gray-400 mt-1">{companyConfig.workingHours}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start bg-light p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-14 h-14 bg-primary text-secondary rounded-sm flex items-center justify-center flex-shrink-0 mr-6">
                                            <Mail size={28} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary font-heading uppercase tracking-wider text-sm mb-1">Email Desk</h4>
                                            <p className="text-gray-700 font-medium text-lg">{companyConfig.email}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start bg-light p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-14 h-14 bg-primary text-secondary rounded-sm flex items-center justify-center flex-shrink-0 mr-6">
                                            <MapPin size={28} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary font-heading uppercase tracking-wider text-sm mb-1">Headquarters</h4>
                                            <p className="text-gray-700 font-medium text-lg leading-relaxed">{companyConfig.address}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Badge Area */}
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="border border-gray-200 p-4 text-center">
                                    <ShieldCheck className="text-secondary mx-auto mb-2" size={28} />
                                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Class 2 Registered</span>
                                </div>
                                <div className="border border-gray-200 p-4 text-center">
                                    <FileCheck className="text-secondary mx-auto mb-2" size={28} />
                                    <span className="text-xs font-bold text-primary uppercase tracking-widest">ISO Standard</span>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:w-7/12">
                            <div className="bg-white p-8 md:p-12 border border-gray-200 shadow-xl relative">
                                {/* Decorative elements */}
                                <div className="absolute top-0 left-0 w-32 h-2 bg-secondary"></div>

                                <h3 className="text-2xl font-heading font-extrabold text-primary mb-8">Send an Inquiry</h3>
                                <ContactForm />
                            </div>

                            {/* Embedded Map */}
                            <div className="mt-8 w-full h-[300px] bg-gray-200 overflow-hidden shadow-md border border-gray-200 group">
                                <div className="w-full h-full relative">
                                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                                    <iframe
                                        src={companyConfig.location}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, filter: 'grayscale(0.6) contrast(1.2)' }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        title="Office Location"
                                        className="transition-all duration-500 group-hover:filter-none"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
