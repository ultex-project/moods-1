'use client';

import Header from '../(components)/sections/Header';
import Footer from '../(components)/sections/Footer';
import FilterBar from "@/app/categories/FilterBar";
import Pagination from "@/app/categories/Pagination";
import CategoryCard from "@/app/(components)/cards/CategoryCard";
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

export default function CategoriesPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow py-12 px-6 md:px-12 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    {/* Filter + Sorting Bar */}
                    <FilterBar />

                    {/* Grid of Categories */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {categories.map((cat) => (
                            <CategoryCard
                                key={cat.id}
                                title={cat.title}
                                image={cat.image}
                                slug={cat.slug}
                                standColor={cat.standColor}
                            />
                        ))}
                    </div>

                    {/* Pagination */}
                    <Pagination currentPage={1} totalPages={4} />
                </div>
            </main>

            <Footer />
        </div>
    );
}
