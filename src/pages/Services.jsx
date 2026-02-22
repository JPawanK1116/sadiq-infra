import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import CTASection from '../components/CTASection';
import MetaWrapper from '../components/MetaWrapper';
import { servicesData } from '../data/servicesData';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const Services = () => {
    return (
        <div className="flex flex-col bg-white">
            <MetaWrapper
                title="Sadiq Infra Services | Civil, Sewerage & Irrigation"
                description="Government-approved specialists in CC Roads, Deep Excavation pipelines, Irrigation Canal desilting, and Structural Engineering."
            />

            {/* Header */}
            <div className="bg-primary text-white py-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-15 bg-[url('/images/commercial-building.jpg')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <p className="text-secondary text-sm font-semibold uppercase tracking-[0.3em] mb-4">What We Do</p>
                    <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-4 hero-heading tracking-tight">Our Expertise</h1>
                    <p className="text-lg text-gray-400 max-w-xl mx-auto font-light hero-subtext">Heavy engineering and public infrastructure works.</p>
                </div>
            </div>
            <Breadcrumbs />

            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="space-y-32">
                        {servicesData.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={service.id}
                                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}
                                    className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                                >
                                    <motion.div className="lg:w-1/2 w-full" variants={fadeUp}>
                                        <div className="relative bg-light p-3 border border-gray-100 shadow-2xl overflow-hidden group">
                                            <img src={service.image} alt={service.title} className="w-full h-[450px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" loading="lazy" />
                                        </div>
                                    </motion.div>

                                    <motion.div className="lg:w-1/2 w-full" variants={fadeUp}>
                                        <div className="flex items-center mb-6">
                                            {Icon && (
                                                <div className="p-4 bg-primary text-secondary mr-5 shadow-lg">
                                                    <Icon size={32} strokeWidth={1.5} />
                                                </div>
                                            )}
                                            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary leading-tight">{service.title}</h2>
                                        </div>
                                        <div className="w-16 h-0.5 bg-secondary mb-8"></div>

                                        <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light">{service.description}</p>

                                        <div className="bg-light p-8 border-l-2 border-secondary">
                                            <h4 className="font-bold text-primary mb-5 uppercase tracking-[0.2em] text-xs">Execution Capabilities</h4>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                                                {service.benefits.map((benefit, idx) => (
                                                    <li key={idx} className="flex items-start text-gray-700 text-sm font-medium">
                                                        <CheckCircle size={16} className="text-secondary mr-2 mt-0.5 flex-shrink-0" />
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                </motion.div>
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
