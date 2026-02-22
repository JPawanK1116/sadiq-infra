import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ShieldCheck, FileCheck } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import ContactForm from '../components/ContactForm';
import MetaWrapper from '../components/MetaWrapper';
import { companyConfig } from '../config/company';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const Contact = () => {
    return (
        <div className="flex flex-col bg-white">
            <MetaWrapper
                title="Contact Sadiq Infra | Government Civil Contractors"
                description="Consult with our civil engineers for your next infrastructure or structural project in AP and Telangana."
            />

            {/* Header */}
            <div className="bg-primary text-white py-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-15 bg-[url('/images/contact-background.jpg')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <p className="text-secondary text-sm font-semibold uppercase tracking-[0.3em] mb-4">Get In Touch</p>
                    <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-4 hero-heading tracking-tight">Contact Us</h1>
                    <p className="text-lg text-gray-400 max-w-xl mx-auto font-light hero-subtext">Connect for tender inquiries and consultations.</p>
                </div>
            </div>
            <Breadcrumbs />

            <section className="py-24">
                <div className="container mx-auto px-4 max-w-7xl">
                    <motion.div className="flex flex-col lg:flex-row gap-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>

                        {/* Info */}
                        <motion.div className="lg:w-5/12" variants={fadeUp}>
                            <p className="text-secondary font-semibold text-sm uppercase tracking-[0.2em] mb-3">Corporate Office</p>
                            <h2 className="text-3xl font-heading font-extrabold text-primary mb-6">
                                Ready to <span className="font-display italic text-secondary">Collaborate?</span>
                            </h2>
                            <p className="text-gray-600 mb-10 leading-relaxed font-light text-lg">
                                Our technical team is available to discuss structural requirements, government tenders, and private projects.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: Phone, label: 'Direct Line', value: companyConfig.phone, sub: companyConfig.workingHours },
                                    { icon: Mail, label: 'Email Desk', value: companyConfig.email },
                                    { icon: MapPin, label: 'Headquarters', value: companyConfig.address },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start bg-light p-5 border border-gray-100 hover:border-secondary/30 transition-colors group">
                                        <div className="w-12 h-12 bg-primary text-secondary flex items-center justify-center flex-shrink-0 mr-5 group-hover:bg-secondary group-hover:text-primary transition-colors">
                                            <item.icon size={22} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary text-xs uppercase tracking-wider mb-1">{item.label}</h4>
                                            <p className="text-gray-700 font-medium">{item.value}</p>
                                            {item.sub && <p className="text-gray-400 text-xs mt-1">{item.sub}</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-10">
                                <div className="border border-gray-200 p-4 text-center">
                                    <ShieldCheck className="text-secondary mx-auto mb-2" size={24} />
                                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Class 2 Registered</span>
                                </div>
                                <div className="border border-gray-200 p-4 text-center">
                                    <FileCheck className="text-secondary mx-auto mb-2" size={24} />
                                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Govt Approved</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Form + Map */}
                        <motion.div className="lg:w-7/12" variants={fadeUp}>
                            <div className="bg-white p-8 md:p-12 border border-gray-200 shadow-2xl relative">
                                <div className="absolute top-0 left-0 w-24 h-1 bg-secondary"></div>
                                <h3 className="text-2xl font-heading font-extrabold text-primary mb-8">Send an Inquiry</h3>
                                <ContactForm />
                            </div>
                            <div className="mt-8 w-full h-[280px] overflow-hidden shadow-lg border border-gray-200">
                                <iframe
                                    src={companyConfig.location}
                                    width="100%" height="100%" style={{ border: 0, filter: 'grayscale(0.5) contrast(1.1)' }}
                                    allowFullScreen="" loading="lazy" title="Office Location"
                                ></iframe>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
