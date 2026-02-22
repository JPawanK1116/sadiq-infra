import React from 'react';
import SectionTitle from '../components/SectionTitle';
import StatsCounter from '../components/StatsCounter';
import Breadcrumbs from '../components/Breadcrumbs';
import CTASection from '../components/CTASection';
import MetaWrapper from '../components/MetaWrapper';
import { Target, Award, Shield, FileCheck } from 'lucide-react';

const About = () => {
    return (
        <div className="flex flex-col">
            <MetaWrapper
                title="About Sadiq Infra | Government Registered Contactors"
                description="Since 2012, Sadiq Infra is a trusted infrastructure contractor executing large-scale government projects across AP & Telangana."
            />

            {/* Page Header */}
            <div className="bg-primary text-white py-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('/images/capability-civil.jpg')] bg-cover bg-center"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-4 hero-heading uppercase tracking-wide">
                        About Sadiq Infra
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light hero-subtext">
                        Delivering Multi-Crore Infrastructure Execution.
                    </p>
                </div>
            </div>

            <Breadcrumbs />

            {/* Intro Story */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/2">
                            <div className="relative p-4 border border-gray-200 bg-light">
                                <img
                                    src="/images/about-site-supervision.jpg"
                                    alt="Site Supervision"
                                    className="w-full grayscale hover:grayscale-0 transition-all duration-700"
                                    loading="lazy"
                                />
                                <div className="absolute -bottom-6 -right-6 bg-secondary text-primary p-6 shadow-lg max-w-[200px] border border-primary">
                                    <p className="font-heading font-extrabold text-4xl mb-1">10+</p>
                                    <p className="font-bold text-sm uppercase">Years of Field Leadership</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <SectionTitle
                                title="Building National Infrastructure Since 2012"
                                subtitle="FIRM HISTORY"
                                center={false}
                            />
                            <div className="space-y-6 text-gray-700 text-lg font-light leading-relaxed">
                                <p>
                                    Sadiq Infra was founded by Shaik Jani, an experienced civil contractor active in infrastructure development since 2012. Beginning his journey as a subcontractor for nationally recognized firms, he gained practical experience in national highways, railway infrastructure, and urban waterworks.
                                </p>
                                <p>
                                    Through consistent performance and successful execution of complex government projects, the firm upgraded its contractor classification and expanded operations across Andhra Pradesh and Telangana.
                                </p>
                                <div className="border-l-4 border-secondary pl-6 py-2 bg-light">
                                    <p className="text-primary font-semibold italic text-base">
                                        Today, Sadiq Infra stands as a trusted infrastructure contractor delivering government-grade quality standards to every project we undertake, bridging the gap between public scale and private precision.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-primary text-white border-y border-gray-800">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-700">
                        <div className="flex flex-col items-center justify-center p-6 text-center">
                            <p className="text-5xl font-heading font-extrabold text-secondary mb-2">33+</p>
                            <p className="text-gray-300 font-medium uppercase tracking-wider text-sm">Government Projects</p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-6 text-center">
                            <p className="text-5xl font-heading font-extrabold text-white mb-2">₹5+ Cr</p>
                            <p className="text-gray-300 font-medium uppercase tracking-wider text-sm">Largest Project</p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-6 text-center">
                            <p className="text-5xl font-heading font-extrabold text-secondary mb-2">10+</p>
                            <p className="text-gray-300 font-medium uppercase tracking-wider text-sm">Years Experience</p>
                        </div>
                        <div className="flex flex-col items-center justify-center p-6 text-center">
                            <p className="text-5xl font-heading font-extrabold text-white mb-2">2</p>
                            <p className="text-gray-300 font-medium uppercase tracking-wider text-sm">Operational States</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-light">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-heading font-extrabold text-primary mb-4">Core Operating Principles</h2>
                        <p className="text-gray-600">The pillars that sustain our firm's reputation in public infrastructure.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-10 border border-gray-200">
                            <Shield className="text-secondary w-12 h-12 mb-6" strokeWidth={1.5} />
                            <h3 className="text-xl font-bold font-heading mb-4 text-primary">Compliance First</h3>
                            <p className="text-gray-600 font-light">
                                Strict adherence to Central and State PWD codes, safety protocols, and labor laws on every site.
                            </p>
                        </div>

                        <div className="bg-white p-10 border border-t-4 border-t-secondary border-gray-200 transform md:-translate-y-4 shadow-lg">
                            <Award className="text-primary w-12 h-12 mb-6" strokeWidth={1.5} />
                            <h3 className="text-xl font-bold font-heading mb-4 text-primary">Execution Quality</h3>
                            <p className="text-gray-600 font-light">
                                Multi-level quality checks for materials, mixture ratios, and structural tolerances to ensure legacy-level durability.
                            </p>
                        </div>

                        <div className="bg-white p-10 border border-gray-200">
                            <FileCheck className="text-secondary w-12 h-12 mb-6" strokeWidth={1.5} />
                            <h3 className="text-xl font-bold font-heading mb-4 text-primary">Tender Integrity</h3>
                            <p className="text-gray-600 font-light">
                                Transparent billing, precise estimation, and ethical operational practices from mobilization to handover.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default About;
