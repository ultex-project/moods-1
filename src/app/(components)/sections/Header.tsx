'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/categories', label: 'Categories' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavClick = () => setMenuOpen(false);

    return (
        <header className="border-b border-gray-200">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between gap-4">
                <Link href="/" className="flex items-center space-x-2" aria-label="Go to homepage">
                    <Image
                        src="/logo.svg"
                        alt="Moods logo"
                        width={140}
                        height={32}
                        priority
                        className="h-8 sm:h-9 w-auto"
                    />
                </Link>

                <nav className="hidden md:flex space-x-6 lg:space-x-8 text-sm md:text-base">
                    {NAV_LINKS.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="font-medium transition hover:text-moods-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moods-green py-2"
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-full border border-transparent p-2.5 text-moods-green hover:bg-moods-green/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moods-green"
                        aria-label="Open cart"
                    >
                        <FaShoppingCart className="text-xl" />
                    </button>

                    <button
                        type="button"
                        className="md:hidden inline-flex items-center justify-center rounded-full border border-gray-300 p-2.5 text-moods-green hover:bg-moods-green/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moods-green"
                        aria-label="Toggle navigation menu"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        {menuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.nav
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden border-t border-gray-200 bg-white"
                    >
                        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-4 flex flex-col space-y-2">
                            {NAV_LINKS.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    onClick={handleNavClick}
                                    className="block w-full rounded-lg px-3 py-3 text-base font-medium text-[#2E4A35] hover:bg-moods-green/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moods-green"
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
