import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const StatsCounter = ({ end, duration = 2, suffix = '', label }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const endValue = parseInt(end.toString().replace(/\D/g, ''));
            const increment = endValue / (duration * 60);

            const timer = setInterval(() => {
                start += increment;
                if (start >= endValue) {
                    setCount(endValue);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 1000 / 60);

            return () => clearInterval(timer);
        }
    }, [isInView, end, duration]);

    return (
        <div ref={ref} className="text-center p-6">
            <div className="text-4xl md:text-5xl font-bold text-secondary mb-2 font-heading">
                {count}{suffix}
            </div>
            <div className="text-white text-sm uppercase tracking-wider font-semibold">
                {label}
            </div>
        </div>
    );
};

export default StatsCounter;
