import React from 'react';

const PoweredBy = () => {
    return (
        <div className="bg-dark py-3 border-t border-white/5">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-1.5">
                <div className="flex items-center gap-2 text-gray-500 text-xs">
                    <span>Developed by</span>
                    <img
                        src="/images/crawlop-badge.png"
                        alt="Crawlup"
                        className="h-5 w-auto opacity-60 hover:opacity-100 transition-opacity"
                    />
                </div>
                <a
                    href="https://crawlup.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] text-gray-600 hover:text-secondary transition-colors tracking-wide"
                >
                    crawlup.in
                </a>
            </div>
        </div>
    );
};

export default PoweredBy;
