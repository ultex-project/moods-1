'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const heroSlides = [
    {
        id: 1,
        title: "Mods",
        subtitle: "Flavor of tradition",
        description:
            "Traditional foods carry cultural identity, history, and customs, acting as a link to heritage passed down through generations.",
        buttonText: "START NOW",
        buttonLink: "/products",
        image: "/hero-image.png",
        color: "text-moods-gold",
    },
    {
        id: 2,
        title: "Authentic Moroccan Taste",
        subtitle: "Crafted with care",
        description:
            "Every jar tells a story of tradition, family recipes, and the rich flavors of Morocco.",
        buttonText: "EXPLORE PRODUCTS",
        buttonLink: "/products",
        image: "/hero-image.png",
        color: "text-moods-green",
    },
    {
        id: 3,
        title: "From Our Kitchen",
        subtitle: "To Your Table",
        description:
            "Handcrafted with love, using only the finest ingredients sourced from Moroccan farms.",
        buttonText: "SHOP NOW",
        buttonLink: "/products",
        image: "/hero-image.png",
        color: "text-moods-gold",
    },
];

export default function HeroCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const prefersReducedMotion = useReducedMotion();
    const slideDuration = 5000;

    useEffect(() => {
        if (!isAutoPlaying || prefersReducedMotion) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
        }, slideDuration);
        return () => clearInterval(timer);
    }, [isAutoPlaying, prefersReducedMotion, slideDuration]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
        setIsAutoPlaying(false);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

    const currentSlide = heroSlides[currentIndex];

    return (
        <section className="relative overflow-hidden py-10 sm:py-14 md:py-16">
            <div className="absolute inset-0 opacity-10" />

            <div className="w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -100 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* 👇 Order reversed on mobile */}
                        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">

                            {/* 📝 Text section */}
                            <div className="w-full lg:w-[45%] space-y-6 text-center lg:text-left mt-6 lg:mt-0">
                                <h1
                                    className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight ${currentSlide.color}`}
                                >
                  <span className="block text-5xl md:text-6xl lg:text-7xl font-avelia leading-none">
                    {currentSlide.title}
                  </span>
                                    <span className="text-moods-green font-amd block mt-2 text-3xl md:text-4xl lg:text-5xl leading-tight">
                    {currentSlide.subtitle}
                  </span>
                                </h1>
                                <p className="text-gray-600 mt-4 text-base md:text-lg leading-relaxed">
                                    {currentSlide.description}
                                </p>
                                <Link
                                    href={currentSlide.buttonLink}
                                    className="bg-[#2E4A35] text-white px-6 py-3 rounded-xl md:rounded-2xl font-medium text-sm md:text-base tracking-wide hover:opacity-90 transition-all duration-300 inline-block mt-6"
                                >
                                    {currentSlide.buttonText}
                                </Link>
                            </div>

                            {/* 🖼️ Image section */}
                            <div className="w-full lg:w-[70%] flex justify-center relative">
                                <motion.div
                                    initial={prefersReducedMotion ? false : { scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1.15, opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.1 }}
                                    className="relative w-[90%] sm:w-[80%] md:w-[75%] lg:w-full aspect-square z-10"
                                >
                                    <Image
                                        src={currentSlide.image}
                                        alt={currentSlide.title}
                                        fill
                                        priority={currentIndex === 0}
                                        className="object-contain drop-shadow-2xl"
                                        sizes="(min-width: 1024px) 60vw, 90vw"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* ◀️▶️ Navigation */}
                <button
                    type="button"
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-moods-green text-white p-3 rounded-full hover:bg-opacity-90 z-10"
                    aria-label="Previous slide"
                >
                    <FaChevronLeft />
                </button>

                <button
                    type="button"
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-moods-green text-white p-3 rounded-full hover:bg-opacity-90 z-10"
                    aria-label="Next slide"
                >
                    <FaChevronRight />
                </button>

                {/* ⭕ Dots */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                                index === currentIndex ? 'bg-moods-green' : 'bg-gray-300'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
