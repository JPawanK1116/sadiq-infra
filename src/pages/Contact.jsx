import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ShieldCheck, FileCheck, Clock } from 'lucide-react';
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
                title="Contact Sadik Infra | Government Civil Contractors"
                description="Consult with our civil engineers for your next infrastructure or structural project in AP and Telangana."
            />

            {/* Compact Header */}
            <div className="bg-primary text-white py-10 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/images/contact-background.jpg')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary/70 to-primary"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-3xl md:text-4xl font-heading font-extrabold hero-heading tracking-tight">Contact Us</h1>
                    <p className="text-sm text-gray-400 mt-2 font-light hero-subtext">Tender inquiries & project consultations</p>
                </div>
            </div>

            <section className="py-16">
                <div className="container mx-auto px-4 max-w-7xl">
                    <motion.div className="flex flex-col lg:flex-row gap-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>

                        {/* Info */}
                        <motion.div className="lg:w-5/12" variants={fadeUp}>
                            <h2 className="text-2xl font-heading font-extrabold text-primary mb-4">
                                Ready to <span className="text-secondary font-extrabold">Collaborate?</span>
                            </h2>
                            <p className="text-gray-500 mb-8 leading-relaxed text-sm">
                                Our technical team is available round the clock for structural requirements, government tenders, and private projects.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { icon: Phone, label: 'Direct Line', value: companyConfig.phone, sub: companyConfig.workingHours },
                                    { icon: Mail, label: 'Email Desk', value: companyConfig.email },
                                    { icon: MapPin, label: 'Headquarters', value: companyConfig.address },
                                    { icon: Clock, label: 'Availability', value: '24/7 Project Support' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start bg-light p-4 border border-gray-100 hover:border-secondary/30 transition-colors group">
                                        <div className="w-10 h-10 bg-primary text-secondary flex items-center justify-center flex-shrink-0 mr-4 group-hover:bg-secondary group-hover:text-primary transition-colors">
                                            <item.icon size={18} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary text-[10px] uppercase tracking-wider mb-0.5">{item.label}</h4>
                                            <p className="text-gray-700 text-sm font-medium">{item.value}</p>
                                            {item.sub && <p className="text-gray-400 text-[10px] mt-0.5">{item.sub}</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-2 gap-3 mt-6">
                                <div className="border border-gray-200 p-3 text-center">
                                    <ShieldCheck className="text-secondary mx-auto mb-1" size={20} />
                                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Class 2 Registered</span>
                                </div>
                                <div className="border border-gray-200 p-3 text-center">
                                    <FileCheck className="text-secondary mx-auto mb-1" size={20} />
                                    <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Govt Approved</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Form */}
                        <motion.div className="lg:w-7/12" variants={fadeUp}>
                            <div className="bg-white p-8 md:p-10 border border-gray-200 shadow-2xl relative">
                                <div className="absolute top-0 left-0 w-20 h-1 bg-secondary"></div>
                                <h3 className="text-xl font-heading font-extrabold text-primary mb-6">Send an Inquiry</h3>
                                <ContactForm />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
