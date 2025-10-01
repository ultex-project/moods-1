'use client';

import { useState, ReactNode } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface CarouselProps {
    children: ReactNode[];
    itemsPerView?: number;
}

export default function Carousel({ children, itemsPerView = 3 }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalItems = children.length;

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % totalItems);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
    };

    return (
        <div className="relative">
            <div className="flex overflow-x-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
                >
                    {children.map((child, index) => (
                        <div key={index} className={`flex-shrink-0 w-full md:w-${100 / itemsPerView}% px-2`}>
                            {child}
                        </div>
                    ))}
                </div>
            </div>

            <button
                onClick={prev}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-moods-green text-white p-2 rounded-full hover:bg-opacity-90"
            >
                <FaChevronLeft />
            </button>
            <button
                onClick={next}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-moods-green text-white p-2 rounded-full hover:bg-opacity-90"
            >
                <FaChevronRight />
            </button>
        </div>
    );
}