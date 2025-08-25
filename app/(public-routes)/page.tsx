import { PUBLIC_ENV, SERVER_ENV } from '@/utils/env';
import Faq from '../sections/Faq';
import ProductListings from '../sections/ProductListings';
import { NEXT_SERVER_REVALIDATE } from '../constants/constants';

const API_ENDPOINT = `${SERVER_ENV.PRIVATE_API_ENDPOINT}/api/v1/products/home`;

// TODO: Update Featured Hero Section
export default async function page() {
    const resposnse = await fetch(`${API_ENDPOINT}`, NEXT_SERVER_REVALIDATE);
    const data = await resposnse.json();
    const result = data?.result || {};

    return (
        <div className="min-h-screen bg-white">
            {/* <Hero
                totalUsers={result.totalUsers}
                userProfiles={result.userProfiles}
            /> */}

            {/* <FeaturedProductsHero /> */}

            <section id="products">
                <ProductListings
                    products={result?.rows || []}
                    featuredListLite={result?.featuredListLite || []}
                />
            </section>

            {/* <section id="leaderboard">
                <Leaderboard leaders={result?.leaders || []} />
            </section> */}

            <section id="faq">
                <Faq />
            </section>
        </div>
    );
}
