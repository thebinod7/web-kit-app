import { ICONS } from '@/app/constants/images';
import { formatEnum } from '@/utils/utils';
import { ExternalLink, Tag } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function FeatureProductSelectCard({
    product,
    selectedProduct,
    setSelectedProduct,
}: {
    product: any;
    selectedProduct: any;
    setSelectedProduct: any;
}) {
    return (
        <div
            key={product.cuid}
            onClick={() => setSelectedProduct(product)}
            className={`p-4 border rounded-lg cursor-pointer transition-all ${
                selectedProduct?.id === product.cuid
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-gray-200 hover:border-gray-300'
            }`}
        >
            <div className="flex items-start space-x-3">
                <div className="text-2xl">
                    <Image
                        src={product.logoUrl || ICONS.BLANK_IMAGE}
                        alt="Product Logo"
                        width={48}
                        height={48}
                    />
                </div>
                <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-gray-800">
                            {product.name}
                        </h4>
                        <div className="flex items-center space-x-3 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                                <div className="font-medium border px-2 py-1 rounded-sm border-orange-300 text-orange-600">
                                    {formatEnum(product.pricingType)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">
                        {product.tagline}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700">
                            <Tag className="w-3 h-3 mr-1" />
                            {product.category?.name || 'Uncategorized'}
                        </span>
                        <a
                            href={product.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center text-orange-500 text-sm hover:underline"
                        >
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Visit
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
