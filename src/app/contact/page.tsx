'use client';

import Image from 'next/image';
import Header from '../(components)/sections/Header';
import Footer from '../(components)/sections/Footer';

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow">
                {/* 🏞️ Contact Hero Section */}
                <section className="relative px-4 md:px-8 lg:px-20 mt-10">
                    <div
                        className="relative max-w-6xl mx-auto rounded-[40px] overflow-visible bg-[#2E4A35] text-white"
                        style={{
                            backgroundImage: 'url("/about-bg.png")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        {/* Inner content */}
                        <div className="relative flex flex-col items-center justify-end text-center h-[360px] md:h-[400px] lg:h-[420px] z-10">
                            <h1 className="absolute top-10 md:top-12 text-4xl md:text-5xl font-bold font-amd tracking-wide">
                                CONTACT US
                            </h1>

                            {/* Product image — outside the box */}
                            <div className="absolute bottom-[-60px] md:bottom-[-80px] left-1/2 -translate-x-1/2 z-20">
                                <Image
                                    src="/contact-hero-products.png"
                                    alt="Contact Products"
                                    width={600}
                                    height={600}
                                    className="object-contain drop-shadow-xl"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* 📨 Contact Form */}
                <section className="px-4 md:px-8 lg:px-20 py-20 w-full max-w-6xl mx-auto">
                    <h2 className="text-xl font-semibold text-[#2E4A35] mb-10 text-center tracking-wide">
                        TELL US YOUR PROJECT
                    </h2>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="First Name *"
                            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#2E4A35] transition"
                        />
                        <input
                            type="text"
                            placeholder="Last Name *"
                            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#2E4A35] transition"
                        />
                        <input
                            type="text"
                            placeholder="Subject *"
                            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#2E4A35] transition md:col-span-2"
                        />
                        <input
                            type="email"
                            placeholder="Email *"
                            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#2E4A35] transition md:col-span-2"
                        />
                        <textarea
                            placeholder="Your Message..."
                            rows={5}
                            className="border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#2E4A35] transition md:col-span-2 resize-none"
                        ></textarea>

                        <div className="md:col-span-2 text-center">
                            <button
                                type="submit"
                                className="bg-[#2E4A35] text-white px-8 py-3 rounded-md hover:opacity-90 transition"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </section>

                {/* 📰 Newsletter Section */}
                <section className="border-t border-gray-200 py-16 px-4 md:px-8 lg:px-20 text-center bg-white">
                    <h2 className="text-3xl font-semibold text-[#2E4A35] mb-3 font-amd">
                        Subscribe Newsletter.
                    </h2>
                    <p className="text-gray-600 mb-8 text-sm md:text-base">
                        Get e-mail updates about our latest shop and special offers.
                    </p>

                    {/* Input & Button */}
                    <form className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-lg mx-auto mb-10">
                        <input
                            type="email"
                            placeholder="Enter you email address here ..."
                            className="w-full sm:flex-1 border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#2E4A35] transition"
                        />
                        <button
                            type="submit"
                            className="bg-[#2E4A35] text-white px-6 py-3 rounded-md text-sm font-medium hover:opacity-90 transition"
                        >
                            Subscribe
                        </button>
                    </form>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-6 text-gray-400">
                        <a href="#" className="hover:text-[#2E4A35] transition"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="hover:text-[#2E4A35] transition"><i className="fab fa-x-twitter"></i></a>
                        <a href="#" className="hover:text-[#2E4A35] transition"><i className="fab fa-pinterest-p"></i></a>
                        <a href="#" className="hover:text-[#2E4A35] transition"><i className="fab fa-instagram"></i></a>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
