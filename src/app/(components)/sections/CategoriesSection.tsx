'use client';

import { useState } from 'react';
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
        <section className="py-16 px-4 md:px-8 lg:px-16">
            <div className="container mx-auto">
                {/* Section Header */}
                <div className="mb-12">
                    <h2 className="text-3xl font-amd font-bold text-moods-green flex items-center">
                        <span className="mr-2"><img src={"category-icon/category-icon-1.png"}/></span> Our Categories
                    </h2>
                    <p className="text-gray-600 mt-4">
                        Traditional Moroccan food store products include staples like argan oil, saffron, and other spices
                    </p>
                </div>

                {/* Category Carousel */}
                <div className="relative">
                    {/* Category Cards */}
                    <div className="flex space-x-6  pb-6">
                        {visibleCategories.map((category, index) => (
                            <div key={category.id} className="flex-shrink-0 w-full md:w-1/3">
                                <CategoryCard {...category} />
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="mt-8 flex justify-center space-x-4">
                        <button
                            onClick={prev}
                            disabled={currentIndex === 0}
                            className={`bg-moods-green text-white p-3 rounded-md hover:bg-opacity-90 transition ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={next}
                            disabled={currentIndex + itemsPerPage >= categories.length}
                            className={`bg-moods-green text-white p-3 rounded-md hover:bg-opacity-90 transition ${currentIndex + itemsPerPage >= categories.length ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}