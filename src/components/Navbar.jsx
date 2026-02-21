import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { companyConfig } from '../config/company';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="bg-white shadow-md sticky top-0 z-40 font-heading">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex flex-col" onClick={() => setIsOpen(false)}>
                        <span className="text-2xl font-bold text-primary tracking-tight">
                            SADIQ INFRA
                        </span>
                        <span className="text-xs text-secondary font-semibold tracking-widest uppercase">
                            Constructing Dreams
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-colors hover:text-secondary ${isActive ? 'text-secondary' : 'text-gray-700'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <Link
                            to="/contact"
                            className="bg-primary text-white px-5 py-2.5 rounded-md font-medium text-sm hover:bg-secondary transition-colors"
                        >
                            Get a Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-secondary focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
                    <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col items-center">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `block w-full text-center px-3 py-3 rounded-md text-base font-medium hover:bg-gray-50 hover:text-secondary ${isActive ? 'text-secondary' : 'text-gray-700'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="mt-4 block w-full text-center bg-primary text-white px-5 py-3 rounded-md font-medium hover:bg-secondary transition-colors"
                        >
                            Get a Quote
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
