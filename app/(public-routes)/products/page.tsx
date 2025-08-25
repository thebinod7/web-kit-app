import { NEXT_SERVER_REVALIDATE } from '@/app/constants/constants';
import BlankResult from '@/components/BlankResult';
import ServerSidePagination from '@/components/ServerSidePagination';
import SuperProductCard from '@/components/SuperProductCard';
import { SERVER_ENV } from '@/utils/env';
import Link from 'next/link';
import HeaderSection from './HeaderSection';
import PartnersSection from './Partners';
import ResetFilters from './ResetFilters';

export default async function page({ searchParams }: any) {
    let API_ENDPOINT = `${SERVER_ENV.PRIVATE_API_ENDPOINT}/api/v1/products`;

    const categorySlug = (await searchParams).categorySlug || '';
    const name = (await searchParams).search || '';
    const page = (await searchParams).page;

    const params = new URLSearchParams();
    if (page) params.set('page', page);
    if (name) params.set('name', name);
    if (categorySlug) params.set('categorySlug', categorySlug);

    if (params.toString()) {
        API_ENDPOINT += `?${params.toString()}`;
    }
    const resposnse = await fetch(`${API_ENDPOINT}`, NEXT_SERVER_REVALIDATE);
    const data = await resposnse.json();
    const result = data?.result || {};

    return (
        <main className="min-h-screen bg-gray-50 text-gray-900">
            <div className="container mx-auto px-4 py-12 lg:grid lg:grid-cols-3 lg:gap-12">
                {/* Left Column */}
                <div className="lg:col-span-2">
                    <HeaderSection />
                    {categorySlug && <ResetFilters />}

                    {/* <SearchBar /> */}
                    {/* <SortDropdown /> */}
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
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
                            <BlankResult message="No result found for your search. Please try different query." />
                        )}
                    </div>
                    {result?.rows.length > 0 && (
                        <ServerSidePagination meta={result.meta} />
                    )}
                </div>
                {/* Right Column */}
                <div className="lg:col-span-1 mt-10 lg:mt-0">
                    <section className="mb-10">
                        <h2 className="text-sm font-semibold uppercase text-gray-700 mb-4">
                            Product Categories
                        </h2>
                        <div className="grid grid-cols-3 gap-4">
                            {result.categories.length > 0 &&
                                result.categories.map((cat: any) => {
                                    return (
                                        <Link
                                            href={`/products?categorySlug=${cat.slug}`}
                                            key={cat.cuid}
                                            className={`flex flex-col items-center justify-center p-4 rounded-lg border transition-all duration-200 hover:shadow-md cursor-pointer
        ${
            categorySlug === cat.slug
                ? 'bg-blue-50 border-orange-200 text-orange-600'
                : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-orange-300'
        }`}
                                        >
                                            <span className="mt-2 text-sm font-medium">
                                                {cat.name}
                                            </span>
                                        </Link>
                                    );
                                })}
                        </div>
                        {result.categories.length < 1 && (
                            <div className="text-sm">No categories found!</div>
                        )}
                    </section>
                    <PartnersSection />
                </div>
            </div>
        </main>
    );
}
