import React from 'react';

const SectionTitle = ({ title, subtitle, light = false, center = true }) => {
    return (
        <div className={`mb-12 ${center ? 'text-center' : ''}`}>
            {subtitle && (
                <p className={`text-sm font-semibold uppercase tracking-[0.25em] mb-3 ${light ? 'text-secondary/80' : 'text-secondary'}`}>
                    {subtitle}
                </p>
            )}
            <h2 className={`text-3xl md:text-4xl font-heading font-extrabold leading-tight ${light ? 'text-white' : 'text-primary'}`}>
                {title}
            </h2>
            <div className={`mt-4 h-0.5 w-16 bg-secondary ${center ? 'mx-auto' : ''}`}></div>
        </div>
    );
};

export default SectionTitle;
