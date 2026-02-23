import React from 'react';
import { Helmet } from 'react-helmet-async';
import { companyConfig } from '../config/company';

const MetaWrapper = ({ title, description, keywords }) => {
    const fullTitle = `${title} | ${companyConfig.name}`;
    const defaultDescription = "Sadik Infra is a leading construction company in Guntur, specializing in residential, commercial, and government infrastructure projects.";
    const defaultKeywords = "construction company, Guntur, builders, residential, commercial, roads, infrastructure";

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <link rel="canonical" href={window.location.href} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={window.location.href} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content="/images/hero-construction.jpg" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={window.location.href} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description || defaultDescription} />
            <meta property="twitter:image" content="/images/hero-construction.jpg" />

            {/* Local Business JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ConstructionBusiness",
                    "name": companyConfig.name,
                    "image": "https://sadiqinfra.com/images/hero-construction.jpg",
                    "@id": "https://sadiqinfra.com",
                    "url": "https://sadiqinfra.com",
                    "telephone": companyConfig.phone,
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Guntur",
                        "addressLocality": "Guntur",
                        "addressRegion": "Andhra Pradesh",
                        "postalCode": "522001",
                        "addressCountry": "IN"
                    },
                    "openingHoursSpecification": {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": [
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday"
                        ],
                        "opens": "09:00",
                        "closes": "19:00"
                    },
                    "priceRange": "₹₹₹"
                })}
            </script>
        </Helmet>
    );
};

export default MetaWrapper;
