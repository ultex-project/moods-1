'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Define your hero slides data
const heroSlides = [
    {
        id: 1,
        title: "Mods",
        subtitle: "Flavor of tradition",
        description: "Traditional foods carry cultural identity, history, and customs, acting as a link to heritage passed down through generations.",
        buttonText: "START NOW",
        buttonLink: "/products",
        image: "/hero-image.png", // ← Add your actual image path
        color: "text-moods-gold"
    },
    {
        id: 2,
        title: "Authentic Moroccan Taste",
        subtitle: "Crafted with care",
        description: "Every jar tells a story of tradition, family recipes, and the rich flavors of Morocco.",
        buttonText: "EXPLORE PRODUCTS",
        buttonLink: "/categories",
        image: "/hero-image.png", // ← Add your actual image path
        color: "text-moods-green"
    },
    {
        id: 3,
        title: "From Our Kitchen",
        subtitle: "To Your Table",
        description: "Handcrafted with love, using only the finest ingredients sourced from Moroccan farms.",
        buttonText: "SHOP NOW",
        buttonLink: "/products",
        image: "/hero-image.png", // ← Add your actual image path
        color: "text-moods-gold"
    }
];

export default function HeroCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-play logic
    useEffect(() => {
        if (!isAutoPlaying) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
        }, 5000000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, [isAutoPlaying]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false); // Pause auto-play when user interacts
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
        setIsAutoPlaying(false);
    };

    const currentSlide = heroSlides[currentIndex];

    return (
        <section className="relative h-[80vh] md:h-screen flex items-center overflow-hidden">
            <div className="container mx-10 mx-auto px-5 xl:px-24">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10"></div>

                {/* Slides */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{opacity: 0, x: 100}}
                        animate={{opacity: 1, x: 0}}
                        exit={{opacity: 0, x: -100}}
                        transition={{duration: 0.5}}
                        className="absolute inset-0 flex items-center"
                    >
                        <div
                            className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center gap-12">
                            {/* Text Content */}
                            <div className="md:w-2/6 space-y-6">
                                <h1 className={`text-4xl md:text-5xl font-bold leading-tight ${currentSlide.color}`}>
                                    <span className="block text-5xl font-avelia">{currentSlide.title}</span>
                                    <span
                                        className="text-moods-green font-amd block mt-2">{currentSlide.subtitle}</span>
                                </h1>
                                <p className="text-gray-600 mt-4">
                                    {currentSlide.description}
                                </p>
                                <a
                                    href={currentSlide.buttonLink}
                                    className="bg-[#2E4A35] text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-all duration-300 inline-block mt-6"
                                >
                                    {currentSlide.buttonText}
                                </a>
                            </div>

                            {/* Product Image */}
                            <div className="md:w-4/6 relative">
                                <div
                                    className="absolute inset-0 bg-pattern z-0"
                                    style={{
                                        transform: 'scale(0.7)',
                                    }}
                                ></div>
                                <motion.img
                                    src={currentSlide.image}
                                    alt={currentSlide.title}
                                    className="w-full h-auto relative z-10"
                                    initial={{scale: 0.9, opacity: 0}}
                                    animate={{scale: 1, opacity: 1}}
                                    transition={{duration: 0.8, delay: 0.2}}
                                />
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-moods-green text-white p-3 rounded-full hover:bg-opacity-90 z-10"
                    aria-label="Previous slide"
                >
                    <FaChevronLeft/>
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-moods-green text-white p-3 rounded-full hover:bg-opacity-90 z-10"
                    aria-label="Next slide"
                >
                    <FaChevronRight/>
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
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