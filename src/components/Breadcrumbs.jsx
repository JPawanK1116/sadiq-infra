import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    // If we are on home page, don't show breadcrumbs
    if (pathnames.length === 0) return null;

    return (
        <nav className="bg-gray-100 py-3 border-b border-gray-200" aria-label="Breadcrumb">
            <div className="container mx-auto px-4">
                <ol className="list-none p-0 inline-flex items-center">
                    <li className="flex items-center">
                        <Link to="/" className="text-gray-500 hover:text-secondary transition-colors">
                            <Home size={16} />
                        </Link>
                    </li>
                    {pathnames.map((value, index) => {
                        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                        const isLast = index === pathnames.length - 1;
                        const title = value.charAt(0).toUpperCase() + value.slice(1);

                        return (
                            <li key={to} className="flex items-center">
                                <ChevronRight size={14} className="text-gray-400 mx-2" />
                                {isLast ? (
                                    <span className="text-primary font-semibold text-sm" aria-current="page">
                                        {title}
                                    </span>
                                ) : (
                                    <Link to={to} className="text-gray-500 hover:text-secondary text-sm transition-colors">
                                        {title}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </div>
        </nav>
    );
};

export default Breadcrumbs;
