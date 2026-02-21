import React from 'react';
import { Link } from 'react-router-dom';
import MetaWrapper from '../components/MetaWrapper';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <MetaWrapper
                title="Page Not Found"
                description="The page you are looking for does not exist."
            />
            <h1 className="text-6xl font-bold text-gray-200 mb-4">404</h1>
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">Page Not Found</h2>
            <p className="text-gray-600 mb-8 max-w-md">
                The page you are looking for doesn't exist or has been moved.
            </p>
            <Link
                to="/"
                className="bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary transition-colors font-medium"
            >
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
