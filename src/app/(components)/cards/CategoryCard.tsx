'use client';

import Image from 'next/image';
import Link from 'next/link';

interface CategoryCardProps {
    title: string;
    image: string;
    slug: string;
    standColor: string; // ← Color passed as prop
}

export default function CategoryCard({
                                         title,
                                         image,
                                         slug,
                                         standColor
                                     }: CategoryCardProps) {
    return (
        <Link
            href={`/categories/${slug}`}
            className="block overflow-hidden rounded-xl transition-transform duration-300 hover:scale-105"
        >
            <div className="relative h-64 bg-gray-100">
                {/* Pattern Background */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: 'url("/pattern-bg-cropped.svg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        transform: 'rotate(180deg)',
                    }}
                ></div>

                {/* Custom Stand Color */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-1/6 z-0 rounded-t-3xl"
                    style={{
                        backgroundColor: standColor, // ← Dynamic color
                        borderRadius: '30px 30px 0 0',
                    }}
                ></div>

                {/* Product Image */}
                <div className="absolute inset-0 flex items-end justify-center z-10 p-2 md:p-4">
                    <Image
                        src={image}
                        alt={title}
                        width={290}
                        height={290}
                        className="max-w-full max-h-[100%] object-contain"
                    />
                </div>

                {/* Category Title */}
                <div className="absolute top-4 left-4 right-4 text-center">
                    <h3 className="text-3xl md:text-4xl font-amd font-bold text-moods-green leading-tight">{title}</h3>
                </div>
            </div>
        </Link>
    );
}
