// app/(components)/products/ProductCard.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type CardMode = 'default' | 'galleryMain';

interface ProductCardProps {
    title: string;
    description: string;
    image: string;
    slug: string;
    isWide?: boolean;
    hideText?: boolean;
    mode?: CardMode; // ← NEW
}

export default function ProductCard({
                                        title,
                                        description,
                                        image,
                                        slug,
                                        isWide = false,
                                        hideText = false,
                                        mode = 'default',
                                    }: ProductCardProps) {
    // galleryMain = taller, more padding, subtle pattern, centered stand
    const isGallery = mode === 'galleryMain';

    return (
        <Link href={`/products/${slug}`} className="group block overflow-hidden">
            <div
                className={[
                    'relative rounded-xl shadow-sm hover:shadow-md transition-shadow bg-gray-100',
                    isGallery ? 'h-[460px] md:h-[520px]' : 'h-64',
                ].join(' ')}
                style={{ borderRadius: '20px' }}
            >
                {/* Pattern */}
                <div
                    className="absolute inset-0 z-0 opacity-[0.12]"
                    style={{
                        backgroundImage: 'url("/pattern-bg-cropped.svg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        transform: 'rotate(180deg)',
                        borderRadius: '20px',
                    }}
                />

                {/* Stand (smaller, centered for gallery) */}
                <div
                    className={[
                        'absolute bottom-4 left-1/2 -translate-x-1/2 z-0 bg-gray-300/70',
                        isGallery
                            ? 'h-14 w-[78%] rounded-[18px]'
                            : 'h-[16%] w-full left-0 translate-x-0 rounded-t-3xl bottom-0',
                    ].join(' ')}
                />

                {/* Product Image */}
                <motion.div
                    initial={{ scale: 0.94, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.45 }}
                    className={[
                        'absolute inset-0 z-10 flex items-end justify-center',
                        isGallery ? 'p-8 md:p-10' : 'p-2 md:p-4',
                    ].join(' ')}
                >
                    <Image
                        src={image}
                        alt={title}
                        width={isGallery ? 420 : 200}
                        height={isGallery ? 420 : 200}
                        className={[
                            'object-contain',
                            isGallery ? 'max-h-[80%]' : isWide ? 'max-h-[70%]' : 'max-h-[90%]',
                        ].join(' ')}
                        priority={isGallery}
                    />
                </motion.div>
            </div>

            {!hideText && (
                <div className="p-4 text-center">
                    <h3 className="text-lg font-bold text-moods-green mb-2">{title}</h3>
                    <p className="text-sm text-gray-600">{description}</p>
                </div>
            )}
        </Link>
    );
}
