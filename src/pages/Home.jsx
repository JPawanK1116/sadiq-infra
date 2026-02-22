import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Building2, TrendingUp, CheckCircle, FileText, CheckSquare, Hammer } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import CTASection from '../components/CTASection';
import ProcessStep from '../components/ProcessStep';
import MetaWrapper from '../components/MetaWrapper';
import { servicesData } from '../data/servicesData';
import { projectsData } from '../data/projectsData';

const Home = () => {
    return (
        <div className="flex flex-col">
            <MetaWrapper
                title="Sadiq Infra | Official Infrastructure & Civil Engineering"
                description="Government-Approved Infrastructure Contractors Since 2012. Specializing in Civil, Irrigation, Sewerage & Urban Development across AP & Telangana."
            />

            {/* Hero Section */}
            <section className="relative h-screen min-h-[600px] flex items-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/hero-government-infra.jpg"
                        alt="Government Infrastructure Construction Site"
                        className="w-full h-full object-cover"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-primary/70"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-white mt-12">
                    <div className="max-w-4xl">
                        <p className="inline-block bg-secondary text-primary font-bold tracking-widest uppercase mb-6 px-4 py-1.5 rounded-sm animate-fade-in-up text-sm">
                            Government-Approved Contractors Since 2012
                        </p>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-8 leading-tight animate-fade-in-up delay-100 hero-heading">
                            Building Critical <br />
                            <span className="text-secondary">National Infrastructure.</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-gray-200 mb-10 animate-fade-in-up delay-200 max-w-2xl font-light hero-subtext leading-relaxed">
                            Delivering Large-Scale Civil, Irrigation, Sewerage & Urban Development Projects Across Andhra Pradesh & Telangana.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                            <Link
                                to="/projects"
                                className="bg-secondary text-primary px-8 py-4 rounded-sm font-bold text-lg hover:bg-opacity-90 transition-all text-center flex items-center justify-center group"
                            >
                                View Projects <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                            </Link>
                            <Link
                                to="/contact"
                                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-sm font-bold text-lg hover:bg-white hover:text-primary transition-all text-center"
                            >
                                Request Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Government Credentials Strip */}
            <section className="bg-primary border-t border-gray-800 py-6 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-6">
                        <div className="flex-1 min-w-[200px] flex items-center justify-center md:justify-start border-r border-gray-800 pr-6">
                            <ShieldCheck className="text-secondary mr-3 flex-shrink-0" size={32} />
                            <div>
                                <p className="text-white font-bold leading-tight">Class 2 Contractor</p>
                                <p className="text-gray-400 text-sm">Andhra Pradesh</p>
                            </div>
                        </div>
                        <div className="flex-1 min-w-[200px] flex items-center justify-center md:justify-center border-r-0 md:border-r border-gray-800 px-6">
                            <ShieldCheck className="text-secondary mr-3 flex-shrink-0" size={32} />
                            <div>
                                <p className="text-white font-bold leading-tight">Class 3 Contractor</p>
                                <p className="text-gray-400 text-sm">Telangana</p>
                            </div>
                        </div>
                        <div className="flex-1 min-w-[200px] flex items-center justify-center md:justify-center border-r-0 md:border-r border-gray-800 px-6">
                            <TrendingUp className="text-secondary mr-3 flex-shrink-0" size={32} />
                            <div>
                                <p className="text-white font-bold leading-tight">Bidding Capacity</p>
                                <p className="text-gray-400 text-sm">Up To ₹4 Crores</p>
                            </div>
                        </div>
                        <div className="flex-1 min-w-[200px] flex items-center justify-center md:justify-end pl-6">
                            <Building2 className="text-secondary mr-3 flex-shrink-0" size={32} />
                            <div>
                                <p className="text-white font-bold leading-tight">10+ Years</p>
                                <p className="text-gray-400 text-sm">Field Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Preview Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <SectionTitle
                                title="Trusted For Public & Private Works"
                                subtitle="CORPORATE PROFILE"
                                center={false}
                            />
                            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                Sadiq Infra is a government-registered civil contracting firm with over a decade of hands-on infrastructure execution. Beginning as a subcontractor under reputed organizations such as IJM and NCC Limited, the firm has grown into a multi-state infrastructure contractor.
                            </p>
                            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                                We handle roads, irrigation systems, drainage networks, water supply lines, structural repairs, and affordable housing projects with strict adherence to government compliance and engineering standards.
                            </p>
                            <Link
                                to="/about"
                                className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors border-b-2 border-secondary pb-1 uppercase tracking-wide text-sm"
                            >
                                Learn more about us <ArrowRight className="ml-2" size={16} />
                            </Link>
                        </div>
                        <div className="lg:w-1/2 relative w-full">
                            <div className="absolute -z-10 top-8 -right-8 w-full h-full bg-light border border-gray-200"></div>
                            <img
                                src="/images/about-site-supervision.jpg"
                                alt="Site Supervision"
                                className="w-full h-auto object-cover shadow-xl"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Capabilities */}
            <section className="py-24 bg-light">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        title="Our Core Capabilities"
                        subtitle="AREAS OF EXPERTISE"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 mt-12 w-full max-w-6xl mx-auto">
                        {/* Civil */}
                        <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow group">
                            <img src="/images/capability-civil.jpg" alt="Civil Works" className="w-full h-48 object-cover mb-6 grayscale group-hover:grayscale-0 transition-all duration-500" />
                            <h3 className="text-2xl font-bold font-heading text-primary mb-3">Civil & Structural Works</h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">CC Roads, RCC Culverts, Structural Repairs, Waterproofing & Concrete Rehabilitation.</p>
                        </div>
                        {/* Water */}
                        <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow group">
                            <img src="/images/capability-sewerage.jpg" alt="Water Infrastructure" className="w-full h-48 object-cover mb-6 grayscale group-hover:grayscale-0 transition-all duration-500" />
                            <h3 className="text-2xl font-bold font-heading text-primary mb-3">Water & Sewerage Infrastructure</h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">HDPE & DI Pipeline Installation, Deep Excavation (6–9 meters), Sewerage Systems, Leak Rectification.</p>
                        </div>
                        {/* Irrigation */}
                        <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow group">
                            <img src="/images/capability-irrigation.jpg" alt="Irrigation Works" className="w-full h-48 object-cover mb-6 grayscale group-hover:grayscale-0 transition-all duration-500" />
                            <h3 className="text-2xl font-bold font-heading text-primary mb-3">Irrigation & Canal Development</h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">Canal Desilting, Weed Removal, Lock Gate Repairs, Shutter Maintenance, Water Regulation Works.</p>
                        </div>
                        {/* Land */}
                        <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow group">
                            <img src="/images/capability-landdev.jpg" alt="Land Development" className="w-full h-48 object-cover mb-6 grayscale group-hover:grayscale-0 transition-all duration-500" />
                            <h3 className="text-2xl font-bold font-heading text-primary mb-3">Land Development & Site Preparation</h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">Jungle Clearance, Mechanical Tilling, Gravel Filling, Deep Earthwork & Site Levelling.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-24 bg-primary">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        title="Featured Major Projects"
                        subtitle="EXECUTION PORTFOLIO"
                        light={true}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                        {projectsData.slice(0, 4).map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                    <div className="text-center mt-16">
                        <Link
                            to="/projects"
                            className="inline-flex items-center text-secondary font-bold hover:text-white transition-colors border-b-2 border-secondary pb-1 uppercase tracking-wide text-sm"
                        >
                            View All Projects <ArrowRight className="ml-2" size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Execution Process */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        title="Standardized Execution Process"
                        subtitle="HOW WE OPERATE"
                    />
                    <div className="max-w-5xl mx-auto mt-16">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                            <div className="flex flex-col items-center text-center group">
                                <div className="w-20 h-20 bg-light rounded-full flex items-center justify-center border-2 border-primary mb-4 group-hover:bg-secondary group-hover:border-secondary transition-colors">
                                    <FileText className="text-primary" size={32} />
                                </div>
                                <h4 className="font-bold text-primary font-heading uppercase text-sm mb-2">Technical Planning</h4>
                                <p className="text-gray-500 text-xs text-center border-t border-gray-200 pt-2">Tender & Estimation</p>
                            </div>
                            <div className="flex flex-col items-center text-center group">
                                <div className="w-20 h-20 bg-light rounded-full flex items-center justify-center border-2 border-primary mb-4 group-hover:bg-secondary group-hover:border-secondary transition-colors">
                                    <Tractor className="text-primary" size={32} />
                                </div>
                                <h4 className="font-bold text-primary font-heading uppercase text-sm mb-2">Resource Mob</h4>
                                <p className="text-gray-500 text-xs text-center border-t border-gray-200 pt-2">Machinery & Labor</p>
                            </div>
                            <div className="flex flex-col items-center text-center group">
                                <div className="w-20 h-20 bg-light rounded-full flex items-center justify-center border-2 border-primary mb-4 group-hover:bg-secondary group-hover:border-secondary transition-colors">
                                    <Hammer className="text-primary" size={32} />
                                </div>
                                <h4 className="font-bold text-primary font-heading uppercase text-sm mb-2">Site Execution</h4>
                                <p className="text-gray-500 text-xs text-center border-t border-gray-200 pt-2">Supervision & Execution</p>
                            </div>
                            <div className="flex flex-col items-center text-center group">
                                <div className="w-20 h-20 bg-light rounded-full flex items-center justify-center border-2 border-primary mb-4 group-hover:bg-secondary group-hover:border-secondary transition-colors">
                                    <CheckSquare className="text-primary" size={32} />
                                </div>
                                <h4 className="font-bold text-primary font-heading uppercase text-sm mb-2">Compliance</h4>
                                <p className="text-gray-500 text-xs text-center border-t border-gray-200 pt-2">Quality Monitoring</p>
                            </div>
                            <div className="flex flex-col items-center text-center group">
                                <div className="w-20 h-20 bg-light rounded-full flex items-center justify-center border-2 border-primary mb-4 group-hover:bg-secondary group-hover:border-secondary transition-colors">
                                    <CheckCircle className="text-primary" size={32} />
                                </div>
                                <h4 className="font-bold text-primary font-heading uppercase text-sm mb-2">Handover</h4>
                                <p className="text-gray-500 text-xs text-center border-t border-gray-200 pt-2">Timely Completion</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTASection />
        </div>
    );
};

export default Home;
