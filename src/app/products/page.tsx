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

type ProductCardProps = ComponentProps<typeof ProductCard>;
type ProductCategory = 'Oils' | 'Spices' | 'Preserves' | 'Sweets';

interface Product extends ProductCardProps {
    id: number;
    category: ProductCategory;
    price: number;
}

export default function ProductsPage() {
    const [itemsPerPage, setItemsPerPage] = useState(12);
    const [sortBy, setSortBy] = useState<SortOption>('default');
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const [currentPage, setCurrentPage] = useState(1);
    const didMountRef = useRef(false);

    const products = useMemo<Product[]>(() => ([
        {
            id: 1,
            title: "Heritage Extra Virgin Olive Oil",
            description: "Cold-pressed Arbequina olives for a bright, peppery finish.",
            image: "/products/product-1.png",
            slug: "heritage-extra-virgin-olive-oil",
            isWide: true,
            category: "Oils",
            price: 24,
        },
        {
            id: 2,
            title: "Citrus Infused Olive Oil",
            description: "Sun-dried lemon peels macerated with Moroccan olives.",
            image: "/products/product-2.png",
            slug: "citrus-infused-olive-oil",
            isWide: true,
            category: "Oils",
            price: 28,
        },
        {
            id: 3,
            title: "Smoked Paprika Rub",
            description: "Earthy paprika smoked over olive wood, ideal for grills.",
            image: "/products/product-3.png",
            slug: "smoked-paprika-rub",
            isWide: false,
            category: "Spices",
            price: 14,
        },
        {
            id: 4,
            title: "Ras El Hanout Signature Blend",
            description: "Thirty aromatic spices for tagines and stews.",
            image: "/products/product-4.png",
            slug: "ras-el-hanout-signature-blend",
            isWide: false,
            category: "Spices",
            price: 18,
        },
        {
            id: 5,
            title: "Cedar Barrel Preserved Lemons",
            description: "Briny citrus with floral notes from cedar aging.",
            image: "/products/product-1.png",
            slug: "cedar-barrel-preserved-lemons",
            isWide: true,
            category: "Preserves",
            price: 16,
        },
        {
            id: 6,
            title: "Honey Glazed Almonds",
            description: "Roasted almonds lacquered with wildflower honey.",
            image: "/products/product-2.png",
            slug: "honey-glazed-almonds",
            isWide: true,
            category: "Sweets",
            price: 22,
        },
        {
            id: 7,
            title: "Fig & Orange Confit",
            description: "Slow-cooked figs folded with Seville orange zest.",
            image: "/products/product-3.png",
            slug: "fig-and-orange-confit",
            isWide: false,
            category: "Preserves",
            price: 19,
        },
        {
            id: 8,
            title: "Atlas Mountain Honey",
            description: "Raw, unfiltered honey with thyme and cedar notes.",
            image: "/products/product-4.png",
            slug: "atlas-mountain-honey",
            isWide: false,
            category: "Sweets",
            price: 26,
        },
        {
            id: 9,
            title: "Stone-Milled Tahini",
            description: "Single-origin sesame paste with velvety texture.",
            image: "/products/product-1.png",
            slug: "stone-milled-tahini",
            isWide: true,
            category: "Preserves",
            price: 17,
        },
        {
            id: 10,
            title: "Chili Harissa Paste",
            description: "Fermented chili blend with garlic and cumin heat.",
            image: "/products/product-2.png",
            slug: "chili-harissa-paste",
            isWide: true,
            category: "Spices",
            price: 15,
        },
        {
            id: 11,
            title: "Truffle Olive Oil Drizzle",
            description: "Luxurious argan-truffle infusion for finishing dishes.",
            image: "/products/product-3.png",
            slug: "truffle-olive-oil-drizzle",
            isWide: false,
            category: "Oils",
            price: 34,
        },
        {
            id: 12,
            title: "Candied Orange Peels",
            description: "Tender peel ribbons dusted in vanilla sugar.",
            image: "/products/product-4.png",
            slug: "candied-orange-peels",
            isWide: false,
            category: "Sweets",
            price: 12,
        },
        {
            id: 13,
            title: "Smoked Sea Salt Flakes",
            description: "Atlantic salt cold-smoked for cocktails and roasts.",
            image: "/products/product-1.png",
            slug: "smoked-sea-salt-flakes",
            isWide: true,
            category: "Spices",
            price: 11,
        },
        {
            id: 14,
            title: "Cedarwood Date Spread",
            description: "Medjool dates whipped with cedar-aged syrup.",
            image: "/products/product-2.png",
            slug: "cedarwood-date-spread",
            isWide: true,
            category: "Sweets",
            price: 20,
        },
        {
            id: 15,
            title: "Heritage Olive Tapenade",
            description: "Picholine olives mashed with capers and herbs.",
            image: "/products/product-3.png",
            slug: "heritage-olive-tapenade",
            isWide: false,
            category: "Preserves",
            price: 21,
        },
        {
            id: 16,
            title: "Spiced Date Syrup",
            description: "Slow-reduced date nectar with cardamom and clove.",
            image: "/products/product-4.png",
            slug: "spiced-date-syrup",
            isWide: false,
            category: "Sweets",
            price: 18,
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
            paginatedProducts.map(
                ({ title, description, image, slug, isWide, hideText, mode }) => ({
                    title,
                    description,
                    image,
                    slug,
                    isWide,
                    hideText,
                    mode,
                })
            ),
        [paginatedProducts]
    );

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow">
                <ProductHero />

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mt-8">
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
                        <div className="border border-dashed border-gray-300 rounded-xl py-16 text-center text-gray-500">
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
