import React from 'react';
import { motion } from 'framer-motion';
import Breadcrumbs from '../components/Breadcrumbs';
import CTASection from '../components/CTASection';
import MetaWrapper from '../components/MetaWrapper';
import { CheckCircle2, HardHat } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const Leadership = () => {
    const competencies = [
        "Budgeting & Tender Execution",
        "Bulk Material Procurement",
        "Machinery Deployment",
        "Government Compliance",
        "Multi-location Supervision",
        "Quality Assurance"
    ];

    return (
        <div className="flex flex-col bg-white">
            <MetaWrapper
                title="Leadership | Shaik Jani & Shaik Sadik – Sadik Infra"
                description="Meet the father-son leadership behind Sadik Infra's decade of government infrastructure execution."
            />

            {/* Header */}
            <div className="bg-primary text-white py-14 md:py-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-15 bg-[url('/images/structure-3.jpg')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <p className="text-secondary text-[10px] md:text-sm font-semibold uppercase tracking-[0.2em] md:tracking-[0.3em] mb-2 md:mb-4">People Behind The Firm</p>
                    <h1 className="text-3xl md:text-6xl font-heading font-extrabold mb-2 md:mb-4 hero-heading tracking-tight">Leadership</h1>
                    <p className="text-sm md:text-lg text-gray-400 max-w-xl mx-auto font-light hero-subtext">Execution-driven leadership with field-level expertise.</p>
                </div>
            </div>
            <Breadcrumbs />

            {/* ── FOUNDER: Shaik Jani ── */}
            <section className="py-14 md:py-24 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div className="flex flex-col lg:flex-row gap-8 md:gap-16 items-start" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger}>
                        <motion.div className="lg:w-5/12" variants={fadeUp}>
                            <div className="relative bg-light p-2 md:p-3 border border-gray-100 shadow-2xl">
                                <img src="/images/about-engineer.jpg" alt="Shaik Jani - Founder" className="w-full grayscale hover:grayscale-0 transition-all duration-700" />
                                <div className="bg-primary text-center p-3 md:p-5">
                                    <h2 className="text-white font-heading font-bold text-base md:text-xl uppercase tracking-wider">Shaik Jani</h2>
                                    <p className="text-secondary text-xs md:text-sm font-semibold mt-0.5 md:mt-1">Founder & Managing Partner</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div className="lg:w-7/12" variants={fadeUp}>
                            <p className="text-secondary font-semibold text-xs md:text-sm uppercase tracking-[0.2em] mb-2 md:mb-3">Founder</p>
                            <h3 className="text-2xl md:text-4xl font-heading font-extrabold text-primary mb-4 md:mb-6 leading-tight">
                                The <span className="text-secondary">Foundation</span> of Our Legacy
                            </h3>
                            <div className="space-y-3 md:space-y-5 text-gray-600 text-sm md:text-lg font-light leading-relaxed">
                                <p>With over a decade of hands-on, field-level civil execution experience, Shaik Jani has successfully managed and delivered large-scale infrastructure projects — from sewerage systems and irrigation canals to pipeline networks and structural rehabilitation.</p>
                                <p className="hidden md:block">Beginning as a subcontractor with IJM and NCC Limited, he built his expertise from the ground up on national highways, railway infrastructure, and major urban waterworks before founding Sadik Infra in 2012.</p>
                            </div>

                            <div className="mt-6 md:mt-10 bg-light p-4 md:p-8 border border-gray-100">
                                <h4 className="text-xs md:text-sm font-bold font-heading uppercase text-primary mb-3 md:mb-4 flex items-center tracking-wider">
                                    <HardHat className="text-secondary mr-2 md:mr-3" size={18} /> Core Competencies
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                                    {competencies.map((item, i) => (
                                        <div key={i} className="flex items-center">
                                            <CheckCircle2 className="text-secondary mr-2 flex-shrink-0" size={14} />
                                            <span className="text-gray-700 text-xs md:text-sm font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Divider */}
            <div className="bg-primary py-1"><div className="container mx-auto px-4"><div className="h-px bg-secondary/20"></div></div></div>

            {/* ── CURRENT OWNER: Shaik Sadik ── */}
            <section className="py-14 md:py-24 bg-light">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div className="flex flex-col lg:flex-row-reverse gap-8 md:gap-16 items-start" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger}>
                        <motion.div className="lg:w-5/12" variants={fadeUp}>
                            <div className="relative bg-white p-2 md:p-3 border border-gray-100 shadow-2xl">
                                <img src="/images/about-site-work.jpg" alt="Shaik Sadik - Current Owner" className="w-full grayscale hover:grayscale-0 transition-all duration-700" />
                                <div className="bg-secondary text-center p-3 md:p-5">
                                    <h2 className="text-primary font-heading font-bold text-base md:text-xl uppercase tracking-wider">Shaik Sadik</h2>
                                    <p className="text-primary/70 text-xs md:text-sm font-semibold mt-0.5 md:mt-1">Owner & Operations Head</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div className="lg:w-7/12" variants={fadeUp}>
                            <p className="text-secondary font-semibold text-xs md:text-sm uppercase tracking-[0.2em] mb-2 md:mb-3">Current Leadership</p>
                            <h3 className="text-2xl md:text-4xl font-heading font-extrabold text-primary mb-4 md:mb-6 leading-tight">
                                Carrying The <span className="text-secondary">Vision Forward</span>
                            </h3>
                            <div className="space-y-3 md:space-y-5 text-gray-600 text-sm md:text-lg font-light leading-relaxed">
                                <p>Shaik Sadik, son of founder Shaik Jani, represents the next generation of Sadik Infra's leadership. Growing up on construction sites, Sadik brings a unique combination of inherited field wisdom and modern management thinking.</p>
                                <p className="hidden md:block">As the current operations head, Sadik has been instrumental in scaling the firm's capabilities, strengthening vendor relationships, and expanding the company's presence across both Andhra Pradesh and Telangana.</p>
                            </div>

                            <div className="mt-6 md:mt-10 flex flex-wrap gap-3 md:gap-4">
                                <div className="bg-white border border-gray-200 px-4 md:px-6 py-2 md:py-3 text-center">
                                    <p className="text-secondary font-heading font-extrabold text-xl md:text-2xl">₹4 Cr</p>
                                    <p className="text-gray-500 text-[9px] md:text-xs uppercase tracking-wide">Bidding Capacity</p>
                                </div>
                                <div className="bg-white border border-gray-200 px-4 md:px-6 py-2 md:py-3 text-center">
                                    <p className="text-primary font-heading font-extrabold text-xl md:text-2xl">2</p>
                                    <p className="text-gray-500 text-[9px] md:text-xs uppercase tracking-wide">States Active</p>
                                </div>
                                <div className="bg-white border border-gray-200 px-4 md:px-6 py-2 md:py-3 text-center">
                                    <p className="text-secondary font-heading font-extrabold text-xl md:text-2xl">33+</p>
                                    <p className="text-gray-500 text-[9px] md:text-xs uppercase tracking-wide">Total Projects</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default Leadership;
