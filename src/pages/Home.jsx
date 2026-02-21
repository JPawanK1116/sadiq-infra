import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, Users, HardHat, ArrowRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import CTASection from '../components/CTASection';
import ProcessStep from '../components/ProcessStep';
import MetaWrapper from '../components/MetaWrapper';
import { servicesData } from '../data/servicesData';
import { projectsData } from '../data/projectsData';

const Home = () => {
    // Preload hero image logic could go here or in a custom hook

    return (
        <div className="flex flex-col">
            <MetaWrapper
                title="Construction Company in Guntur | Best Govt Contractors"
                description="Sadiq Infra Experts in Residential Construction, Commercial Building, and Road Works with Government Grade Quality. Call for Free Consultation."
            />

            {/* Hero Section */}
            <section className="relative h-screen min-h-[600px] flex items-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/hero-construction.jpg"
                        alt="Construction Site"
                        className="w-full h-full object-cover"
                        loading="eager" // Important for LCP
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-white">
                    <div className="max-w-3xl">
                        <p className="text-secondary font-bold tracking-widest uppercase mb-4 animate-fade-in-up">
                            Experienced Government Contractors
                        </p>
                        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight animate-fade-in-up delay-100 hero-heading">
                            Building Trust. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-200">
                                Delivering Strength.
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-up delay-200 max-w-2xl hero-subtext">
                            Now serving private clients with the same rigorous quality standards used in government infrastructure projects.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                            <Link
                                to="/contact"
                                className="bg-secondary text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-opacity-90 transition-all text-center"
                            >
                                Free Consultation
                            </Link>
                            <Link
                                to="/projects"
                                className="border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-primary transition-all text-center"
                            >
                                View Experience
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Badges Strip */}
            <section className="bg-white py-12 border-b border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { icon: ShieldCheck, title: "Govt Certified", desc: "Registered Class-A Contractors" },
                            { icon: HardHat, title: "Skilled Engineers", desc: "Technical expertise on-site" },
                            { icon: Clock, title: "On-Time Completion", desc: "Strict adherence to timelines" },
                            { icon: Users, title: "Transparent Dealings", desc: "No hidden costs, clear agreements" },
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-center p-4 hover:shadow-lg rounded-lg transition-shadow bg-gray-50 md:bg-transparent">
                                <item.icon className="text-secondary mb-3" size={40} />
                                <h3 className="font-bold text-lg text-primary">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-light">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        title="Our Construction Services"
                        subtitle="WHAT WE OFFER"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {servicesData.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link
                            to="/services"
                            className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors border-b-2 border-secondary pb-1"
                        >
                            View All Services Details <ArrowRight className="ml-2" size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2">
                            <SectionTitle
                                title="Why Choose Sadiq Infra?"
                                subtitle="THE DIFFERENCE"
                                center={false}
                            />
                            <div className="space-y-6">
                                {[
                                    "Government-grade quality control methodology applied to private projects.",
                                    "Direct supervision by experienced civil engineers, not just mistris.",
                                    "Use of laboratory-tested concrete mixes and branded steel.",
                                    "Detailed estimation transparency - pay for what you actually get.",
                                    "Weekly progress reports with photos sent to client WhatsApp."
                                ].map((point, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                                            <ShieldCheck size={14} className="text-green-600" />
                                        </div>
                                        <p className="ml-4 text-gray-700">{point}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
                            <img
                                src="/images/about-engineer.jpg"
                                alt="Engineer Planning"
                                className="rounded-lg shadow-2xl w-full object-cover h-[500px]"
                                loading="lazy"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-lg shadow-xl hidden md:block max-w-xs">
                                <p className="text-white font-heading font-bold text-xl mb-2">
                                    "Quality is not an act, it is a habit."
                                </p>
                                <p className="text-secondary text-sm">
                                    - Our Core Philosophy
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Steps */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        title="Our Working Process"
                        subtitle="HOW WE BUILD"
                        light={true}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ProcessStep number="01" title="Site Visit & Plan" description="We survey your plot and create a customized floor plan." />
                        <ProcessStep number="02" title="Estimation" description="Detailed cost breakdown and transparency agreement." />
                        <ProcessStep number="03" title="Construction" description="Execution with quality checks at every plinth level." />
                        <ProcessStep number="04" title="Handover" description="Final finishing and key handover on promised date." />
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="py-20 bg-light">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        title="Featured Projects"
                        subtitle="RECENT WORKS"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {projectsData.slice(0, 3).map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link
                            to="/projects"
                            className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors inline-block"
                        >
                            View Full Gallery
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTASection />
        </div>
    );
};

export default Home;
