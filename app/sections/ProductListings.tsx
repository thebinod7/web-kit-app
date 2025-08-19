import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { APP_PATHS } from '../constants/api';
import { ICONS } from '../constants/images';
import Advertising from './Advertising';
import FeaturedProductsLite from './FeaturedProductsLite';
import SuperProductCard from '@/components/SuperProductCard';

interface ProductListProps {
    products: any[];
    featuredListLite: any[];
}

export default function ProductListings({
    products,
    featuredListLite,
}: ProductListProps) {
    return (
        <section id="apps" className="py-10 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
                    <div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            Our Recent Launches
                        </h2>
                        <p className="text-md text-gray-600">
                            {products.length > 0
                                ? 'Every product is visible for 24-48 hours.'
                                : 'No products found. Please visit later.'}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Content Area for Product Listings */}
                    <div className="flex-1 flex flex-col gap-6">
                        {products.map((app, index) => (
                            <SuperProductCard
                                name={app.name}
                                slug={app.slug}
                                tagline={app.tagline}
                                category={app.category?.name}
                                logoUrl={app.logoUrl}
                                websiteUrl={app.websiteUrl}
                                key={index}
                            />
                        ))}
                        {products.length > 0 && (
                            <div className="flex justify-center">
                                <Link
                                    href={APP_PATHS.PRODUCTS}
                                    className="inline-flex items-center space-x-2  text-blue-400 rounded-full transition-all transform hover:scale-105"
                                >
                                    <span>View More</span>
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Sidebar for Partners and Advertising */}
                    <aside className="lg:w-80 flex-shrink-0 space-y-6">
                        <FeaturedProductsLite
                            featuredListLite={featuredListLite}
                        />

                        <Advertising />
                    </aside>
                </div>
            </div>
        </section>
    );
}
