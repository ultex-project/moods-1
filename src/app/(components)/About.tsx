'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutSection() {
    return (
        <section className="py-16 px-4 md:px-8 lg:px-16">
            <div className="container px-20 mx-auto">
                <div
                    className="bg-[#2E4A35] rounded-3xl p-8 md:p-12 overflow-hidden relative"
                    style={{
                        backgroundImage: 'url("/about-bg.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    {/*/!* Gradient overlay for depth *!/*/}
                    {/*<div className="absolute inset-0 bg-gradient-to-r from-[#2E4A35] to-[#223A2B] opacity-90"></div>*/}

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        {/* Text Content */}
                        <div className="md:w-1/2 space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-white font-amd">
                                About MODS
                            </h2>
                            <p className="text-gray-200 mt-4 text-lg leading-relaxed font-funnel-display-regular">
                                Traditional foods carry cultural identity, history, and customs, acting as a link to heritage passed down through generations.
                            </p>
                            <Link
                                href="/about"
                                className="inline-block mt-6 px-6 py-3 rounded-md font-medium transition-all duration-300"
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

                    </div>
                </div>
            </div>
        </section>
    );
}