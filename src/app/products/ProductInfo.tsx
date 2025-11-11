'use client';

import Link from 'next/link';
import { ProductRecord } from "@/app/data/products";

interface ProductInfoProps {
    product: ProductRecord;
}

export default function ProductInfo({ product }: ProductInfoProps) {
    const reviewCount = product.reviews.length;

    return (
        <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-[#2E4A35] leading-tight">{product.title}</h1>

            <div className="flex items-center gap-2 text-sm">
                <div className="text-yellow-500">★★★★★</div>
                <span className="text-gray-500">({reviewCount} customer review{reviewCount === 1 ? '' : 's'})</span>
            </div>

            <div className="flex items-center gap-3">
                <span className="text-[#2E4A35] text-2xl font-semibold">
                    ${product.price.toFixed(2)}
                </span>
                {product.compareAtPrice && (
                    <span className="text-gray-400 line-through">
                        ${product.compareAtPrice.toFixed(2)}
                    </span>
                )}
            </div>

            <p className="text-gray-600 leading-relaxed">
                {product.description}
            </p>

            <p className="text-[#2E4A35] font-medium">In Stock</p>

            <div className="flex items-center gap-3 mt-4">
                <button className="bg-[#2E4A35] text-white px-5 py-2.5 rounded-md min-w-[120px] hover:opacity-90 transition">
                    Add to cart
                </button>
                <button className="border border-gray-300 rounded-md p-2.5 hover:bg-gray-50 transition" aria-label="Add to wishlist">
                    💚
                </button>
                <button className="border border-gray-300 rounded-md p-2.5 hover:bg-gray-50 transition" aria-label="Share product">
                    ↻
                </button>
            </div>

            <div className="pt-4 text-gray-500 text-sm">
                Category:{' '}
                <Link
                    href="/categories"
                    className="text-[#2E4A35] hover:opacity-80 transition"
                >
                    {product.category}
                </Link>
            </div>
        </div>
    );
}
