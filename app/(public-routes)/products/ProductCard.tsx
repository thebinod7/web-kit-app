import { Star } from 'lucide-react';
import React from 'react';

interface ProductCardProps {
    product: {
        id: string;
        name: string;
        description: string;
        rating: number;
        icon: React.ReactNode;
        type: string;
    };
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="relative flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200 transition-all duration-200 hover:shadow-md hover:border-blue-300 cursor-pointer group">
            {/* Adjusted icon container for centering */}
            <div className="flex-shrink-0 p-3 bg-gray-100 rounded-md border border-gray-200 flex items-center justify-center h-12 w-12">
                {product.icon}
            </div>
            <div className="flex-grow">
                <h3 className="text-lg font-medium text-gray-900">
                    {product.name}
                </h3>
                <div className="flex items-center gap-0.5 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                            key={i}
                            className={`h-4 w-4 ${
                                i < product.rating
                                    ? 'text-yellow-400 fill-yellow-400'
                                    : 'text-gray-300'
                            }`}
                        />
                    ))}
                </div>
                <p className="text-gray-700 text-sm">{product.description}</p>
            </div>

            {/* Product Type on Hover */}
            <div
                className={`absolute top-2 right-2 px-2 py-1 text-xs font-semibold rounded-full transition-all duration-200
          ${
              product.type === 'Free'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-800 text-white'
          }
          opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0`}
            >
                {product.type}
            </div>
        </div>
    );
}
