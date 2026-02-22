import React, { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import ProjectCard from '../components/ProjectCard';
import CTASection from '../components/CTASection';
import MetaWrapper from '../components/MetaWrapper';
import { projectsData } from '../data/projectsData';

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Roads & Drains', 'Irrigation & Canal', 'Water Supply', 'Housing', 'Structural Repairs', 'Land Development'];

    const filteredProjects = filter === 'All'
        ? projectsData
        : projectsData.filter(project => project.category === filter);

    return (
        <div className="flex flex-col bg-white">
            <MetaWrapper
                title="Project Portfolio | Sadiq Infra Civil Contracting"
                description="Explore our high-value execution portfolio. Proven capability in delivering national highways, massive irrigation projects, and affordable housing."
            />

            {/* Page Header */}
            <div className="bg-primary text-white py-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('/images/project-nh16.jpg')] bg-cover bg-center"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-4 hero-heading uppercase tracking-wide">
                        Execution Portfolio
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light hero-subtext">
                        A catalog of our large-scale government and corporate deployments.
                    </p>
                </div>
            </div>

            <Breadcrumbs />

            <section className="py-24 bg-light min-h-[600px]">
                <div className="container mx-auto px-4 lg:px-8">

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-3 mb-16">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-5 py-2.5 font-bold uppercase tracking-wider text-xs border transition-all ${filter === category
                                    ? 'bg-primary border-primary text-secondary shadow-md'
                                    : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-32 bg-white border border-gray-200 mt-8 shadow-sm">
                            <p className="text-gray-500 font-heading text-lg">No execution records found in this category.</p>
                            <button
                                onClick={() => setFilter('All')}
                                className="mt-4 text-secondary font-bold hover:text-primary transition-colors underline"
                            >
                                View All Portfolios
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default Projects;
