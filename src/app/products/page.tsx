'use client';

import { useEffect, useMemo, useRef, useState } from "react";
import type { ComponentProps } from "react";
import Header from '../(components)/sections/Header';
import Footer from '../(components)/sections/Footer';
import FilterBar, { SortOption } from "@/app/categories/FilterBar";
import Pagination from "@/app/categories/Pagination";
import ProductHero from "@/app/products/ProductHero";
import ProductGrid from "@/app/products/ProductGrid";
import type ProductCard from "@/app/(components)/cards/ProductCard";
import { getProducts } from "@/app/data/products";
import type { ProductRecord } from "@/app/data/products";

type ProductCardProps = ComponentProps<typeof ProductCard>;

export default function ProductsPage() {
    const [itemsPerPage, setItemsPerPage] = useState(12);
    const [sortBy, setSortBy] = useState<SortOption>('default');
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const [currentPage, setCurrentPage] = useState(1);
    const didMountRef = useRef(false);

    const products = useMemo<ProductRecord[]>(() => getProducts(), []);

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
    const totalPages = totalItems === 0 ? 1 : Math.ceil(totalItems / itemsPerPage);
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

    const gridProducts: ProductCardProps[] = useMemo(
        () =>
            paginatedProducts.map(({ title, description, image, slug, isWide }) => ({
                title,
                description,
                image,
                slug,
                isWide,
            })),
        [paginatedProducts]
    );

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow">
                <ProductHero />

                <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-20 mt-8 space-y-10">
                    <FilterBar
                        itemsPerPage={itemsPerPage}
                        sortBy={sortBy}
                        categories={categories}
                        activeCategory={activeCategory}
                        onItemsPerPageChange={handleItemsPerPageChange}
                        onSortChange={handleSortChange}
                        onCategoryChange={handleCategoryChange}
                    />

                    {gridProducts.length === 0 ? (
                        <div className="border border-dashed border-gray-300 rounded-xl py-16 text-center text-gray-500 text-base md:text-lg">
                            No products match this combination. Try a different filter.
                        </div>
                    ) : (
                        <ProductGrid products={gridProducts} />
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
