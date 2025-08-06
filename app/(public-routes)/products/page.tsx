import BlankResult from '@/components/BlankResult';
import IconResolver from '@/components/mini/IconResolver';
import { PUBLIC_ENV } from '@/utils/env';
import Link from 'next/link';
import HeaderSection from './HeaderSection';
import PartnersSection from './Partners';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';

export default async function page({ searchParams }: any) {
    let API_ENDPOINT = `${PUBLIC_ENV.API_ENDPOINT}/api/v1/products`;
    const category = (await searchParams).category || '';
    const search = (await searchParams).search || '';
    const params = new URLSearchParams();
    if (category) params.append('categorySlug', category);
    if (search) params.append('name', search);
    if (params.toString()) {
        API_ENDPOINT += `?${params.toString()}`;
    }
    const resposnse = await fetch(`${API_ENDPOINT}`, { cache: 'no-store' });
    const data = await resposnse.json();
    const result = data?.result || {};

    return (
        <main className="min-h-screen bg-gray-50 text-gray-900">
            <div className="container mx-auto px-4 py-12 lg:grid lg:grid-cols-3 lg:gap-12">
                {/* Left Column */}
                <div className="lg:col-span-2">
                    <HeaderSection />
                    <SearchBar />
                    {/* <SortDropdown /> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {' '}
                        {/* Increased gap */}
                        {result?.rows.length > 0 ? (
                            result.rows.map((product: any) => (
                                <ProductCard
                                    key={product.cuid}
                                    logoUrl={product.logoUrl}
                                    name={product.name}
                                    tagline={product.tagline}
                                    pricingType={product.pricingType}
                                />
                            ))
                        ) : (
                            <BlankResult message="No result found for your search. Please try different query." />
                        )}
                    </div>
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
                                            href={`/products?category=${cat.slug}`}
                                            key={cat.cuid}
                                            className={`flex flex-col items-center justify-center p-4 rounded-lg border transition-all duration-200 hover:shadow-md cursor-pointer
        ${
            category === cat.slug
                ? 'bg-blue-50 border-blue-200 text-blue-600'
                : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-blue-300'
        }`}
                                        >
                                            {/* {icon} */}
                                            <IconResolver name={cat.slug} />
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
