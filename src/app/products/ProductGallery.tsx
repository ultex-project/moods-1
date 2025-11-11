// app/(components)/products/ProductGallery.tsx
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
    images: string[];
    title: string;
}

export default function ProductGallery({ images, title }: ProductGalleryProps) {
    const safeImages = images.length > 0 ? images : ['/products/product-1.png'];
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        setSelectedIndex(0);
    }, [images]);

    const selectedImage = safeImages[selectedIndex] ?? safeImages[0];

    return (
        <div className="w-full">
            <div className="relative aspect-square rounded-2xl bg-gray-50 border border-gray-200 overflow-hidden flex items-center justify-center">
                <Image
                    src={selectedImage}
                    alt={`${title} image ${selectedIndex + 1}`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 90vw"
                    className="object-contain p-6"
                    priority
                />
            </div>

            <div className="mt-4 flex flex-wrap gap-4">
                {safeImages.map((image, index) => {
                    const isActive = index === selectedIndex;
                    return (
                        <button
                            type="button"
                            key={`${image}-${index}`}
                            onClick={() => setSelectedIndex(index)}
                            className={[
                                'relative w-20 h-20 rounded-xl overflow-hidden border transition-all bg-white flex-shrink-0',
                                isActive
                                    ? 'border-[#2E4A35] ring-2 ring-[#2E4A35]/20'
                                    : 'border-gray-300 hover:border-[#2E4A35]',
                            ].join(' ')}
                            aria-label={`Select image ${index + 1}`}
                        >
                            <Image
                                src={image}
                                alt={`${title} thumbnail ${index + 1}`}
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
