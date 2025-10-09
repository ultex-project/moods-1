'use client';

import { FaStar } from 'react-icons/fa';

export type ReviewVariant = 'full' | 'stars-only';

export interface ReviewCardProps {
    name?: string;
    review?: string;
    rating: number;
    isHighlighted?: boolean;
    type: ReviewVariant;
    slug?: string;
}

export default function ReviewCard({
                                       name,
                                       review,
                                       rating,
                                       isHighlighted = false,
                                       type,
                                       slug,
                                   }: ReviewCardProps) {
    const starColor = isHighlighted ? 'text-white' : 'text-[#383838]';
    const textColor = isHighlighted ? 'text-white' : 'text-gray-800';

    const stars = Array.from({ length: 5 }, (_, i) => {
        let starClass = 'inline mr-1';
        if (type === 'stars-only') {
            starClass += ' text-4xl text-white';
        } else {
            starClass += i < rating ? ` ${starColor} text-xl` : ' text-gray-300 text-xl';
        }
        return <FaStar key={i} className={starClass} />;
    });

    if (type === 'stars-only') {
        return (
            <div
                className={`p-6 rounded-xl transition-all duration-300 ${
                    isHighlighted ? 'bg-[#E7E7E7] text-white' : 'bg-[#D2D0D0] text-gray-800'
                } min-h-[170px] flex items-center justify-center`}
            >
                <div className="flex">{stars}</div>
            </div>
        );
    }

    return (
        <div
            className={`p-6 rounded-xl transition-all duration-300 ${
                isHighlighted ? 'bg-[#E4AB66] text-white' : 'bg-gray-200 text-gray-800'
            } min-h-[170px] flex flex-col justify-between`}
        >
            <div>
                <h3 className={`text-lg font-bold mb-1 ${textColor}`}>{name}</h3>
                <p className={`text-sm ${textColor} mb-2 leading-tight`}>{review}</p>
            </div>
            <div className="flex">{stars}</div>
        </div>
    );
}
