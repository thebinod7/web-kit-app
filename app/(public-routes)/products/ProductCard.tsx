import { APP_PATHS } from '@/app/constants/api';
import { ICONS } from '@/app/constants/images';
import FiveStarRating from '@/components/mini/FiveStarRating';
import { formatEnum } from '@/utils/utils';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
    logoUrl: string;
    name: string;
    slug: string;
    tagline: string;
    rating: number;
    pricingType: string;
}

export default function ProductCard({
    logoUrl,
    name,
    slug,
    tagline,
    rating = 0,
    pricingType,
}: ProductCardProps) {
    return (
        <Link href={`${APP_PATHS.PRODUCTS}/${slug}`} rel="noopener noreferrer">
            <div className="relative flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200 transition-all duration-200 hover:shadow-md hover:border-orange-300 group">
                <div className="flex-shrink-0 p-3 bg-gray-100 rounded-md border border-gray-200 flex items-center justify-center h-12 w-12">
                    <Image
                        src={logoUrl || ICONS.BLANK_IMAGE}
                        alt="Product Logo"
                        width={24}
                        height={24}
                    />
                </div>
                <div className="flex-grow">
                    <h3 className="text-lg font-medium text-gray-900">
                        {name}
                    </h3>
                    <FiveStarRating rating={rating} />
                    <p className="text-gray-700 text-sm">{tagline}</p>
                </div>

                <div
                    className={`absolute top-2 right-2 px-2 py-1 text-xs font-semibold rounded-full transition-all duration-200 bg-blue-100 text-blue-500
                                opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0`}
                >
                    {formatEnum(pricingType)}
                </div>
            </div>
        </Link>
    );
}
