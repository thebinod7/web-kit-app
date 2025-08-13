import { IFeaturedProducts } from '@/types/product';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { ICONS } from '../constants/images';
import { APP_PATHS } from '../constants/api';

const TOTAL_AVAILABLE = 7;

export default function FeaturedProducts({
    featuredList,
}: {
    featuredList: IFeaturedProducts[];
}) {
    return (
        <div className="bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 border border-slate-200/60 rounded-2xl p-6 shadow-sm backdrop-blur-sm relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-orange-500/5 to-pink-500/5 rounded-full blur-2xl"></div>

            {/* Header with featured badge */}
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

            {/* Products list */}
            <ul className="space-y-3 relative z-10">
                {featuredList.map((item: IFeaturedProducts, index: number) => {
                    return (
                        <li
                            key={item.cuid}
                            className="group bg-white/70 hover:bg-white/90 border border-slate-200/50 hover:border-slate-300/60 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-0.5 backdrop-blur-sm relative overflow-hidden"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Hover gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/3 group-hover:to-pink-500/5 transition-all duration-300 rounded-xl"></div>

                            {/* Featured indicator for top items */}
                            {index < 3 && (
                                <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-sm"></div>
                            )}

                            <div className="flex items-center gap-3 p-4 relative z-10">
                                {/* Logo with enhanced styling */}
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-300"></div>
                                    <img
                                        src={item.logoUrl || ICONS.BLANK_IMAGE}
                                        alt={item.name}
                                        className="w-12 h-12 rounded-xl object-cover border-2 border-white/50 shadow-sm relative z-10 group-hover:scale-105 transition-transform duration-300"
                                    />
                                    {/* Shine effect */}
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                {/* Product name with gradient */}
                                <p className="font-semibold text-slate-800 group-hover:text-slate-900 flex-1 transition-colors duration-200">
                                    {item.name}
                                </p>

                                {/* Enhanced external link */}
                                <Link
                                    href={item.websiteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-400 hover:text-blue-500 transition-all duration-200 p-2 rounded-lg hover:bg-blue-50/50 group-hover:scale-110"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                </Link>
                            </div>
                        </li>
                    );
                })}
            </ul>

            {/* Get Featured CTA */}
            <Link
                href={APP_PATHS.MY_PRODUCTS}
                className="mt-8 relative z-10 cursor-pointer"
            >
                <div className="bg-gradient-to-r mt-2 from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-200/50 rounded-xl p-4 backdrop-blur-sm">
                    <div className="flex items-center justify-between">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse"></div>
                                <h4 className="font-semibold text-slate-800">
                                    Premium Spot
                                </h4>
                            </div>
                            <p className="text-sm text-slate-600">
                                Boost your product visibility and reach more
                                users.{' '}
                                <span className="text-blue-500">
                                    Click here to get featured.
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
