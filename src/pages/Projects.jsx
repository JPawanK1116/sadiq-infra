import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Breadcrumbs from '../components/Breadcrumbs';
import ProjectCard from '../components/ProjectCard';
import CTASection from '../components/CTASection';
import MetaWrapper from '../components/MetaWrapper';
import { projectsData } from '../data/projectsData';

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const categories = [
        'All',
        'Roads & Urban Infrastructure',
        'Irrigation & Canal Works',
        'Water Supply & Pipeline Works',
        'Land Development',
        'Structural & Specialized Works',
        'Govt Housing & Supply'
    ];

    const filteredProjects = filter === 'All' ? projectsData : projectsData.filter(p => p.category === filter);

    return (
        <div className="flex flex-col bg-white">
            <MetaWrapper
                title="Project Portfolio | 33+ Government Projects – Sadik Infra"
                description="Explore our high-value execution portfolio across Roads, Irrigation, Water Supply, Structural Works, and Government Housing."
            />

            {/* Header */}
            <div className="bg-primary text-white py-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-15 bg-[url('/images/road-construction.jpg')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <p className="text-secondary text-sm font-semibold uppercase tracking-[0.3em] mb-4">Proven Execution</p>
                    <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-4 hero-heading tracking-tight">Project Portfolio</h1>
                    <p className="text-lg text-gray-400 max-w-xl mx-auto font-light hero-subtext">33+ government and corporate deployments.</p>
                </div>
            </div>
            <Breadcrumbs />

            <section className="py-20 bg-light min-h-[600px]">
                <div className="container mx-auto px-4">
                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-2 mb-16">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-5 py-2 font-bold uppercase tracking-wider text-[11px] border transition-all duration-300 ${filter === cat
                                    ? 'bg-primary border-primary text-secondary shadow-lg'
                                    : 'bg-white border-gray-200 text-gray-500 hover:border-primary hover:text-primary'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Count */}
                    <p className="text-center text-gray-400 text-sm mb-8 font-medium">
                        Showing <span className="text-primary font-bold">{filteredProjects.length}</span> projects
                    </p>

                    {/* Grid */}
                    <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" layout>
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <ProjectCard project={project} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-24 bg-white border border-gray-100 mt-8">
                            <p className="text-gray-500 font-heading text-lg mb-4">No projects found in this category.</p>
                            <button onClick={() => setFilter('All')} className="text-secondary font-bold hover:text-primary transition-colors underline uppercase text-sm tracking-wide">
                                View All Projects
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
