import React from 'react';
import { MapPin } from 'lucide-react';

const ProjectCard = ({ project }) => {
    return (
        <div className="group relative overflow-hidden rounded-lg shadow-lg h-80 cursor-pointer">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block bg-secondary text-white text-xs font-bold px-2 py-1 rounded mb-2 uppercase tracking-wide">
                        {project.category}
                    </span>
                    <h3 className="text-xl font-bold font-heading text-white mb-1">
                        {project.title}
                    </h3>
                    <div className="flex items-center text-gray-300 text-sm mb-2">
                        <MapPin size={14} className="mr-1" />
                        {project.location}
                    </div>
                    <p className="text-gray-400 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {project.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
