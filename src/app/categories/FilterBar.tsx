'use client';

import { useState } from 'react';

export default function FilterBar() {
    const [itemsPerPage, setItemsPerPage] = useState(12);
    const [sortBy, setSortBy] = useState('default');

    return (
        <div className="border border-gray-200 rounded-lg shadow-sm px-6 py-4 mb-10 flex flex-col md:flex-row md:items-center md:justify-between bg-white">
            {/* Left Side — Title */}
            <h1 className="text-xl md:text-2xl font-semibold text-[#2E4A35] font-amd">
                Full Shop
            </h1>

            {/* Right Side — Filters */}
            <div className="flex items-center gap-6 mt-4 md:mt-0">
                {/* Show Select */}
                <div className="flex items-center gap-2">
                    <span className="text-gray-700 font-medium">Show:</span>
                    <select
                        value={itemsPerPage}
                        onChange={(e) => setItemsPerPage(Number(e.target.value))}
                        className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-[#2E4A35]"
                        aria-label="Items per page"
                    >
                        <option value={6}>6</option>
                        <option value={12}>12</option>
                        <option value={24}>24</option>
                    </select>
                </div>

                {/* Sort By Select */}
                <div className="flex items-center gap-2">
                    <span className="text-gray-700 font-medium">Sort By:</span>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="border border-gray-300 rounded-md px-3 py-2 text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-[#2E4A35]"
                        aria-label="Sort products"
                    >
                        <option value="default">Default</option>
                        <option value="name">Name</option>
                        <option value="newest">Newest</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
