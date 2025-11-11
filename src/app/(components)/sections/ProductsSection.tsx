'use client';

import { useState } from 'react';
import Image from 'next/image';
import ProductCard from '../cards/ProductCard';

// Sample product data
const products = [
    {
        id: 1,
        title: "Olive Oil",
        description: "Traditional Moroccan food store products include staples",
        image: "/products/product-1.png",
        slug: "olive-oil-1",
        isWide: true // ← Tall product
    },
    {
        id: 2,
        title: "Olive Oil",
        description: "Traditional Moroccan food store products include staples",
        image: "/products/product-2.png",
        slug: "olive-oil-2",
        isWide: true // ← Wide product (with bread)
    },
    {
        id: 3,
        title: "Olive Oil",
        description: "Traditional Moroccan food store products include staples",
        image: "/products/product-3.png",
        slug: "olive-oil-3",
        isWide: false // ← Tall product
    },
    {
        id: 4,
        title: "Olive Oil",
        description: "Traditional Moroccan food store products include staples",
        image: "/products/product-4.png",
        slug: "olive-oil-4",
        isWide: false // ← Tall product
    },
    {
        id: 5,
        title: "Olive Oil",
        description: "Traditional Moroccan food store products include staples",
        image: "/products/product-1.png",
        slug: "olive-oil-5",
        isWide: true // ← Tall product
    },
    {
        id: 6,
        title: "Olive Oil",
        description: "Traditional Moroccan food store products include staples",
        image: "/products/product-2.png",
        slug: "olive-oil-6",
        isWide: true // ← Wide product (with bread)
    },
    {
        id: 7,
        title: "Olive Oil",
        description: "Traditional Moroccan food store products include staples",
        image: "/products/product-3.png",
        slug: "olive-oil-7",
        isWide: false // ← Tall product
    },
    {
        id: 8,
        title: "Olive Oil",
        description: "Traditional Moroccan food store products include staples",
        image: "/products/product-4.png",
        slug: "olive-oil-8",
        isWide: false // ← Tall product
    }
];

export default function ProductsSection() {
    const [showAll, setShowAll] = useState(false);
    const visibleProducts = showAll ? products : products.slice(0, 8);

    return (
        <section className="py-16">
            <div className="w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-20 space-y-10">
                <div className="text-center md:text-left space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-moods-green font-amd flex items-center justify-center md:justify-start">
                        <span className="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm shrink-0">
                            <Image src="/category-icon/category-icon.png" alt="Products icon" width={32} height={32} />
                        </span>
                        Our Products
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        Traditional Moroccan food store products include staples like argan oil, saffron, and other spices
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleProducts.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>

                {!showAll && (
                    <div className="text-center">
                        <button
                            type="button"
                            onClick={() => setShowAll(true)}
                            className="bg-[#2E4A35] text-white px-6 py-3 rounded-lg md:rounded-xl font-medium text-sm md:text-base tracking-wide hover:opacity-90 transition-all duration-300 inline-block"
                        >
                            Show more
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
