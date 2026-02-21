import React from 'react';

const PoweredBy = () => {
    return (
        <div className="bg-gray-900 py-4 border-t border-gray-800">
            <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-2">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <span>Powered By</span>
                    <img
                        src="/images/crawlop-badge.png"
                        alt="Crawlop"
                        className="h-6 w-auto opacity-80 hover:opacity-100 transition-opacity"
                    />
                </div>
                <a
                    href="https://crawlop.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-secondary hover:text-white transition-colors"
                >
                    Need a customer for your business? Visit Crawlop.in
                </a>
            </div>
        </div>
    );
};

export default PoweredBy;
