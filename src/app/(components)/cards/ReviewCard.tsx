'use client';

import { FaStar } from 'react-icons/fa';
import Link from 'next/link';

interface ReviewCardProps {
    name?: string;
    review?: string;
    rating: number;
    isHighlighted?: boolean;
    type: 'full' | 'stars-only';
    slug?: string;
}

export default function ReviewCard({
                                       name,
                                       review,
                                       rating,
                                       isHighlighted = false,
                                       type,
                                       slug
                                   }: ReviewCardProps) {
    // Define star color based on context
    const starColor = isHighlighted ? 'text-white' : 'text-[#383838]';
    const textColor = isHighlighted ? 'text-white' : 'text-gray-800';

    // For stars-only cards: always show 5 white stars (visual placeholder)
    const stars = Array.from({ length: 5 }, (_, i) => {
        let starClass = 'inline mr-1 '; // 👈 Increased size

        if (type === 'stars-only') {
            starClass += 'text-4xl text-white'; // 👈 Always white for stars-only
        } else {
            // Full card: filled stars use starColor, unfilled use gray-300
            starClass += i < rating ? ` ${starColor} text-xl` : ' text-gray-300 text-xl';
        }

        return (
            <FaStar key={i} className={starClass} />
        );
    });

    if (type === 'stars-only') {
        return (
            <div
                className={`p-6 rounded-xl transition-all duration-300 ${
                    isHighlighted
                        ? 'bg-[#E7E7E7] text-white'
                        : 'bg-[#D2D0D0] text-gray-800'
                } h-50 flex items-center justify-center`}
            >
                <div className="flex">{stars}</div>
            </div>
        );
    }

    // Full card: name + text + stars
    return (
        <div
            className={`p-6 rounded-xl transition-all duration-300 ${
                isHighlighted
                    ? 'bg-[#E4AB66] text-white'
                    : 'bg-gray-200 text-gray-800'
            } h-50 flex flex-col justify-between`}
        >
            <div>
                <h3 className={`text-lg font-bold mb-1 ${textColor}`}>{name}</h3>
                <p className={`text-sm ${textColor} mb-2 leading-tight`}>
                    {review}
                </p>
            </div>
            <div className="flex">{stars}</div>
        </div>
    );
}