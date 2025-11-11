'use client';

import Header from '../(components)/sections/Header';
import Footer from '../(components)/sections/Footer';
import FilterBar from "@/app/categories/FilterBar";
import Pagination from "@/app/categories/Pagination";
import ProductHero from "@/app/products/ProductHero";
import ProductGrid from "@/app/products/ProductGrid";


export default function ProductsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow">
                {/* Hero Banner */}
                <ProductHero />

                {/* Filter bar */}
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mt-8">
                    <FilterBar />

                    {/* Product grid */}
                    <ProductGrid />

                    {/* Pagination */}
                    <Pagination currentPage={1} totalPages={4} />
                </div>
            </main>

            <Footer />
        </div>
    );
}
