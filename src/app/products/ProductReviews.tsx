'use client';

export default function ProductReviews() {
    const reviews = [
        {
            name: 'Mohammed',
            content:
                'Traditional Moroccan food items include staples like argan oil, saffron, and other spices.',
            rating: 5,
        },
        {
            name: 'Mohammed',
            content:
                'Traditional Moroccan food items include staples like argan oil, saffron, and other spices.',
            rating: 5,
        },
    ];

    return (
        <div className="mt-12 border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-bold text-[#2E4A35] mb-2">Reviews ({reviews.length})</h2>
            <p className="text-gray-600 mb-6">2 reviews for Omnare sed consequat</p>

            {/* Reviews List */}
            <div className="space-y-4 mb-8">
                {reviews.map((r, i) => (
                    <div
                        key={i}
                        className="bg-gray-50 border border-gray-200 rounded-lg p-4"
                    >
                        <p className="font-semibold text-[#2E4A35]">{r.name}</p>
                        <p className="text-gray-600 text-sm mt-1">{r.content}</p>
                        <div className="text-yellow-500 mt-1">★★★★★</div>
                    </div>
                ))}
            </div>

            {/* Add Review */}
            <div className="mt-8">
                <h3 className="text-xl font-semibold text-[#2E4A35] mb-4">Add your rating</h3>
                <div className="text-yellow-500 mb-2">★★★★★</div>

                <form className="space-y-3">
                    <textarea
                        placeholder="Your Review..."
                        rows={3}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#2E4A35]"
                    />
                    <div className="grid grid-cols-2 gap-3">
                        <input
                            type="text"
                            placeholder="Name"
                            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#2E4A35]"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#2E4A35]"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-[#2E4A35] text-white px-6 py-3 rounded-md hover:opacity-90 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
