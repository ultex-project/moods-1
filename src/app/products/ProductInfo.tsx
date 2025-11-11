'use client';

import Link from 'next/link';

export default function ProductInfo() {
    return (
        <div className="space-y-4">
            <h1 className="text-3xl font-bold text-[#2E4A35]">Product Name</h1>

            <div className="flex items-center gap-2">
                <div className="text-yellow-500">★★★★☆</div>
                <span className="text-gray-500 text-sm">(12 customer reviews)</span>
            </div>

            <div className="flex items-center gap-3">
                <span className="text-[#2E4A35] text-2xl font-semibold">$21.00</span>
                <span className="text-gray-400 line-through">$28.00</span>
            </div>

            {/* Order Form */}
            <form className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                    <input
                        type="text"
                        placeholder="Name"
                        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#2E4A35]"
                    />
                    <input
                        type="text"
                        placeholder="Phone number"
                        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#2E4A35]"
                    />
                </div>
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#2E4A35]"
                />
                <button
                    type="submit"
                    className="bg-[#2E4A35] text-white px-6 py-3 rounded-md hover:opacity-90 transition"
                >
                    Submit
                </button>
            </form>

            <p className="text-gray-600 text-sm leading-relaxed">
                Traditional Moroccan food staples like argan oil, saffron, and other spices.
            </p>

            <p className="text-[#2E4A35] font-medium">In Stock</p>

            <div className="flex items-center gap-3 mt-4">
                <button className="bg-[#2E4A35] text-white px-5 py-2 rounded-md hover:opacity-90">
                    Add to cart
                </button>
                <button className="border border-gray-300 rounded-md p-2 hover:bg-gray-50">
                    💚
                </button>
                <button className="border border-gray-300 rounded-md p-2 hover:bg-gray-50">
                    ↻
                </button>
            </div>

            <div className="pt-4 text-gray-500 text-sm">
                Categories: <Link href="#" className="text-[#2E4A35] hover:underline">Products</Link>,{' '}
                <Link href="#" className="text-[#2E4A35] hover:underline">Details</Link>
            </div>
        </div>
    );
}
