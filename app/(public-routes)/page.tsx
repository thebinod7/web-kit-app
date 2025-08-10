import { PUBLIC_ENV } from '@/utils/env';
import BlogArticles from '../sections/BlogArticles';
import Faq from '../sections/Faq';
import Hero from '../sections/Hero';
import ProductListings from '../sections/ProductListings';

const API_ENDPOINT = `${PUBLIC_ENV.API_ENDPOINT}/api/v1/products`;

export default async function page() {
    const resposnse = await fetch(`${API_ENDPOINT}`, { cache: 'no-store' });
    const data = await resposnse.json();
    const result = data?.result || {};
    return (
        <div className="min-h-screen bg-white">
            <Hero totalUsers={result.totalUsers} />

            <section id="featured">
                <ProductListings products={result?.rows || []} />
            </section>

            <BlogArticles />

            <Faq />
        </div>
    );
}
