import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import Breadcrumbs from '../components/Breadcrumbs';
import CTASection from '../components/CTASection';
import MetaWrapper from '../components/MetaWrapper';
import { Shield, Award, FileCheck } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const About = () => {
    return (
        <div className="flex flex-col bg-white">
            <MetaWrapper
                title="About Sadik Infra | Government Registered Contractors"
                description="Since 2012, Sadik Infra is a trusted infrastructure contractor executing large-scale government projects across AP & Telangana."
            />

            {/* Page Header */}
            <div className="bg-primary text-white py-14 md:py-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-15 bg-[url('/images/about-site-work.jpg')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <p className="text-secondary text-[10px] md:text-sm font-semibold uppercase tracking-[0.2em] md:tracking-[0.3em] mb-2 md:mb-4">Est. 2012</p>
                    <h1 className="text-3xl md:text-6xl font-heading font-extrabold mb-2 md:mb-4 hero-heading tracking-tight">About Sadik Infra</h1>
                    <p className="text-sm md:text-lg text-gray-400 max-w-xl mx-auto font-light hero-subtext">Delivering infrastructure excellence across two states.</p>
                </div>
            </div>
            <Breadcrumbs />

            {/* Story */}
            <section className="py-14 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-start" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger}>
                        <motion.div className="lg:w-5/12" variants={fadeUp}>
                            <div className="relative">
                                <img src="/images/about-engineer.jpg" alt="Engineering Team" className="w-full shadow-2xl" loading="lazy" />
                                <div className="absolute -bottom-4 -right-3 md:-bottom-6 md:-right-6 bg-secondary text-primary p-4 md:p-6 shadow-xl">
                                    <p className="font-heading font-extrabold text-3xl md:text-4xl mb-0.5 md:mb-1">10+</p>
                                    <p className="font-bold text-[10px] md:text-xs uppercase tracking-wide">Years of Field<br />Leadership</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className="lg:w-7/12 mt-4 md:mt-0" variants={fadeUp}>
                            <p className="text-secondary font-semibold text-xs md:text-sm uppercase tracking-[0.2em] mb-2 md:mb-3">Our History</p>
                            <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-primary mb-5 md:mb-8 leading-tight">
                                From Subcontractor to <span className="text-secondary">Multi-State Contractor</span>
                            </h2>
                            <div className="space-y-4 md:space-y-6 text-gray-600 text-sm md:text-lg font-light leading-relaxed">
                                <p>Sadik Infra was founded by Shaik Jani, an experienced civil contractor active in infrastructure development since 2012. Beginning his journey as a subcontractor for nationally recognized firms like IJM and NCC Limited, he gained practical experience in national highways, railway infrastructure, and urban waterworks.</p>
                                <p>Today, under the dynamic leadership of <strong className="text-primary">Shaik Sadik</strong> — Jani's son and the current operations head — the firm has expanded its capabilities and modernized its approach.</p>
                                <p className="hidden md:block">The firm is operational across <strong className="text-primary">Andhra Pradesh & Telangana</strong>, handling projects valued up to ₹5+ crores with a registered bidding capacity of ₹4 crores.</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-10 md:py-16 bg-primary border-y border-white/5">
                <div className="container mx-auto px-4">
                    <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        {[
                            { value: '33+', label: 'Government Projects' },
                            { value: '₹5+ Cr', label: 'Largest Project' },
                            { value: '10+', label: 'Years Experience' },
                            { value: '2', label: 'Operational States' },
                        ].map((stat, i) => (
                            <motion.div key={i} className="text-center p-3 md:p-6" variants={fadeUp}>
                                <p className={`text-2xl md:text-5xl font-heading font-extrabold mb-1 md:mb-2 ${i % 2 === 0 ? 'text-secondary' : 'text-white'}`}>{stat.value}</p>
                                <p className="text-gray-400 text-[10px] md:text-sm uppercase tracking-wider font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Values */}
            <section className="py-14 md:py-24 bg-light">
                <div className="container mx-auto px-4">
                    <SectionTitle title="Core Operating Principles" subtitle="OUR VALUES" />
                    <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        {[
                            { icon: Shield, title: 'Compliance First', desc: 'Strict adherence to Central and State PWD codes, safety protocols, and labor laws on every site.' },
                            { icon: Award, title: 'Execution Quality', desc: 'Multi-level quality checks for materials, mixture ratios, and structural tolerances.' },
                            { icon: FileCheck, title: 'Tender Integrity', desc: 'Transparent billing, precise estimation, and ethical operational practices.' },
                        ].map((item, i) => (
                            <motion.div key={i} className={`bg-white p-6 md:p-10 border border-gray-100 premium-card ${i === 1 ? 'md:-translate-y-4 border-t-2 border-t-secondary shadow-xl' : ''}`} variants={fadeUp}>
                                <item.icon className="text-secondary mb-4 md:mb-6" size={28} strokeWidth={1.5} />
                                <h3 className="text-base md:text-xl font-heading font-bold mb-2 md:mb-4 text-primary">{item.title}</h3>
                                <p className="text-gray-600 font-light leading-relaxed text-xs md:text-base">{item.desc}</p>
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
