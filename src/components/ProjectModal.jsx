import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, ScrollText, IndianRupee, ShieldCheck, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {/* Backdrop */}
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>

                {/* Modal */}
                <motion.div
                    className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl z-10"
                    initial={{ scale: 0.9, y: 40, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 0.9, y: 40, opacity: 0 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 z-20 w-8 h-8 bg-primary/80 text-white flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors"
                        aria-label="Close"
                    >
                        <X size={16} />
                    </button>

                    {/* Hero Image */}
                    <div className="relative h-48 md:h-64 overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                            <span className="inline-block bg-secondary text-primary text-[9px] md:text-[10px] font-bold px-2 py-0.5 mb-2 uppercase tracking-wider">
                                {project.category}
                            </span>
                            <h2 className="text-lg md:text-2xl font-heading font-extrabold text-white leading-snug">
                                {project.title}
                            </h2>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 md:p-6">
                        {/* Status Badge */}
                        <div className="flex items-center justify-between mb-5">
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${project.status === 'Completed' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-amber-50 text-amber-700 border border-amber-200'}`}>
                                <ShieldCheck size={12} />
                                {project.status}
                            </span>
                            <span className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">
                                Sadik Infra
                            </span>
                        </div>

                        {/* Key Details Grid */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                            {[
                                { icon: MapPin, label: 'Location', value: project.location },
                                { icon: Calendar, label: 'Year', value: project.year },
                                { icon: ScrollText, label: 'Tender / Dept', value: project.tenderId },
                                { icon: IndianRupee, label: 'Contract Value', value: project.contractValue },
                            ].map((item, i) => (
                                <div key={i} className="bg-light p-3 border border-gray-100">
                                    <div className="flex items-center gap-1.5 mb-1">
                                        <item.icon size={12} className="text-secondary" />
                                        <span className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wider">{item.label}</span>
                                    </div>
                                    <p className="text-xs md:text-sm font-semibold text-primary">{item.value}</p>
                                </div>
                            ))}
                        </div>

                        {/* Description */}
                        <div className="mb-6">
                            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Project Description</h4>
                            <div className="border-l-2 border-secondary pl-4">
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{project.description}</p>
                            </div>
                        </div>

                        {/* Category Badge */}
                        <div className="bg-primary p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Building2 size={20} className="text-secondary" />
                                <div>
                                    <p className="text-[9px] text-gray-500 uppercase tracking-wider">Category</p>
                                    <p className="text-white text-xs md:text-sm font-bold">{project.category}</p>
                                </div>
                            </div>
                            <Link
                                to="/contact"
                                onClick={onClose}
                                className="bg-secondary text-primary px-4 py-2 text-[10px] md:text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-1"
                            >
                                Inquire <ArrowRight size={12} />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ProjectModal;
