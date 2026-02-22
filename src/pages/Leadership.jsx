import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Breadcrumbs from '../components/Breadcrumbs';
import CTASection from '../components/CTASection';
import MetaWrapper from '../components/MetaWrapper';
import { CheckCircle2, TrendingUp, Users, HardHat } from 'lucide-react';

const Leadership = () => {
    return (
        <div className="flex flex-col bg-white">
            <MetaWrapper
                title="Leadership | Shaik Jani - Founder Sadiq Infra"
                description="Shaik Jani has over a decade of field-level civil execution experience in government infrastructure."
            />

            {/* Page Header */}
            <div className="bg-primary text-white py-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('/images/project-affordable-housing.jpg')] bg-cover bg-center"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-4 hero-heading uppercase tracking-wide">
                        Leadership
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light hero-subtext">
                        The field expertise behind our infrastructure execution.
                    </p>
                </div>
            </div>

            <Breadcrumbs />

            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto bg-light border border-gray-200 p-8 md:p-16 relative">
                        <div className="flex flex-col md:flex-row gap-12 items-start relative z-10">

                            {/* Portrait */}
                            <div className="w-full md:w-1/3 flex-shrink-0">
                                <div className="border-4 border-white shadow-2xl bg-white p-2 transform md:-rotate-2 transition-transform hover:rotate-0 duration-500">
                                    <img
                                        src="/images/about-founder.jpg"
                                        alt="Shaik Jani - Founder"
                                        className="w-full h-auto object-cover grayscale block"
                                    />
                                    <div className="bg-primary text-center p-4">
                                        <h2 className="text-white font-heading font-bold text-xl uppercase tracking-wider">Shaik Jani</h2>
                                        <p className="text-secondary text-sm font-semibold">Founder & Managing Partner</p>
                                    </div>
                                </div>
                            </div>

                            {/* Bio */}
                            <div className="w-full md:w-2/3 pt-4">
                                <h3 className="text-3xl font-heading font-extrabold text-primary mb-6">Execution Driven Leadership</h3>

                                <div className="space-y-6 text-gray-700 font-light text-lg leading-relaxed">
                                    <p>
                                        With over a decade of hands-on, field-level civil execution experience, Shaik Jani has successfully managed and delivered large-scale infrastructure projects across varied sectors including complex sewerage systems, extensive irrigation canals, deep-trench pipeline networks, affordable housing units, and critical structural rehabilitation works.
                                    </p>
                                    <p>
                                        His leadership is not confined to the boardroom. A strong believer in active site supervision, he ensures that the mobilization of resources, labor workforce management, and stringent quality compliances are maintained at the ground level, ensuring ZERO compromise on structural integrity.
                                    </p>
                                </div>

                                <div className="mt-12 bg-white p-8 border border-gray-200">
                                    <h4 className="text-lg font-bold font-heading uppercase text-primary mb-6 flex items-center">
                                        <HardHat className="text-secondary mr-3" /> Core Competencies
                                    </h4>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                                        <div className="flex items-start">
                                            <CheckCircle2 className="text-secondary mr-3 mt-1 flex-shrink-0" size={18} />
                                            <span className="text-gray-700 font-medium">Budgeting & Tender Execution</span>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle2 className="text-secondary mr-3 mt-1 flex-shrink-0" size={18} />
                                            <span className="text-gray-700 font-medium">Bulk Material Procurement</span>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle2 className="text-secondary mr-3 mt-1 flex-shrink-0" size={18} />
                                            <span className="text-gray-700 font-medium">Machinery Deployment</span>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle2 className="text-secondary mr-3 mt-1 flex-shrink-0" size={18} />
                                            <span className="text-gray-700 font-medium">Government Compliance</span>
                                        </div>
                                        <div className="flex items-start sm:col-span-2">
                                            <CheckCircle2 className="text-secondary mr-3 mt-1 flex-shrink-0" size={18} />
                                            <span className="text-gray-700 font-medium">Multi-location Project Supervision</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Decorative background element */}
                        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary opacity-10"></div>
                        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-secondary opacity-20"></div>
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default Leadership;
