'use client';

import { useEffect, useMemo, useRef, useState } from "react";
import Header from '../(components)/sections/Header';
import Footer from '../(components)/sections/Footer';
import FilterBar, { SortOption } from "@/app/categories/FilterBar";
import Pagination from "@/app/categories/Pagination";
import CategoryCard from "@/app/(components)/cards/CategoryCard";

type ProductCategory = 'Spices' | 'Dates' | 'Olives';

interface Product {
    id: number;
    title: string;
    image: string;
    slug: string;
    standColor: string;
    category: ProductCategory;
    price: number;
}

export default function CategoriesPage() {
    const [itemsPerPage, setItemsPerPage] = useState(12);
    const [sortBy, setSortBy] = useState<SortOption>('default');
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const [currentPage, setCurrentPage] = useState(1);
    const didMountRef = useRef(false);

    const products = useMemo<Product[]>(() => ([
        {
            id: 1,
            title: "Harissa Spice Blend",
            image: "/categories/category-spices.png",
            slug: "harissa-spice-blend",
            standColor: "#8C6D65",
            category: "Spices",
            price: 12.5,
        },
        {
            id: 2,
            title: "Green Castelvetrano Olives",
            image: "/categories/category-olives-1.png",
            slug: "green-castelvetrano-olives",
            standColor: "#90957F",
            category: "Olives",
            price: 15,
        },
        {
            id: 3,
            title: "Medjool Dates Deluxe",
            image: "/categories/category-dates.png",
            slug: "medjool-dates-deluxe",
            standColor: "#B18E83",
            category: "Dates",
            price: 18.75,
        },
        {
            id: 4,
            title: "Smoked Paprika Powder",
            image: "/categories/category-spices.png",
            slug: "smoked-paprika-powder",
            standColor: "#8C6D65",
            category: "Spices",
            price: 10,
        },
        {
            id: 5,
            title: "Brined Kalamata Olives",
            image: "/categories/category-olives-1.png",
            slug: "brined-kalamata-olives",
            standColor: "#90957F",
            category: "Olives",
            price: 14.25,
        },
        {
            id: 6,
            title: "Golden Date Selection",
            image: "/categories/category-dates.png",
            slug: "golden-date-selection",
            standColor: "#B18E83",
            category: "Dates",
            price: 22,
        },
        {
            id: 7,
            title: "Ras El Hanout",
            image: "/categories/category-spices.png",
            slug: "ras-el-hanout",
            standColor: "#8C6D65",
            category: "Spices",
            price: 16,
        },
        {
            id: 8,
            title: "Garlic Stuffed Olives",
            image: "/categories/category-olives-1.png",
            slug: "garlic-stuffed-olives",
            standColor: "#90957F",
            category: "Olives",
            price: 17.5,
        },
        {
            id: 9,
            title: "Chocolate Glazed Dates",
            image: "/categories/category-dates.png",
            slug: "chocolate-glazed-dates",
            standColor: "#B18E83",
            category: "Dates",
            price: 24,
        },
        {
            id: 10,
            title: "Cumin Seeds Premium",
            image: "/categories/category-spices.png",
            slug: "cumin-seeds-premium",
            standColor: "#8C6D65",
            category: "Spices",
            price: 9,
        },
        {
            id: 11,
            title: "Citrus Marinated Olives",
            image: "/categories/category-olives-1.png",
            slug: "citrus-marinated-olives",
            standColor: "#90957F",
            category: "Olives",
            price: 19,
        },
        {
            id: 12,
            title: "Royal Date Medley",
            image: "/categories/category-dates.png",
            slug: "royal-date-medley",
            standColor: "#B18E83",
            category: "Dates",
            price: 20.5,
        },
        {
            id: 13,
            title: "Za'atar Spice Mix",
            image: "/categories/category-spices.png",
            slug: "zaatar-spice-mix",
            standColor: "#8C6D65",
            category: "Spices",
            price: 13.25,
        },
        {
            id: 14,
            title: "Herb Infused Olives",
            image: "/categories/category-olives-1.png",
            slug: "herb-infused-olives",
            standColor: "#90957F",
            category: "Olives",
            price: 21,
        },
        {
            id: 15,
            title: "Honey Caramel Dates",
            image: "/categories/category-dates.png",
            slug: "honey-caramel-dates",
            standColor: "#B18E83",
            category: "Dates",
            price: 23.5,
        },
        {
            id: 16,
            title: "Saffron Threads",
            image: "/categories/category-spices.png",
            slug: "saffron-threads",
            standColor: "#8C6D65",
            category: "Spices",
            price: 32,
        },
        {
            id: 17,
            title: "Spicy Chili Olives",
            image: "/categories/category-olives-1.png",
            slug: "spicy-chili-olives",
            standColor: "#90957F",
            category: "Olives",
            price: 18.25,
        },
        {
            id: 18,
            title: "Cardamom Date Gems",
            image: "/categories/category-dates.png",
            slug: "cardamom-date-gems",
            standColor: "#B18E83",
            category: "Dates",
            price: 26,
        },
    ]), []);

    const categories = useMemo(() => {
        const uniqueCategories = Array.from(new Set(products.map((product) => product.category)));
        return ['All', ...uniqueCategories];
    }, [products]);

    const filteredProducts = useMemo(() => {
        if (activeCategory === 'All') {
            return products;
        }

        return products.filter((product) => product.category === activeCategory);
    }, [products, activeCategory]);

    const sortedProducts = useMemo(() => {
        const list = [...filteredProducts];

        switch (sortBy) {
            case 'name-asc':
                return list.sort((a, b) => a.title.localeCompare(b.title));
            case 'price-asc':
                return list.sort((a, b) => a.price - b.price);
            case 'price-desc':
                return list.sort((a, b) => b.price - a.price);
            default:
                return list;
        }
    }, [filteredProducts, sortBy]);

    const totalItems = sortedProducts.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
    const paginatedProducts = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return sortedProducts.slice(start, start + itemsPerPage);
    }, [sortedProducts, currentPage, itemsPerPage]);

    useEffect(() => {
        setCurrentPage((prev) => (prev > totalPages ? totalPages : prev));
    }, [totalPages]);

    useEffect(() => {
        if (!didMountRef.current) {
            didMountRef.current = true;
            return;
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);

    const handleItemsPerPageChange = (value: number) => {
        setItemsPerPage(value);
        setCurrentPage(1);
    };

    const handleSortChange = (value: SortOption) => {
        setSortBy(value);
        setCurrentPage(1);
    };

    const handleCategoryChange = (value: string) => {
        setActiveCategory(value);
        setCurrentPage(1);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow py-12">
                <div className="w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-20 space-y-10">
                    <FilterBar
                        itemsPerPage={itemsPerPage}
                        sortBy={sortBy}
                        categories={categories}
                        activeCategory={activeCategory}
                        onItemsPerPageChange={handleItemsPerPageChange}
                        onSortChange={handleSortChange}
                        onCategoryChange={handleCategoryChange}
                    />

                    {paginatedProducts.length === 0 ? (
                        <div className="border border-dashed border-gray-300 rounded-xl py-16 text-center text-gray-500 text-base md:text-lg">
                            No products match this combination. Try a different filter.
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {paginatedProducts.map((product) => (
                                <CategoryCard
                                    key={product.id}
                                    title={product.title}
                                    image={product.image}
                                    slug={product.slug}
                                    standColor={product.standColor}
                                />
                            ))}
                        </div>
                    )}

                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        itemsPerPage={itemsPerPage}
                        totalItems={totalItems}
                        onPageChange={handlePageChange}
                    />
                </div>
            </main>

            <Footer />
        </div>
    );
}
