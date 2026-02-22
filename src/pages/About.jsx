import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import Breadcrumbs from '../components/Breadcrumbs';
import CTASection from '../components/CTASection';
import MetaWrapper from '../components/MetaWrapper';
import { Shield, Award, FileCheck } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const About = () => {
    return (
        <div className="flex flex-col bg-white">
            <MetaWrapper
                title="About Sadiq Infra | Government Registered Contractors"
                description="Since 2012, Sadiq Infra is a trusted infrastructure contractor executing large-scale government projects across AP & Telangana."
            />

            {/* Page Header */}
            <div className="bg-primary text-white py-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-15 bg-[url('/images/about-site-work.jpg')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <p className="text-secondary text-sm font-semibold uppercase tracking-[0.3em] mb-4">Est. 2012</p>
                    <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-4 hero-heading tracking-tight">About Sadiq Infra</h1>
                    <p className="text-lg text-gray-400 max-w-xl mx-auto font-light hero-subtext">Delivering infrastructure excellence across two states.</p>
                </div>
            </div>
            <Breadcrumbs />

            {/* Story */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div className="flex flex-col lg:flex-row gap-16 items-start" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        <motion.div className="lg:w-5/12" variants={fadeUp}>
                            <div className="relative">
                                <img src="/images/about-engineer.jpg" alt="Engineering Team" className="w-full shadow-2xl" loading="lazy" />
                                <div className="absolute -bottom-6 -right-6 bg-secondary text-primary p-6 shadow-xl">
                                    <p className="font-heading font-extrabold text-4xl mb-1">10+</p>
                                    <p className="font-bold text-xs uppercase tracking-wide">Years of Field<br />Leadership</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className="lg:w-7/12" variants={fadeUp}>
                            <p className="text-secondary font-semibold text-sm uppercase tracking-[0.2em] mb-3">Our History</p>
                            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary mb-8 leading-tight">
                                From Subcontractor to <span className="font-display italic text-secondary">Multi-State Contractor</span>
                            </h2>
                            <div className="space-y-6 text-gray-600 text-lg font-light leading-relaxed">
                                <p>Sadiq Infra was founded by Shaik Jani, an experienced civil contractor active in infrastructure development since 2012. Beginning his journey as a subcontractor for nationally recognized firms like IJM and NCC Limited, he gained practical experience in national highways, railway infrastructure, and urban waterworks.</p>
                                <p>Today, under the dynamic leadership of <strong className="text-primary">Shaik Sadiq</strong> — Jani's son and the current operations head — the firm has expanded its capabilities and modernized its approach while maintaining the same rigorous standards.</p>
                                <p>The firm is operational across <strong className="text-primary">Andhra Pradesh & Telangana</strong>, handling projects valued up to ₹5+ crores with a registered bidding capacity of ₹4 crores.</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-primary border-y border-white/5">
                <div className="container mx-auto px-4">
                    <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        {[
                            { value: '33+', label: 'Government Projects' },
                            { value: '₹5+ Cr', label: 'Largest Project' },
                            { value: '10+', label: 'Years Experience' },
                            { value: '2', label: 'Operational States' },
                        ].map((stat, i) => (
                            <motion.div key={i} className="text-center p-6" variants={fadeUp}>
                                <p className={`text-4xl md:text-5xl font-heading font-extrabold mb-2 ${i % 2 === 0 ? 'text-secondary' : 'text-white'}`}>{stat.value}</p>
                                <p className="text-gray-400 text-sm uppercase tracking-wider font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-light">
                <div className="container mx-auto px-4">
                    <SectionTitle title="Core Operating Principles" subtitle="OUR VALUES" />
                    <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        {[
                            { icon: Shield, title: 'Compliance First', desc: 'Strict adherence to Central and State PWD codes, safety protocols, and labor laws on every site.' },
                            { icon: Award, title: 'Execution Quality', desc: 'Multi-level quality checks for materials, mixture ratios, and structural tolerances.' },
                            { icon: FileCheck, title: 'Tender Integrity', desc: 'Transparent billing, precise estimation, and ethical operational practices.' },
                        ].map((item, i) => (
                            <motion.div key={i} className={`bg-white p-10 border border-gray-100 premium-card ${i === 1 ? 'md:-translate-y-4 border-t-2 border-t-secondary shadow-xl' : ''}`} variants={fadeUp}>
                                <item.icon className="text-secondary mb-6" size={36} strokeWidth={1.5} />
                                <h3 className="text-xl font-heading font-bold mb-4 text-primary">{item.title}</h3>
                                <p className="text-gray-600 font-light leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default About;
