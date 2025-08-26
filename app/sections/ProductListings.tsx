import HeaderH2 from '@/components/mini/HeaderH2';
import SuperProductCard from '@/components/SuperProductCard';
import FeaturedProductsLite from './FeaturedProductsLite';
import WeeklyStats from './WeeklyStats';

interface ProductListProps {
    products: any[];
    featuredList: any[];
}

export default function ProductListings({
    products,
    featuredList,
}: ProductListProps) {
    return (
        <section id="apps" className="py-5 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-rowlg:items-center lg:justify-between mb-4">
                    <div>
                        <HeaderH2 text="Bring Your Product into the Spotlight" />
                        <p className="text-md text-gray-600 mt-2">
                            {products.length > 0
                                ? 'Every product get at least 24-48 hours of exposure.'
                                : 'No products found. Please visit later.'}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Content Area for Product Listings */}
                    <div className="flex-1 flex flex-col gap-4">
                        {products.map((app, index) => (
                            <SuperProductCard
                                name={app.name}
                                slug={app.slug}
                                tagline={app.tagline}
                                category={app.category?.name}
                                logoUrl={app.logoUrl}
                                upvotes={app._count.ProductFeedback}
                                key={index}
                            />
                        ))}
                        {/* {products.length > 0 && (
                            <div className="flex justify-center mt-2">
                                <Link
                                    href={APP_PATHS.PRODUCTS}
                                    className="inline-flex items-center space-x-2  text-blue-400 rounded-full transition-all transform hover:scale-105"
                                >
                                    <span>View More</span>
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        )} */}
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:w-80 flex-shrink-0 space-y-4">
                        <WeeklyStats />

                        <FeaturedProductsLite featuredList={featuredList} />
                    </aside>
                </div>
            </div>
        </section>
    );
}
