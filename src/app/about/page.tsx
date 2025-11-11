'use client';

import Header from '../(components)/sections/Header';
import Footer from '../(components)/sections/Footer';
import Image from 'next/image';
import Link from 'next/link';
import CategoryCard from '@/app/(components)/cards/CategoryCard';

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#F9F9F7]">
            <Header />

            <main className="flex-grow">
                {/* 🌿 Hero Section */}
                <section className="relative px-4 md:px-8 lg:px-20 mt-10">
                    <div
                        className="relative max-w-6xl mx-auto rounded-2xl md:rounded-[40px] overflow-hidden bg-[#2E4A35] text-white"
                        style={{
                            backgroundImage: 'url("/about-bg.png")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        {/* Content Wrapper */}
                        <div
                            className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-10 lg:px-16 py-16 md:py-20 gap-10">

                            {/* Left Text + SVG */}
                            <div className="w-full lg:w-1/2 relative z-10 text-center lg:text-left">
                                <div className="relative inline-block leading-[0.8]">
                                    <h2 className="text-[2.75rem] md:text-[4.5rem] lg:text-[6rem] font-bold font-amd text-white mb-0 relative z-10 leading-tight">
                                        <span className="block">Who</span>
                                        <span className="block relative">
                                          we
                                          <Image
                                              src="/About-sign.svg"
                                              alt="About"
                                              width={140}
                                              height={140}
                                              className="absolute top-[10px] left-[80px] opacity-80 pointer-events-none select-none"
                                          />
                                        </span>
                                        <span className="block">are</span>
                                    </h2>
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="w-full lg:w-1/2 flex justify-center relative z-20">
                                <Image
                                    src="/about-hero-products.svg"
                                    alt="MODS Products"
                                    width={600}
                                    height={600}
                                    className="object-contain -mb-12 md:-mb-16 drop-shadow-xl"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 🌿 White Container Section */}
                <section className="relative -mt-20 px-4 md:px-8 lg:px-20">
                    <div
                        className="bg-white rounded-2xl md:rounded-3xl shadow-lg/10 border border-gray-100 max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-14 text-center space-y-8">
                        {/* 🧡 Welcome Section */}
                        <h2 className="text-4xl md:text-5xl font-amd text-[#D4A76A] mb-3 leading-tight">Mods</h2>
                        <h3 className="text-2xl md:text-3xl font-semibold text-[#2E4A35] mb-6 leading-tight">
                            Welcome to our Store!
                        </h3>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
                            traditional foods carry cultural identity, history, and customs, acting as a link to
                            heritage passed down through generations. traditional foods carry cultural identity,
                            history, and customs, acting as a link to heritage passed down through generations.
                            traditional foods carry cultural identity, history, and customs, acting as a link to
                            heritage passed down through generations. traditional foods carry cultural identity,
                            history, and customs, acting as a link to heritage passed down through generations.
                            traditional foods carry cultural identity, history, and customs, acting as a link to
                            heritage passed down through generations.
                        </p>

                        {/* Category Highlights */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <CategoryCard
                                title="Spices"
                                image="/categories/category-spices.png"
                                slug="spices"
                                standColor="#B07B4E"
                            />
                            <CategoryCard
                                title="Dates"
                                image="/categories/category-dates.png"
                                slug="dates"
                                standColor="#A1683B"
                            />
                            <CategoryCard
                                title="Olives"
                                image="/categories/category-olives-1.png"
                                slug="olives"
                                standColor="#61764B"
                            />
                        </div>

                        <Link
                            href="/shop"
                            className="inline-block mt-6 px-8 py-3 bg-[#D4A76A] text-white rounded-md font-medium text-sm md:text-base tracking-wide shadow-md hover:opacity-90 transition"
                        >
                            Shop now
                        </Link>
                    </div>
                </section>

                {/* 📊 Stats Section */}
                <section className="bg-[#FAFAF9] py-16">
                    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-10 md:gap-6">
                        {[
                            {
                                icon: '/stat-icon/stat-icon-1.png',
                                label: 'Organic products',
                                value: 963,
                            },
                            {
                                icon: '/stat-icon/stat-icon-2.png',
                                label: 'Happy clients',
                                value: 412,
                            },
                            {
                                icon: '/stat-icon/stat-icon-3.png',
                                label: 'Client satisfaction',
                                value: '99%',
                            },
                            {
                                icon: '/stat-icon/stat-icon-4.png',
                                label: 'Reviews',
                                value: 213,
                            },
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center text-center space-y-1">
                                <Image
                                    src={stat.icon}
                                    alt={stat.label}
                                    width={40}
                                    height={40}
                                    className="mb-3 object-contain"
                                />
                                <p className="text-[#2E4A35] font-medium text-base md:text-lg">{stat.label}</p>
                                <p className="text-[#2E4A35] font-bold text-lg md:text-2xl mt-1">{stat.value}</p>
                            </div>
                        ))}
                    </div>
                </section>
                {/* 🌱 Our Purpose */}
                <section className="px-4 md:px-8 lg:px-20 py-16 text-center max-w-6xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-4xl font-semibold text-[#2E4A35] mb-4 leading-tight">
                        Our purpose
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed mb-12">
                        Traditional Moroccan food store products include staples like argan oil, saffron,
                        and other spices.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: '/stat-icon/safety.png',
                                title: 'Safety',
                                text: 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.',
                                type: 'outline',
                            },
                            {
                                icon: '/stat-icon/honesty.png',
                                title: 'Honesty',
                                text: 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.',
                                type: 'filled',
                            },
                            {
                                icon: '/stat-icon/diversity.png',
                                title: 'Diversity',
                                text: 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.',
                                type: 'outline',
                            },
                        ].map((card, i) => (
                            <div
                                key={i}
                                className={`rounded-[20px] p-10 flex flex-col items-center text-center transition-all duration-300 ${
                                    card.type === 'filled'
                                        ? 'bg-[#2E4A35] text-white'
                                        : 'bg-white border border-gray-300 text-[#2E4A35]'
                                }`}
                            >
                                <Image
                                    src={card.icon}
                                    alt={card.title}
                                    width={50}
                                    height={50}
                                    className={`mb-4 ${
                                        card.type === 'filled' ? 'invert brightness-0 saturate-0' : ''
                                    }`}
                                />
                                <h3
                                    className={`text-lg md:text-xl font-bold mb-2 ${
                                        card.type === 'filled' ? 'text-white' : 'text-[#2E4A35]'
                                    }`}
                                >
                                    {card.title}
                                </h3>
                                <p
                                    className={`text-sm md:text-base leading-relaxed ${
                                        card.type === 'filled' ? 'text-white/90' : 'text-gray-600'
                                    }`}
                                >
                                    {card.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    );
}
