'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaShoppingCart } from 'react-icons/fa';

export default function Header() {
    return (
        <header className="border-b border-gray-200">
            <div className="w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-20 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2" aria-label="Go to homepage">
                    <Image
                        src="/logo.svg"
                        alt="Moods logo"
                        width={140}
                        height={32}
                        priority
                        className="h-8 w-auto"
                    />
                </Link>

                <nav className="hidden md:flex space-x-8 text-sm md:text-base">
                    <Link href="/" className="font-medium hover:text-moods-green">Home</Link>
                    <Link href="/categories" className="font-medium hover:text-moods-green">Categories</Link>
                    <Link href="/products" className="font-medium hover:text-moods-green">Products</Link>
                    <Link href="/about" className="font-medium hover:text-moods-green">About Us</Link>
                    <Link href="/contact" className="font-medium hover:text-moods-green">Contact Us</Link>
                </nav>

                <div className="flex items-center space-x-4">
                    <FaShoppingCart className="text-xl cursor-pointer text-moods-green" aria-label="Open cart" />
                </div>
            </div>
        </header>
    );
}
