import React from 'react';
import SectionTitle from '../components/SectionTitle';
import StatsCounter from '../components/StatsCounter';
import Breadcrumbs from '../components/Breadcrumbs';
import CTASection from '../components/CTASection';
import MetaWrapper from '../components/MetaWrapper';
import { Target, Award, Users } from 'lucide-react';

const About = () => {
    return (
        <div className="flex flex-col">
            <MetaWrapper
                title="About Us | Experienced Civil Engineers & Contractors"
                description="Since 2010, Sadiq Infra has been delivering quality construction in Guntur & AP. Learn about our journey from government projects to private villas."
            />

            {/* Page Header */}
            <div className="bg-primary text-white py-16 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('/images/about-site-work.jpg')] bg-cover bg-center"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 hero-heading">About Us</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto hero-subtext">
                        From government contracts to premium private construction.
                    </p>
                </div>
            </div>

            <Breadcrumbs />

            {/* Intro Story */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="lg:w-1/2">
                            <img
                                src="/images/about-engineer.jpg"
                                alt="Our Team"
                                className="rounded-lg shadow-xl w-full"
                                loading="lazy"
                            />
                        </div>
                        <div className="lg:w-1/2">
                            <SectionTitle
                                title="Building With Integrity Since 2010"
                                subtitle="OUR STORY"
                                center={false}
                            />
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Sadiq Infra started as a specialized contractor for challenging government infrastructure projects, including bridges, drainage systems, and certified roads in Andhra Pradesh.
                            </p>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Over the last decade, we have earned a reputation for <strong>uncompromising quality</strong> and <strong>engineering precision</strong>. Recognizing the lack of professional grade construction in the private sector, we expanded our services to help individual home owners build their dream properties with the same rigor used in public infrastructure.
                            </p>
                            <div className="bg-light p-6 rounded-l border-l-4 border-secondary">
                                <p className="text-primary font-bold italic">
                                    "We don't just build houses; we engineer homes that last generations."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-primary text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-700">
                        <StatsCounter end={12} suffix="+" label="Years Experience" />
                        <StatsCounter end={50} suffix="+" label="Projects Completed" />
                        <StatsCounter end={150} suffix="+" label="Skilled Workers" />
                        <StatsCounter end={100} suffix="%" label="Client Satisfaction" />
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-light">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Target size={32} />
                            </div>
                            <h3 className="text-xl font-bold font-heading mb-4 text-primary">Our Mission</h3>
                            <p className="text-gray-600">
                                To bring professional engineering standards to individual home construction and deliver projects on time, every time.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                            <div className="w-16 h-16 bg-secondary/20 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                                <Award size={32} />
                            </div>
                            <h3 className="text-xl font-bold font-heading mb-4 text-primary">Our Quality</h3>
                            <p className="text-gray-600">
                                We use only branded materials (UltraTech, Tata Steel) and adhere to strict structural safety codes tailored for AP soil conditions.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Users size={32} />
                            </div>
                            <h3 className="text-xl font-bold font-heading mb-4 text-primary">Our Team</h3>
                            <p className="text-gray-600">
                                A dedicated workforce of civil engineers, supervisors, and skilled masons who have been with us for years.
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
