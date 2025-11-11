'use client';

import Image from 'next/image';
import Link from 'next/link';

interface CategoryCardProps {
    name: string;
    image: string;
}

export default function CategoryCard({ name, image }: CategoryCardProps) {
    return (
        <Link
            href={`/shop/${name.toLowerCase()}`}
            className="block rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-[#f8f8f8]"
        >
            <div className="relative w-full aspect-square">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-contain p-8"
                />
            </div>
            <div className="py-4 text-center">
                <h3 className="text-2xl font-bold text-[#2E4A35]">{name}</h3>
            </div>
        </Link>
    );
}
