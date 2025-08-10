'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';

interface RatingInputProps {
    initialRating?: number;
    onRatingChange?: (rating: number) => void;
    className?: string;
}

export function RatingInput({
    initialRating = 0,
    onRatingChange,
    className,
}: RatingInputProps) {
    const [rating, setRating] = useState(initialRating);
    const [hover, setHover] = useState(0);

    const handleClick = (index: number) => {
        setRating(index);
        onRatingChange?.(index);
    };

    return (
        <div className={`flex items-center gap-1 ${className}`}>
            {[1, 2, 3, 4, 5].map((index) => (
                <button
                    key={index}
                    type="button"
                    aria-label={`Rate ${index} out of 5 stars`}
                    className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                    onClick={() => handleClick(index)}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(0)}
                >
                    <Star
                        className={`h-6 w-6 transition-colors duration-200 ${
                            index <= (hover || rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'fill-gray-300 text-gray-300'
                        }`}
                    />
                </button>
            ))}
        </div>
    );
}
