'use client';
import { APP_PATHS } from '@/app/constants/api';
import { ICONS } from '@/app/constants/images';
import Image from 'next/image';
import Link from 'next/link';
import WebsiteLink from './mini/WebsiteLink';

interface ISuperProduct {
    name: string;
    slug: string;
    logoUrl: string;
    tagline: string;
    category: string;
    websiteUrl: string;
}

export default function SuperProductCard({
    name,
    slug,
    logoUrl,
    tagline,
    category,
    websiteUrl,
}: ISuperProduct) {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 w-full relative transition-all duration-300 ease-out hover:shadow-xl hover:shadow-orange-100/50 hover:-translate-y-1">
            {/* Award icon in top-left */}
            {/* <div className="absolute top-3 left-3">
                <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110">
                    <Award className="w-3 h-3 text-white" />
                </div>
            </div> */}

            <div className="absolute top-4 right-4 flex items-center gap-2">
                <WebsiteLink websiteUrl={websiteUrl} />
            </div>

            <div className="flex items-center gap-4 mt-3">
                {/* App icon */}
                <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 hover:bg-blue-600 hover:scale-105">
                    <Link href={`${APP_PATHS.PRODUCTS}/${slug}`}>
                        <Image
                            src={logoUrl || ICONS.BLANK_IMAGE}
                            width={12}
                            height={12}
                            alt={name}
                            className="w-12 h-12 md:w-14 md:h-14 rounded-xl object-cover bg-gray-100"
                        />
                    </Link>
                </div>

                {/* Text content - horizontal layout */}
                <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                    <div className="min-w-0">
                        <h2 className="text-lg font-semibold text-gray-900 mb-1">
                            <Link
                                href={`${APP_PATHS.PRODUCTS}/${slug}`}
                                className="hover:underline"
                            >
                                {name}
                            </Link>
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            {tagline}
                        </p>
                    </div>

                    <div className="flex-shrink-0 mt-4">
                        <span className="px-3 py-2 bg-gray-100 text-orange-500 text-sm font-medium rounded-full transition-all duration-200">
                            {category || 'Uncategorized'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
