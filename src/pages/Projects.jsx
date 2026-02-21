import React, { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import ProjectCard from '../components/ProjectCard';
import CTASection from '../components/CTASection';
import MetaWrapper from '../components/MetaWrapper';
import { projectsData } from '../data/projectsData';

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Residential', 'Structural', 'Roads'];

    const filteredProjects = filter === 'All'
        ? projectsData
        : projectsData.filter(project => project.category === filter);

    return (
        <div className="flex flex-col">
            <MetaWrapper
                title="Construction Projects & Portfolio | Sadiq Infra"
                description="Explore our execution experience in Residential Villas, High-Rise Apartments, Commercial Complexes, and Government Road Projects in Andhra Pradesh."
            />

            {/* Page Header */}
            <div className="bg-primary text-white py-16 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('/images/hero-construction.jpg')] bg-cover bg-center"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 hero-heading">Execution Experience</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto hero-subtext">
                        A portfolio of our completed and ongoing construction excellence.
                    </p>
                </div>
            </div>

            <Breadcrumbs />

            <section className="py-16 bg-white min-h-[600px]">
                <div className="container mx-auto px-4">

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-6 py-2 rounded-full font-medium transition-all ${filter === category
                                    ? 'bg-secondary text-white shadow-lg transform scale-105'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">No projects found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default Projects;
