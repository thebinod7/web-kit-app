import { Star } from 'lucide-react';
import React from 'react';

export default function FiveStarRating({ rating = 0 }: { rating: number }) {
    return (
        <div className="flex items-center mb-1">
            {rating < 1
                ? Array.from({ length: 5 }).map((_, i) => (
                      <Star
                          key={i}
                          className="h-5 w-5 fill-gray-300 text-gray-300"
                      />
                  ))
                : Array.from({ length: rating }).map((_, i) => (
                      <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                  ))}
        </div>
    );
}
