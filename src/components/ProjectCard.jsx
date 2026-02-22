import React from 'react';
import { MapPin, Calendar, ScrollText, IndianRupee } from 'lucide-react';

const ProjectCard = ({ project }) => {
    return (
        <div className="group relative overflow-hidden rounded-lg shadow-lg h-[400px] cursor-pointer bg-primary">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                loading="lazy"
            />
            {/* Status Badge */}
            <div className="absolute top-4 right-4 z-20">
                <span className={`px-3 py-1 text-xs font-bold rounded-full ${project.status === 'Completed' ? 'bg-green-500 text-white' : 'bg-secondary text-primary'}`}>
                    {project.status}
                </span>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block bg-secondary text-primary text-xs font-bold px-2 py-1 rounded mb-2 uppercase tracking-wide">
                        {project.category}
                    </span>
                    <h3 className="text-xl font-bold font-heading text-white mb-2 leading-snug">
                        {project.title}
                    </h3>

                    <div className="grid grid-cols-2 gap-2 text-gray-300 text-xs mb-3">
                        <div className="flex items-center">
                            <MapPin size={12} className="mr-1 text-secondary" />
                            {project.location}
                        </div>
                        <div className="flex items-center">
                            <Calendar size={12} className="mr-1 text-secondary" />
                            {project.year}
                        </div>
                        <div className="flex items-center">
                            <ScrollText size={12} className="mr-1 text-secondary" />
                            <span className="truncate" title={project.tenderId}>{project.tenderId}</span>
                        </div>
                        <div className="flex items-center">
                            <IndianRupee size={12} className="mr-1 text-secondary" />
                            {project.contractValue}
                        </div>
                    </div>

                    <p className="text-gray-400 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 border-t border-gray-700 pt-3 mt-1">
                        {project.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
