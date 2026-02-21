import React from 'react';

const ProcessStep = ({ number, title, description }) => {
    return (
        <div className="relative flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 h-full">
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 shadow-lg z-10 relative">
                {number}
            </div>
            <h3 className="text-lg font-bold font-heading mb-2 text-primary">{title}</h3>
            <p className="text-sm text-gray-500">{description}</p>

            {/* Connector Line (hidden on mobile or handled by parent grid) */}
        </div>
    );
};

export default ProcessStep;
