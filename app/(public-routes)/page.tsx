import { PUBLIC_ENV } from '@/utils/env';
import {
    APP_DESCRIPTION,
    APP_TITLE,
    DEFAULT_METADATA,
    DEFAULT_OG_IMAGE_URL,
    DEFAULT_OG_URL,
    NEXT_SERVER_REVALIDATE,
} from '../constants/constants';
import Faq from '../sections/Faq';
import ProductListings from '../sections/ProductListings';
import { Metadata } from 'next';

const API_ENDPOINT = `${PUBLIC_ENV.API_ENDPOINT}/api/v1/products/home`;

// TODO: Update Featured Hero Section

export const generateMetadata = async (): Promise<Metadata> => {
    const title = APP_TITLE;
    const description = APP_DESCRIPTION;
    return {
        ...DEFAULT_METADATA,
        title,
        description,
        openGraph: {
            type: 'website',
            url: DEFAULT_OG_URL,
            title,
            description,
            images: [
                {
                    url: DEFAULT_OG_IMAGE_URL,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
    };
};
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
                    featuredList={result?.featuredList || []}
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
