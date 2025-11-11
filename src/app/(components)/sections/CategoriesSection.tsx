'use client';

import { useState } from 'react';
import Image from 'next/image';
import CategoryCard from "@/app/(components)/cards/CategoryCard";


// Sample categories data (you can add more)
const categories = [
    {
        id: 1,
        title: "Spices",
        image: "/categories/category-spices.png",
        slug: "spices",
        standColor:"#8C6D65"
    },
    {
        id: 2,
        title: "Olives",
        image: "/categories/category-olives-1.png",
        slug: "olives",
        standColor:"#90957F"
    },
    {
        id: 3,
        title: "Dates",
        image: "/categories/category-dates.png",
        slug: "dates",
        standColor:"#B18E83"
    },
    {
        id: 4,
        title: "Olives",
        image: "/categories/category-spices.png",
        slug: "olives",
        standColor:"#8C6D65"
    },
    {
        id: 5,
        title: "Olives",
        image: "/categories/category-olives-1.png",
        slug: "olives",
        standColor:"#90957F"
    },
    {
        id: 6,
        title: "Spices",
        image: "/categories/category-olives-1.png",
        slug: "spices",
        standColor:"#90957F"
    },
    {
        id: 7,
        title: "Olives",
        image: "/categories/category-spices.png",
        slug: "olives",
        standColor:"#8C6D65"
    },
    {
        id: 8,
        title: "Spices",
        image: "/categories/category-olives-1.png",
        slug: "spices",
        standColor:"#90957F"
    }
];

export default function CategoriesSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3; // Show 3 categories at a time

    const next = () => {
        if (currentIndex + itemsPerPage < categories.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const visibleCategories = categories.slice(currentIndex, currentIndex + itemsPerPage);

    return (
        <section className="py-16">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-20 space-y-10">
                <div className="text-center md:text-left space-y-4">
                    <h2 className="text-3xl md:text-4xl font-amd font-bold text-moods-green flex items-center justify-center md:justify-start">
                        <span className="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm shrink-0">
                            <Image src="/category-icon/category-icon-1.png" alt="Categories icon" width={32} height={32} />
                        </span>
                        Our Categories
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        Traditional Moroccan food store products include staples like argan oil, saffron, and other spices
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleCategories.map((category) => (
                        <div key={category.id} className="w-full">
                            <CategoryCard {...category} />
                        </div>
                    ))}
                </div>

                <div className="flex justify-center gap-4">
                    <button
                        type="button"
                        onClick={prev}
                        disabled={currentIndex === 0}
                        className={`bg-moods-green text-white p-3 rounded-lg md:rounded-xl shadow-sm hover:bg-opacity-90 transition ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        type="button"
                        onClick={next}
                        disabled={currentIndex + itemsPerPage >= categories.length}
                        className={`bg-moods-green text-white p-3 rounded-lg md:rounded-xl shadow-sm hover:bg-opacity-90 transition ${currentIndex + itemsPerPage >= categories.length ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
