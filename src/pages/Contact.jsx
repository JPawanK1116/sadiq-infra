import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import ContactForm from '../components/ContactForm';
import MetaWrapper from '../components/MetaWrapper';
import { companyConfig } from '../config/company';

const Contact = () => {
    return (
        <div className="flex flex-col">
            <MetaWrapper
                title="Contact Construction Contractor in Guntur"
                description="Book a free site visit. Contact Sadiq Infra for House Plans, Estimation, and turn-key construction services in Guntur & Vijayawada region."
            />

            {/* Page Header */}
            <div className="bg-primary text-white py-16 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('/images/contact-background.jpg')] bg-cover bg-center"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 hero-heading">Contact Us</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto hero-subtext">
                        Ready to start your project? Get a free consultation and quote.
                    </p>
                </div>
            </div>

            <Breadcrumbs />

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12">

                        {/* Contact Info & Map */}
                        <div className="lg:w-1/2">
                            <div className="mb-12">
                                <h2 className="text-3xl font-heading font-bold text-primary mb-6">Get In Touch</h2>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    Call us today to schedule a site visit or discuss your construction requirements. Our team of engineers is ready to assist you.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary">Phone</h4>
                                            <p className="text-gray-600">{companyConfig.phone}</p>
                                            <p className="text-sm text-gray-500">Mon-Sat 9am to 7pm</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary">Email</h4>
                                            <p className="text-gray-600">{companyConfig.email}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary">Office Address</h4>
                                            <p className="text-gray-600">{companyConfig.address}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Google Map */}
                            <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                                <iframe
                                    src={companyConfig.location}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="Office Location"
                                ></iframe>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:w-1/2">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
