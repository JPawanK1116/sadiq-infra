import React from 'react';
import { MapPin, Calendar, ScrollText, IndianRupee } from 'lucide-react';

const ProjectCard = ({ project }) => {
    return (
        <div className="group relative overflow-hidden h-[220px] md:h-[380px] cursor-pointer bg-primary border border-white/5 premium-card">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-90"
                loading="lazy"
                decoding="async"
            />
            {/* Status Badge */}
            <div className="absolute top-2 md:top-4 right-2 md:right-4 z-20">
                <span className={`px-2 md:px-3 py-0.5 md:py-1 text-[8px] md:text-[10px] font-bold uppercase tracking-wider ${project.status === 'Completed' ? 'bg-green-500/90 text-white' : 'bg-secondary text-primary'}`}>
                    {project.status}
                </span>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5 transform translate-y-2 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block bg-secondary/90 text-primary text-[8px] md:text-[10px] font-bold px-1.5 md:px-2 py-0.5 mb-1 md:mb-2 uppercase tracking-wider">
                        {project.category}
                    </span>
                    <h3 className="text-xs md:text-lg font-bold font-heading text-white mb-1 md:mb-2 leading-snug line-clamp-2">{project.title}</h3>

                    {/* Desktop details */}
                    <div className="hidden md:grid grid-cols-2 gap-1.5 text-gray-400 text-[11px] mb-3">
                        <div className="flex items-center"><MapPin size={10} className="mr-1 text-secondary" />{project.location}</div>
                        <div className="flex items-center"><Calendar size={10} className="mr-1 text-secondary" />{project.year}</div>
                        <div className="flex items-center"><ScrollText size={10} className="mr-1 text-secondary" /><span className="truncate">{project.tenderId}</span></div>
                        <div className="flex items-center"><IndianRupee size={10} className="mr-1 text-secondary" />{project.contractValue}</div>
                    </div>

                    {/* Mobile details */}
                    <div className="flex md:hidden items-center gap-2 text-gray-400 text-[9px]">
                        <span className="flex items-center"><MapPin size={8} className="mr-0.5 text-secondary" />{project.location}</span>
                        <span>•</span>
                        <span>{project.contractValue}</span>
                    </div>

                    <p className="text-gray-500 text-xs line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 border-t border-white/5 pt-2 hidden md:block">
                        {project.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
