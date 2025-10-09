'use client';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ReviewCard, { ReviewCardProps } from '@/app/(components)/cards/ReviewCard';

type ReviewItem = { id: number } & ReviewCardProps;

const reviews: ReviewItem[] = [
    {
        id: 1,
        type: 'full',
        name: 'Mohammed',
        review:
            'Traditional Moroccan food store products include staples like argan oil, saffron, and other spices',
        rating: 5,
        isHighlighted: false,
    },
    {
        id: 2,
        type: 'full',
        name: 'Mohammed',
        review:
            'Traditional Moroccan food store products include staples like argan oil, saffron, and other spices',
        rating: 5,
        isHighlighted: true,
    },
    {
        id: 3,
        type: 'stars-only',
        rating: 5,
        isHighlighted: false,
    },
    {
        id: 4,
        type: 'stars-only',
        rating: 5,
        isHighlighted: false,
    },
    {
        id: 5,
        type: 'full',
        name: 'Mohammed',
        review:
            'Traditional Moroccan food store products include staples like argan oil, saffron, and other spices',
        rating: 5,
        isHighlighted: false,
    },
    {
        id: 6,
        type: 'full',
        name: 'Mohammed',
        review:
            'Traditional Moroccan food store products include staples like argan oil, saffron, and other spices',
        rating: 5,
        isHighlighted: false,
    },
];

export default function ReviewsSection() {
    return (
        <section className="py-16 px-4 md:px-8 lg:px-16">
            <div className="container mx-auto">
                {/* Header */}
                <div className="mb-12 flex items-center justify-between">
                    <div>
                        <h2 className="text-3xl font-bold font-amd text-moods-green flex items-center">
              <span className="mr-2">
                <img
                    src="/category-icon/category-icon-2.png"
                    alt="Reviews Icon"
                    className="h-8 w-8"
                />
              </span>
                            Our Reviews
                        </h2>
                        <p className="text-gray-600 mt-4">
                            Traditional Moroccan food store products include staples like argan oil, saffron, and
                            other spices
                        </p>
                    </div>

                    <div className="flex space-x-2">
                        <button className="bg-moods-green text-white p-2 rounded-md hover:bg-opacity-90 transition">
                            <FaChevronLeft />
                        </button>
                        <button className="bg-moods-green text-white p-2 rounded-md hover:bg-opacity-90 transition">
                            <FaChevronRight />
                        </button>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {reviews.map(({ id, ...cardProps }) => (
                        <div key={id} className="flex-shrink-0">
                            <ReviewCard {...cardProps} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
