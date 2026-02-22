import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
import { companyConfig } from '../config/company';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Leadership', path: '/leadership' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    const services = [
        'Civil & Structural',
        'Water & Sewerage',
        'Irrigation & Canal',
        'Land Development',
        'Structural Repairs',
        'Govt Housing'
    ];

    return (
        <footer className="bg-dark text-white border-t border-white/5">
            {/* Main Footer */}
            <div className="container mx-auto px-4 md:px-6 pt-20 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Company */}
                    <div>
                        <div className="flex items-center mb-6">
                            <div className="w-10 h-10 bg-secondary flex items-center justify-center font-heading font-black text-primary text-lg mr-3">S</div>
                            <div>
                                <h3 className="text-lg font-heading font-bold text-white tracking-wider">SADIQ INFRA</h3>
                                <p className="text-[10px] text-secondary/70 tracking-[0.2em] uppercase">Since 2012</p>
                            </div>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Government-registered civil contracting firm delivering infrastructure projects across Andhra Pradesh & Telangana since 2012.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-9 h-9 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all text-gray-400 hover:text-primary" aria-label="Facebook">
                                <Facebook size={16} />
                            </a>
                            <a href="#" className="w-9 h-9 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all text-gray-400 hover:text-primary" aria-label="Instagram">
                                <Instagram size={16} />
                            </a>
                            <a href="#" className="w-9 h-9 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all text-gray-400 hover:text-primary" aria-label="LinkedIn">
                                <Linkedin size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold mb-6 text-secondary/80 uppercase tracking-[0.2em]">Navigation</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-gray-400 hover:text-secondary transition-colors text-sm flex items-center group">
                                        <ArrowUpRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-sm font-bold mb-6 text-secondary/80 uppercase tracking-[0.2em]">Expertise</h4>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service} className="text-gray-400 text-sm flex items-start">
                                    <span className="w-1 h-1 bg-secondary mt-2 mr-3 flex-shrink-0"></span>
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-bold mb-6 text-secondary/80 uppercase tracking-[0.2em]">Reach Us</h4>
                        <ul className="space-y-5">
                            <li className="flex items-start">
                                <Phone className="text-secondary mt-0.5 mr-3 flex-shrink-0" size={16} />
                                <div>
                                    <a href={`tel:${companyConfig.phone.replace(/\s+/g, '')}`} className="text-gray-300 hover:text-white transition-colors text-sm block">{companyConfig.phone}</a>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <Mail className="text-secondary mt-0.5 mr-3 flex-shrink-0" size={16} />
                                <a href={`mailto:${companyConfig.email}`} className="text-gray-300 hover:text-white transition-colors text-sm">{companyConfig.email}</a>
                            </li>
                            <li className="flex items-start">
                                <MapPin className="text-secondary mt-0.5 mr-3 flex-shrink-0" size={16} />
                                <span className="text-gray-400 text-sm">{companyConfig.address}</span>
                            </li>
                            <li className="flex items-start">
                                <Clock className="text-secondary mt-0.5 mr-3 flex-shrink-0" size={16} />
                                <span className="text-gray-400 text-sm">{companyConfig.workingHours}<br /><span className="text-gray-600 text-xs">Sunday Closed</span></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5">
                <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-xs tracking-wide">
                        &copy; {currentYear} {companyConfig.name}. All rights reserved.
                    </p>
                    <a href="https://crawlup.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
                        <img src="/images/crawlop-badge.png" alt="Crawlop" className="h-5 w-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                        <span className="text-gray-600 text-xs group-hover:text-secondary transition-colors">Developed by Crawlop</span>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
