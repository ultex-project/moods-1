'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
    title: string;
    description: string;
    image: string;
    slug: string;
    isWide?: boolean; // ← New prop to mark wide products
}

export default function ProductCard({
                                        title,
                                        description,
                                        image,
                                        slug,
                                        isWide = false
                                    }: ProductCardProps) {
    return (
        <Link
            href={`/products/${slug}`}
            className="group block overflow-hidden  "
        >
            <div className="relative h-64 bg-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow" style={{
                borderRadius: '30px',
            }}>
                {/* Pattern Background */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: 'url("/pattern-bg-cropped.svg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        transform: 'rotate(180deg)',
                        borderRadius: '30px'
                    }}
                ></div>

                {/* Gray Stand (Behind Product) */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-1/6 bg-[#D2D0D0] z-0 rounded-t-3xl"
                    style={{
                        borderRadius: '30px',
                    }}
                ></div>

                {/* Product Image Container */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="absolute inset-0 flex items-end justify-center z-10 p-2 md:p-4"
                >
                    <Image
                        src={image}
                        alt={title}
                        width={200}
                        height={200}
                        className={`max-w-full max-h-[70%] object-contain ${
                            isWide ? 'max-h-[70%]' : 'max-h-[90%]'
                        }`}
                    />
                </motion.div>
            </div>

            {/* Product Info */}
            <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-moods-green mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
        </Link>
    );
}