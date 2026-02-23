import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Building2, TrendingUp, CheckCircle, FileText, CheckSquare, Wrench, Truck, ChevronDown, Droplets, Waves, Shovel } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import CTASection from '../components/CTASection';
import MetaWrapper from '../components/MetaWrapper';
import { projectsData } from '../data/projectsData';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };
const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const Home = () => {
    return (
        <div className="flex flex-col bg-white">
            <MetaWrapper
                title="Sadik Infra | Official Infrastructure & Civil Engineering"
                description="Government-Approved Infrastructure Contractors Since 2012. Civil, Irrigation, Sewerage & Urban Development across AP & Telangana."
            />

            {/* â”€â”€ HERO â”€â”€ */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/images/hero-construction.jpg" alt="Infrastructure" className="w-full h-full object-cover" loading="eager" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 pt-20 pb-16">
                    <motion.div className="max-w-3xl" initial="hidden" animate="visible" variants={stagger}>
                        <motion.div variants={fadeUp} className="inline-flex items-center bg-white/5 border border-secondary/30 px-5 py-2 mb-8 backdrop-blur-sm">
                            <ShieldCheck size={16} className="text-secondary mr-2" />
                            <span className="text-secondary text-sm font-semibold tracking-wider uppercase">Government-Approved Since 2012</span>
                        </motion.div>

                        <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-6 leading-[1.1] text-white">
                            Building Critical <br />
                            <span className="font-display italic text-secondary">National Infrastructure.</span>
                        </motion.h1>

                        <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed font-light">
                            Delivering Large-Scale Civil, Irrigation, Sewerage & Urban Development Projects Across Andhra Pradesh & Telangana.
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                            <Link to="/projects" className="group bg-secondary text-primary px-8 py-4 font-bold text-base hover:bg-white transition-colors flex items-center justify-center uppercase tracking-wide">
                                View Projects <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                            </Link>
                            <Link to="/contact" className="border border-white/30 text-white px-8 py-4 font-semibold text-base hover:bg-white hover:text-primary transition-all flex items-center justify-center backdrop-blur-sm">
                                Request Consultation
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10" animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                    <ChevronDown className="text-secondary/60" size={28} />
                </motion.div>
            </section>

            {/* â”€â”€ CREDENTIALS â”€â”€ */}
            <section className="bg-accent py-8 border-b border-white/5">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { icon: ShieldCheck, label: 'Class 2 Contractor', sub: 'Andhra Pradesh' },
                            { icon: ShieldCheck, label: 'Class 3 Contractor', sub: 'Telangana' },
                            { icon: TrendingUp, label: 'Bidding Capacity', sub: 'Up To â‚¹4 Crores' },
                            { icon: Building2, label: '33+ Projects', sub: '10+ Years Experience' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center justify-center gap-3 py-3">
                                <item.icon className="text-secondary flex-shrink-0" size={24} />
                                <div>
                                    <p className="text-white font-bold text-sm leading-tight">{item.label}</p>
                                    <p className="text-gray-500 text-xs">{item.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* â”€â”€ ABOUT PREVIEW â”€â”€ */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div className="flex flex-col lg:flex-row gap-16 items-center" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
                        <motion.div className="lg:w-1/2" variants={fadeUp}>
                            <p className="text-secondary font-semibold text-sm uppercase tracking-[0.2em] mb-3">Corporate Profile</p>
                            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-6 leading-tight">
                                Trusted For <span className="text-secondary font-extrabold">Public & Private</span> Works
                            </h2>
                            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                Sadik Infra is a government-registered civil contracting firm with over a decade of hands-on infrastructure execution. Beginning as a subcontractor under reputed organizations such as IJM and NCC Limited, the firm has grown into a multi-state infrastructure contractor.
                            </p>
                            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                                We handle roads, irrigation systems, drainage networks, water supply lines, structural repairs, and affordable housing projects with strict adherence to government compliance and engineering standards.
                            </p>
                            <Link to="/about" className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors uppercase tracking-wider text-sm group">
                                Learn More <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                            </Link>
                        </motion.div>
                        <motion.div className="lg:w-1/2 relative" variants={fadeUp}>
                            <img src="/images/about-site-work.jpg" alt="Site Work" className="w-full shadow-2xl" loading="lazy" />
                            <div className="absolute -bottom-6 -left-6 bg-secondary text-primary p-6 shadow-xl">
                                <p className="font-heading font-extrabold text-5xl mb-1">33+</p>
                                <p className="font-bold text-sm uppercase tracking-wide">Govt Projects<br />Executed</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* â”€â”€ CORE CAPABILITIES â”€â”€ */}
            <section className="py-24 bg-light">
                <div className="container mx-auto px-4">
                    <SectionTitle title="Core Capabilities" subtitle="AREAS OF EXPERTISE" />
                    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        {[
                            { icon: Building2, title: 'Civil & Structural', desc: 'CC Roads, RCC Culverts, Structural Repairs, Waterproofing & Concrete Rehabilitation.', img: '/images/road-construction.jpg' },
                            { icon: Droplets, title: 'Water & Sewerage', desc: 'HDPE & DI Pipeline Installation, Deep Excavation, Sewerage Systems.', img: '/images/commercial-building.jpg' },
                            { icon: Waves, title: 'Irrigation & Canal', desc: 'Canal Desilting, Weed Removal, Lock Gate Repairs, Shutter Maintenance.', img: '/images/about-site-work.jpg' },
                            { icon: Shovel, title: 'Land Development', desc: 'Jungle Clearance, Mechanical Tilling, Gravel Filling, Earthwork.', img: '/images/villa-construction.jpg' },
                        ].map((item, i) => (
                            <motion.div key={i} className="bg-white border border-gray-100 overflow-hidden premium-card group" variants={fadeUp}>
                                <div className="h-48 overflow-hidden">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" loading="lazy" />
                                </div>
                                <div className="p-6">
                                    <item.icon className="text-secondary mb-3" size={28} />
                                    <h3 className="text-lg font-heading font-bold text-primary mb-2">{item.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    <div className="text-center mt-12">
                        <Link to="/services" className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors uppercase tracking-wider text-sm group border-b-2 border-secondary pb-1">
                            All Services <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* â”€â”€ FEATURED PROJECTS â”€â”€ */}
            <section className="py-24 bg-primary">
                <div className="container mx-auto px-4">
                    <SectionTitle title="Featured Projects" subtitle="EXECUTION PORTFOLIO" light={true} />
                    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        {projectsData.slice(0, 4).map((project) => (
                            <motion.div key={project.id} variants={fadeUp}>
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </motion.div>
                    <div className="text-center mt-16">
                        <Link to="/projects" className="inline-flex items-center text-secondary font-bold hover:text-white transition-colors uppercase tracking-wider text-sm group">
                            View All 33+ Projects <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* â”€â”€ PROCESS â”€â”€ */}
            <section className="py-24 bg-gradient-to-br from-primary via-accent to-primary overflow-hidden">
                <div className="container mx-auto px-4">
                    <SectionTitle title="Standardized Execution" subtitle="HOW WE OPERATE" light={true} />
                    <motion.div className="max-w-6xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-5 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                        {[
                            { icon: FileText, title: 'Tender Planning', sub: 'Estimation & BOQ', color: 'from-amber-500 to-amber-600' },
                            { icon: Truck, title: 'Resource Mob.', sub: 'Machinery & Labor', color: 'from-blue-500 to-blue-600' },
                            { icon: Wrench, title: 'Site Execution', sub: 'On-ground Delivery', color: 'from-emerald-500 to-emerald-600' },
                            { icon: CheckSquare, title: 'Compliance', sub: 'Quality Control', color: 'from-violet-500 to-violet-600' },
                            { icon: CheckCircle, title: 'Handover', sub: 'Timely Completion', color: 'from-rose-500 to-rose-600' },
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                className="relative flex flex-col items-center text-center group"
                                variants={fadeUp}
                                whileHover={{ scale: 1.08, y: -8 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                {/* Step number */}
                                <span className="absolute -top-3 -right-1 text-[64px] font-heading font-black text-white/5 leading-none select-none">0{i + 1}</span>
                                {/* Icon circle */}
                                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 shadow-lg shadow-black/20 group-hover:shadow-xl group-hover:shadow-black/30 transition-all duration-500`}>
                                    <step.icon className="text-white" size={30} strokeWidth={1.8} />
                                </div>
                                <h4 className="font-bold text-white font-heading uppercase text-xs mb-1 tracking-wider">{step.title}</h4>
                                <p className="text-gray-400 text-[11px]">{step.sub}</p>
                                {/* Connector line (hidden on last & mobile) */}
                                {i < 4 && <div className="hidden md:block absolute top-10 -right-3 w-6 h-px bg-white/10"></div>}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* â”€â”€ CTA â”€â”€ */}
            <CTASection />
        </div>
    );
};

export default Home;
