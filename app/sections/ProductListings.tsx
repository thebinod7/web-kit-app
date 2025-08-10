import { ArrowRight, ChevronRight, ExternalLink, Star } from 'lucide-react';
import { ICONS } from '../constants/images';
import Link from 'next/link';
import { APP_PATHS } from '../constants/api';
import { formatEnum } from '@/utils/utils';
import Advertising from './Advertising';
import FeaturedProducts from './FeaturedProducts';

export default function ProductListings({ products }: { products: any[] }) {
    return (
        <section id="apps" className="py-10 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            New Products
                        </h2>
                        <p className="text-lg text-gray-600">
                            Explore our recently launched products.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Content Area for Product Listings */}
                    <div className="flex-1 flex flex-col gap-6">
                        {products.map((app, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300 group flex items-center gap-4" // Card itself is horizontal flex
                            >
                                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                                    <img
                                        src={app.logoUrl || ICONS.BLANK_IMAGE}
                                        alt={app.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 items-center">
                                    {/* Content area next to image */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {app.name}
                                        </h3>
                                        <p className="text-gray-600 text-sm line-clamp-1">
                                            {app.tagline}
                                        </p>{' '}
                                        {/* Line clamp 1 for single line */}
                                    </div>
                                    <div className="flex items-center justify-between sm:justify-end gap-4">
                                        <span className="text-xs font-medium text-orange-600 bg-blue-50 px-2 py-1 rounded-full">
                                            {app.category?.name || 'Category'}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between col-span-full mt-2">
                                        <Link
                                            href={
                                                APP_PATHS.PRODUCTS +
                                                '/' +
                                                app.slug
                                            }
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:text-blue-500 flex items-center space-x-1 text-sm font-medium"
                                        >
                                            <span>View Details</span>
                                            <ExternalLink className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="flex justify-center">
                            <Link
                                href={APP_PATHS.PRODUCTS}
                                className="inline-flex items-center space-x-2  text-blue-400 rounded-full transition-all transform hover:scale-105"
                            >
                                <span>View More</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Sidebar for Partners and Advertising */}
                    <aside className="lg:w-80 flex-shrink-0 space-y-8">
                        <FeaturedProducts />

                        <Advertising />
                    </aside>
                </div>
            </div>
        </section>
    );
}
