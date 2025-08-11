import { PUBLIC_ENV } from '@/utils/env';
import Faq from '../sections/Faq';
import Hero from '../sections/Hero';
import Leaderboard from '../sections/Leaderboard';
import ProductListings from '../sections/ProductListings';

console.log('PUBLIC_ENV===>', PUBLIC_ENV);

const API_ENDPOINT = `${PUBLIC_ENV.API_ENDPOINT}/api/v1/products/home`;

export default async function page() {
    const resposnse = await fetch(`${API_ENDPOINT}`, { cache: 'no-store' });
    const data = await resposnse.json();
    const result = data?.result || {};
    return (
        <div className="min-h-screen bg-white">
            <Hero totalUsers={result.totalUsers} />

            <section id="featured">
                <ProductListings
                    products={result?.rows || []}
                    featuredList={result?.featuredList || []}
                />
            </section>

            <section id="leaderboard">
                <Leaderboard leaders={result?.leaders || []} />
            </section>

            <section id="faq">
                <Faq />
            </section>
        </div>
    );
}
