import { Metadata } from 'next';
import {
    APP_DESCRIPTION,
    APP_TITLE,
    DEFAULT_METADATA,
    DEFAULT_OG_IMAGE_URL,
    DEFAULT_OG_URL,
} from '../constants/constants';
import Faq from '../sections/Faq';
import Hero from '../sections/Hero';
import SeoSection from '../sections/Seo';
import FeaturesSection from '../sections/Features';

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
    return (
        <div className="min-h-screen bg-white">
            <Hero totalUsers={8} userProfiles={[]} />

            <SeoSection />

            <FeaturesSection />

            <section id="faq">
                <Faq />
            </section>
        </div>
    );
}
