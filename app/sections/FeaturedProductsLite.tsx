import WebsiteLink from '@/components/mini/WebsiteLink';
import Image from 'next/image';
import Link from 'next/link';
import { APP_PATHS } from '../constants/api';
import { ICONS } from '../constants/images';
import { FEATURED_COST } from '../constants/constants';

const TOTAL_AVAILABLE = 7;

interface ISideProduct {
    name: string;
    category: Record<string, any>;
    slug: string;
    tagline: string;
    websiteUrl: string;
    logoUrl: string;
}

const SidebarProductCard = ({ product }: { product: ISideProduct }) => (
    <>
        <div className="group">
            <div className="bg-white border mt-3 border-gray-200 rounded-lg p-3 hover:border-gray-300 hover:shadow-md transition-all duration-200">
                <div className="flex gap-3">
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                        <Image
                            src={product.logoUrl || ICONS.BLANK_IMAGE}
                            width={48}
                            height={48}
                            alt={product.name}
                            className="w-12 h-12 rounded-lg object-cover bg-gray-100"
                        />
                    </div>

                    {/* Content */}
                    <div className="flex-grow min-w-0">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-1">
                            <span className="bg-gray-100 px-2 py-0.5 rounded text-xs font-medium text-gray-600">
                                {product.category?.name || 'Uncategorized'}
                            </span>
                            <WebsiteLink websiteUrl={product.websiteUrl} />
                        </div>

                        {/* Product Info */}
                        <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-1 group-hover:text-gray-700 transition-colors">
                            <Link
                                className="hover:underline"
                                href={`${APP_PATHS.PRODUCTS}/${product.slug}`}
                            >
                                {product.name}
                            </Link>
                        </h3>
                        <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                            {product.tagline}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default function FeaturedProductsLite({
    featuredList,
}: {
    featuredList: ISideProduct[];
}) {
    return (
        <div className="bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 border border-slate-200/60 rounded-2xl p-6 shadow-sm backdrop-blur-sm relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-orange-500/5 to-pink-500/5 rounded-full blur-2xl"></div>

            <div className="relative z-10 flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-pulse"></div>
                        <h3 className="text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            Featured Products
                        </h3>
                    </div>
                </div>
                <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-xs">✨</span>
                </div>
            </div>

            <ul className="space-y-3 relative z-10">
                {featuredList.map((item: any, index: number) => {
                    return (
                        <SidebarProductCard
                            product={item.product}
                            key={index + 1}
                        />
                    );
                })}
            </ul>

            {/* Get Featured CTA */}
            <Link
                href={APP_PATHS.FEATURE_PRODUCT}
                className="mt-8 relative z-10 cursor-pointer"
            >
                <div className="bg-gradient-to-r mt-2 from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-200/50 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse"></div>
                                <h4 className="font-semibold text-slate-800">
                                    Premium Spot - ${FEATURED_COST.SEVEN_DAYS}
                                </h4>
                            </div>
                            <p className="text-sm text-slate-600">
                                Boost your product visibility and reach more
                                users.{' '}
                                <span className="text-blue-500">
                                    GET STARTED
                                </span>
                            </p>
                            <div className="flex items-center gap-1 mt-2">
                                <span className="text-xs font-medium text-orange-600">
                                    {TOTAL_AVAILABLE === featuredList.length
                                        ? ''
                                        : `Only ${
                                              TOTAL_AVAILABLE -
                                              featuredList.length
                                          }
                                    remaining`}
                                </span>
                                <div className="flex gap-1">
                                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
                                    <div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>

            {/* Bottom accent */}
            <div className="mt-4 h-1 bg-gradient-to-r from-blue-500/20 via-purple-500/30 to-pink-500/20 rounded-full"></div>
        </div>
    );
}
