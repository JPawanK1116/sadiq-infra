import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ service }) => {
    const Icon = service.icon;

    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group md:h-full flex flex-col overflow-hidden border border-gray-100">
            <div className="h-48 overflow-hidden relative">
                <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                    {Icon && (
                        <div className="bg-secondary p-3 rounded-full text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            <Icon size={24} />
                        </div>
                    )}
                </div>
            </div>

            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold font-heading mb-3 text-primary group-hover:text-secondary transition-colors">
                    {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {service.description}
                </p>

                <div className="mt-auto">
                    <Link
                        to="/services"
                        className="text-secondary font-semibold text-sm flex items-center group-hover:translate-x-1 transition-transform"
                    >
                        Learn More <ArrowRight size={16} className="ml-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
