'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutSection() {
    return (
        <section className="py-16">
            <div className="w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-20">
                <div
                    className="bg-[#2E4A35] rounded-2xl md:rounded-3xl p-6 md:p-12 overflow-visible relative shadow-lg"
                    style={{
                        backgroundImage: 'url("/about-bg.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

                        {/* Text Content */}
                        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-amd leading-tight">
                                About MODS
                            </h2>
                            <p className="text-gray-100 mt-4 text-base md:text-lg leading-relaxed font-funnel-display-regular">
                                Traditional foods carry cultural identity, history, and customs, acting as a link to heritage passed down through generations.
                            </p>
                            <Link
                                href="/about"
                                className="inline-block mt-6 px-6 py-3 rounded-lg md:rounded-xl font-medium text-sm md:text-base tracking-wide transition-all duration-300"
                                style={{
                                    backgroundColor: '#D4A76A', // Gold color
                                    color: 'white',
                                    textDecoration: 'none',
                                    fontWeight: '500',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                            >
                                Show more
                            </Link>
                        </div>

                        {/* Product Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-1/2 flex justify-center relative"
                        >
                            <div className="relative w-full max-w-md aspect-[4/3]">
                                <Image
                                    src="/about-products.png"
                                    alt="MODS product collection"
                                    fill
                                    className="object-contain drop-shadow-2xl"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
