'use client';



import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
    const startItem = (currentPage - 1) * 12 + 1;
    const endItem = Math.min(currentPage * 12, 56); // Adjust 56 → total items count if dynamic
    const totalItems = 56;

    return (
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left: Text info */}
            <p className="text-sm text-gray-500">
                Showing {startItem} to {endItem} of {totalItems} ({totalPages} pages)
            </p>

            {/* Right: Pagination buttons */}
            <div className="flex items-center gap-2">
                {/* Prev Button */}
                <button
                    disabled={currentPage === 1}
                    className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 disabled:opacity-40 transition"
                >
                    <FaChevronLeft className="w-4 h-4" />
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        className={`w-8 h-8 flex items-center justify-center border rounded-md font-medium text-sm transition-all ${
                            i + 1 === currentPage
                                ? 'bg-[#2E4A35] text-white border-[#2E4A35]'
                                : 'text-gray-700 border-gray-300 hover:bg-gray-100'
                        }`}
                    >
                        {i + 1}
                    </button>
                ))}

                {/* Next Button */}
                <button
                    disabled={currentPage === totalPages}
                    className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 disabled:opacity-40 transition"
                >
                    <FaChevronRight className="w-4 h-4" />
                </button>

                {/* Double Next Button */}
                <button
                    disabled={currentPage === totalPages}
                    className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 disabled:opacity-40 transition"
                >
                    <FaChevronRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
