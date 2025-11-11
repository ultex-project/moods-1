'use client';

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    itemsPerPage: number;
    totalItems: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({
                                       currentPage,
                                       totalPages,
                                       itemsPerPage,
                                       totalItems,
                                       onPageChange,
                                   }: PaginationProps) {
    const startItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    const handleChange = (page: number) => {
        if (page < 1 || page > totalPages || page === currentPage) return;
        onPageChange(page);
    };

    return (
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left: Text info */}
            <p className="text-sm md:text-base text-gray-500">
                {totalItems > 0
                    ? `Showing ${startItem} to ${endItem} of ${totalItems} (${totalPages} pages)`
                    : 'No products match this filter'}
            </p>

            {/* Right: Pagination buttons */}
            <div className="flex items-center gap-2">
                <button
                    type="button"
                    onClick={() => handleChange(currentPage - 1)}
                    disabled={currentPage === 1 || totalItems === 0}
                    className="flex items-center justify-center w-9 h-9 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
                    aria-label="Previous page"
                >
                    <FaChevronLeft className="w-4 h-4" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => {
                    const pageNumber = i + 1;
                    const isActive = pageNumber === currentPage;
                    return (
                        <button
                            type="button"
                            key={pageNumber}
                            onClick={() => handleChange(pageNumber)}
                            className={[
                                'w-9 h-9 flex items-center justify-center border rounded-md font-medium text-sm md:text-base transition-all',
                                isActive
                                    ? 'bg-[#2E4A35] text-white border-[#2E4A35]'
                                    : 'text-gray-700 border-gray-300 hover:bg-gray-100',
                            ].join(' ')}
                            aria-current={isActive ? 'page' : undefined}
                        >
                            {pageNumber}
                        </button>
                    );
                })}

                <button
                    type="button"
                    onClick={() => handleChange(currentPage + 1)}
                    disabled={currentPage === totalPages || totalItems === 0}
                    className="flex items-center justify-center w-9 h-9 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
                    aria-label="Next page"
                >
                    <FaChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
