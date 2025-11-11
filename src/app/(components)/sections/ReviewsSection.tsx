'use client';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
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
        <section className="py-16">
            <div className="w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-20 space-y-10">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div className="text-center md:text-left space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold font-amd text-moods-green flex items-center justify-center md:justify-start">
              <span className="mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                <Image
                    src="/category-icon/category-icon-2.png"
                    alt="Reviews icon"
                    width={32}
                    height={32}
                />
              </span>
                            Our Reviews
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
                            Traditional Moroccan food store products include staples like argan oil, saffron, and
                            other spices
                        </p>
                    </div>

                    <div className="flex justify-center md:justify-end space-x-3">
                        <button type="button" className="bg-moods-green text-white p-2 rounded-md hover:bg-opacity-90 transition" aria-label="Previous reviews">
                            <FaChevronLeft />
                        </button>
                        <button type="button" className="bg-moods-green text-white p-2 rounded-md hover:bg-opacity-90 transition" aria-label="Next reviews">
                            <FaChevronRight />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
