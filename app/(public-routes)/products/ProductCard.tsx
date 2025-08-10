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
        <Link href={`${APP_PATHS.PRODUCTS}/${slug}`}>
            <div className="relative overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-700 hover:shadow-xl hover:shadow-orange-100/50 group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative flex items-start gap-5 p-6">
                    <div className="flex-shrink-0">
                        <div className="relative p-4 bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl border border-gray-200 flex items-center justify-center h-16 w-16 group-hover:border-orange-200 group-hover:shadow-lg transition-all duration-500">
                            <Image
                                src={logoUrl || ICONS.BLANK_IMAGE}
                                alt="Product Logo"
                                width={32}
                                height={32}
                                className="transform group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    </div>
                    <div className="flex-grow space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transform group-hover:-translate-y-0.5 transition-all duration-300">
                            {name}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                            {tagline}
                        </p>
                    </div>
                    <div
                        className={`absolute top-2 right-2 px-2 py-1 text-xs font-semibold rounded-full transition-all duration-200 bg-blue-100 text-blue-500
                                opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0`}
                    >
                        {formatEnum(pricingType)}
                    </div>
                </div>
            </div>
        </Link>
    );
}
