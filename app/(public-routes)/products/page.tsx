import FeaturedProductsLite from '@/app/sections/FeaturedProductsLite';
import ServerSidePagination from '@/components/ServerSidePagination';
import SuperProductCard from '@/components/SuperProductCard';
import { PUBLIC_ENV } from '@/utils/env';
import Link from 'next/link';
import HeaderSection from './HeaderSection';
import ResetFilters from './ResetFilters';

const BASE_API_URL = PUBLIC_ENV.API_ENDPOINT;

function CategoryPill({ filter, category }: { filter: string; category: any }) {
    return (
        <Link
            key={category.cuid}
            href={`/products?filter=${category.slug}`}
            className="cursor-pointer"
        >
            <span
                className={`
                  inline-flex items-center px-3 py-1.5 rounded-full text-xs font-black
                  border transition-all duration-200 ease-in-out
                  ${
                      filter === category.slug
                          ? 'border-orange-300 text-orange-600'
                          : 'border-gray-300 text-gray-700'
                  }
                  hover:shadow-sm
                 bg-white   hover:border-gray-400 hover:bg-gray-50'
                  }
                `}
            >
                {category.name}
                <span
                    className={`ml-1.5 text-xs text-gray-500'
                                                }`}
                >
                    ({category._count?.Product || 0})
                </span>
            </span>
        </Link>
    );
}

export default async function page({ searchParams }: any) {
    let API_ENDPOINT = `${BASE_API_URL}/api/v1/products`;

    const filter = (await searchParams).filter || '';
    const name = (await searchParams).search || '';
    const page = (await searchParams).page;

    const params = new URLSearchParams();
    if (page) params.set('page', page);
    if (name) params.set('name', name);
    if (filter) params.set('categorySlug', filter);

    if (params.toString()) {
        API_ENDPOINT += `?${params.toString()}`;
    }
    const resposnse = await fetch(`${API_ENDPOINT}`, {
        next: { revalidate: 0 },
    });
    const data = await resposnse.json();
    const result = data?.result || {};

    return (
        <main className="min-h-screen bg-gray-50 text-gray-900">
            <div className="container mx-auto px-4 py-6 lg:grid lg:grid-cols-3 lg:gap-12">
                {/* Left Column */}
                <div className="lg:col-span-2">
                    <HeaderSection />
                    {filter && <ResetFilters />}

                    {/* Category pills */}
                    <div className="flex flex-wrap gap-2">
                        {result.categories.map((category: any) => {
                            return (
                                <CategoryPill
                                    key={category.cuid}
                                    filter={filter}
                                    category={category}
                                />
                            );
                        })}
                    </div>

                    {/* <SearchBar /> */}
                    {/* <SortDropdown /> */}
                    <div className="grid mt-6 grid-cols-1 md:grid-cols-1 gap-6">
                        {result?.rows.length > 0 ? (
                            result.rows.map((product: any) => (
                                <SuperProductCard
                                    key={product.cuid}
                                    upvotes={product._count.ProductFeedback}
                                    logoUrl={product.logoUrl}
                                    name={product.name}
                                    slug={product.slug}
                                    tagline={product.tagline}
                                    category={product?.category?.name}
                                />
                            ))
                        ) : (
                            <div className="text-sm text-center text-gray-500 py-16">
                                No products found. Please select different
                                filter.
                            </div>
                        )}
                    </div>
                    {result?.rows.length > 0 && (
                        <ServerSidePagination meta={result.meta} />
                    )}
                </div>
                {/* Right Column */}
                <div className="lg:col-span-1 mt-10 lg:mt-0">
                    <FeaturedProductsLite featuredList={result.featuredList} />
                </div>
            </div>
        </main>
    );
}
