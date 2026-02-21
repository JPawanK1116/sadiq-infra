import { Home, Building2, Warehouse, Hammer, Ruler, Hotel } from 'lucide-react';

export const servicesData = [
    {
        id: 1,
        title: "Individual House Construction",
        description: "End-to-end customizable home construction services tailored to your lifestyle and budget.",
        icon: Home,
        image: "/images/house-construction.jpg",
        benefits: [
            "Custom Floor Plan Design",
            "Vastu Compliant Planning",
            "Quality Material Selection",
            "On-Time Project Delivery"
        ],
        idealFor: "Plot owners looking to build their dream home."
    },
    {
        id: 2,
        title: "Villas & Duplex",
        description: "Premium villa and duplex construction with luxury finishes and modern amenities.",
        icon: Hotel, // Using Hotel as proxy for villa
        image: "/images/villa-construction.jpg",
        benefits: [
            "Luxury Interior Design",
            "Smart Home Integration",
            "Landscape & Garden Planning",
            "Premium Fittings & Fixtures"
        ],
        idealFor: "Clients seeking luxury living spaces."
    },
    {
        id: 3,
        title: "Apartment Buildings",
        description: "Structural contracting and full-scale construction for multi-story residential apartments.",
        icon: Building2,
        image: "/images/apartment-construction.jpg",
        benefits: [
            "High-Rise Structural Expertise",
            "Efficient Space Utilization",
            "Code Compliance & Safety",
            "Scalable Workforce"
        ],
        idealFor: "Real estate developers and landowner joint ventures."
    },
    {
        id: 4,
        title: "Commercial Complexes",
        description: "Construction of shopping complexes, office spaces, and commercial establishments.",
        icon: Warehouse,
        image: "/images/commercial-building.jpg",
        benefits: [
            "Modern Facade Design",
            "Optimized Retail Spaces",
            "Parking & Utility Planning",
            "Durable Commercial Grade Build"
        ],
        idealFor: "Business owners and commercial investors."
    },
    {
        id: 5,
        title: "Road Development",
        description: "Government grade road construction including CC roads, BT roads, and drainage systems.",
        icon: Ruler, // Ruler as proxy for measurement/road layout
        image: "/images/road-construction.jpg",
        benefits: [
            "Heavy Machinery Fleet",
            "Material Quality Assurance",
            "Government Norms Compliance",
            "Timely Execution"
        ],
        idealFor: "Government contracts and private township developers."
    },
    {
        id: 6,
        title: "Renovation & Remodeling",
        description: "Transforming existing structures with modern designs, structural strengthening, and facelifts.",
        icon: Hammer,
        image: "/images/renovation-work.jpg",
        benefits: [
            "Structural Strengthening",
            "Modern Facade Updates",
            "Interior Space Re-planning",
            "Waterproofing & Repairs"
        ],
        idealFor: "Old building owners wanting a modern upgrade."
    }
];
