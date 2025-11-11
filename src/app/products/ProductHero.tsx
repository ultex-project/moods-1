'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProductHero() {
    return (
        <section className="relative bg-white py-12 md:py-20 overflow-hidden">
            <div className="w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-20 flex flex-col lg:flex-row items-center gap-10 relative z-10">
                {/* Left Text Content */}
                <div className="w-full lg:w-1/2 space-y-6 relative text-center lg:text-left">
                    {/* Background "Natural" SVG */}
                    <Image
                        src="/natural-hero.svg"
                        alt="Natural background text"
                        width={500}
                        height={400}
                        className="absolute top-[-40px] left-[-30px] w-[450px] select-none pointer-events-none"
                    />

                    {/* Blurred Leaf */}
                    <Image
                        src="/leaf-hero.svg"
                        alt="Decorative leaf"
                        width={150}
                        height={150}
                        className="absolute top-[-30px] left-[150px] opacity-90  select-none pointer-events-none"
                    />

                    {/* Main Title */}
                    <h2 className="text-[#D4A76A] text-4xl md:text-5xl lg:text-6xl font-bold font-avelia relative z-10 leading-tight">
                        Mods
                    </h2>
                    <h3 className="text-[#2E4A35] text-3xl md:text-4xl lg:text-5xl font-bold font-amd relative z-10 leading-tight">
                        Shop Full Width
                    </h3>
                </div>

                {/* Right Product Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2 flex justify-center relative"
                >
                    <div className="relative w-full max-w-md aspect-[4/3]">
                        <Image
                            src="/products-hero.svg"
                            alt="MODS products"
                            fill
                            className="object-contain drop-shadow-xl"
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
