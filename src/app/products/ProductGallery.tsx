// app/(components)/products/ProductGallery.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import ProductCard from "@/app/(components)/cards/ProductCard";

const productVariants = [
    { title: 'Spice Mix',  description: '$21.00', image: '/products/product-1.svg', slug: 'spice-mix' },
    { title: 'Date Flour', description: '$21.00', image: '/products/product-1.svg',  slug: 'date-flour' },
    { title: 'Olive Jar',  description: '$21.00', image: '/products/product-1.svg',  slug: 'olive-jar'  },
];

export default function ProductGallery() {
    const [selected, setSelected] = useState(productVariants[0]);

    return (
        <div className="w-full">
            {/* Main card (taller) */}
            <div className="w-full max-w-md md:max-w-lg">
                <ProductCard
                    {...selected}
                    hideText
                    mode="galleryMain"  // ← key
                />
            </div>

            {/* Thumbnails */}
            <div className="mt-4 flex gap-4">
                {productVariants.map((v) => {
                    const active = v.slug === selected.slug;
                    return (
                        <button
                            key={v.slug}
                            onClick={() => setSelected(v)}
                            className={[
                                'relative w-20 h-20 rounded-lg overflow-hidden border transition-all bg-white',
                                active
                                    ? 'border-[#2E4A35] ring-2 ring-[#2E4A35]/20'
                                    : 'border-gray-300 hover:border-[#2E4A35]',
                            ].join(' ')}
                            aria-label={`Select variant ${v.title}`}
                        >
                            <Image
                                src={v.image}
                                alt={v.title}
                                fill
                                className="object-contain p-2"
                            />
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
