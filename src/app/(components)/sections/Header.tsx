'use client';

import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

export default function Header() {
    return (
        <header className="border-b border-gray-200">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <img src="/logo.svg" alt="Moods Logo" className="h-8" />

                </Link>

                <nav className="hidden md:flex space-x-8">
                    <Link href="/" className="font-medium hover:text-moods-green">Home</Link>
                    <Link href="/categories" className="font-medium hover:text-moods-green">Categories</Link>
                    <Link href="/products" className="font-medium hover:text-moods-green">Products</Link>
                </nav>

                <div className="flex items-center space-x-4">
                    <FaShoppingCart className="text-xl cursor-pointer text-moods-green" />
                </div>
            </div>
        </header>
    );
}