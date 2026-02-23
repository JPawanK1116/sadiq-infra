import React from 'react';

const PoweredBy = () => {
    return (
        <div className="bg-dark py-2.5 border-t border-white/5">
            <div className="container mx-auto px-4 flex items-center justify-center gap-2">
                <img
                    src="/images/crawlop-badge.png"
                    alt="Crawlup"
                    className="h-4 w-auto opacity-50 hover:opacity-100 transition-opacity"
                />
                <a
                    href="https://crawlup.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] text-gray-600 hover:text-secondary transition-colors tracking-wide"
                >
                    Powered by <span className="font-bold text-secondary/70">Crawlup</span>
                </a>
            </div>
        </div>
    );
};

export default PoweredBy;
