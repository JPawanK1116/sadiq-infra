import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { companyConfig } from '../config/company';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary text-white pt-16 pb-8 border-b border-gray-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-heading font-bold mb-4 text-white">
                            SADIQ INFRA
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            {companyConfig.tagline} We are dedicated to delivering high-quality construction services with a focus on strength, integrity, and customer satisfaction.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary transition-colors text-white" aria-label="Facebook">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary transition-colors text-white" aria-label="Instagram">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-secondary transition-colors text-white" aria-label="LinkedIn">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-secondary pl-3">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Leadership', path: '/leadership' },
                                { name: 'Services', path: '/services' },
                                { name: 'Projects', path: '/projects' },
                                { name: 'Contact', path: '/contact' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-secondary transition-colors flex items-center group"
                                    >
                                        <ArrowRight size={14} className="mr-2 group-hover:translate-x-1 transition-transform" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-secondary pl-3">
                            Our Services
                        </h4>
                        <ul className="space-y-3">
                            {[
                                'House Construction',
                                'Villa Construction',
                                'Commercial Buildings',
                                'Road Development',
                                'Structural Works',
                                'Renovation'
                            ].map((service) => (
                                <li key={service} className="text-gray-400 flex items-start">
                                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-secondary pl-3">
                            Contact Us
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                                <span className="text-gray-400">{companyConfig.address}</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="text-secondary mr-3 flex-shrink-0" size={20} />
                                <a href={`tel:${companyConfig.phone.replace(/\s+/g, '')}`} className="text-gray-400 hover:text-white transition-colors">
                                    {companyConfig.phone}
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Mail className="text-secondary mr-3 flex-shrink-0" size={20} />
                                <a href={`mailto:${companyConfig.email}`} className="text-gray-400 hover:text-white transition-colors">
                                    {companyConfig.email}
                                </a>
                            </li>
                            <li className="flex items-start">
                                <Clock className="text-secondary mt-1 mr-3 flex-shrink-0" size={20} />
                                <span className="text-gray-400">
                                    {companyConfig.workingHours} <br />
                                    <span className="text-xs text-gray-500">Sunday Closed</span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center md:text-left">
                    <p className="text-gray-500 text-sm">
                        &copy; {currentYear} {companyConfig.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
