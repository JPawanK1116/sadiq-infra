import React from 'react';

const SectionTitle = ({ title, subtitle, center = true, light = false }) => {
    return (
        <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
            {subtitle && (
                <span className={`text-secondary text-sm font-bold tracking-widest uppercase mb-2 block`}>
                    {subtitle}
                </span>
            )}
            <h2 className={`text-3xl md:text-4xl font-heading font-bold ${light ? 'text-white' : 'text-primary'}`}>
                {title}
            </h2>
            <div className={`mt-4 h-1 w-20 bg-secondary rounded ${center ? 'mx-auto' : ''}`}></div>
        </div>
    );
};

export default SectionTitle;
