import { ICONS } from '@/app/constants/images';
import { PUBLIC_ENV } from '@/utils/env';
import { formatEnum } from '@/utils/utils';
import { Eye, MessageSquare } from 'lucide-react';
import ProductDetailActions from '../blocks/ProductDetailActions';
import ProductDetailsSidebar from '../blocks/ProductDetailsSidebar';
import ProductDetailsTabs from '../blocks/ProductDetailsTabs';
import ProductHeader from '../blocks/ProductHeader';
import ProductOverview from '../blocks/ProductOverview';

// Mock data for the product details
const productData: any = {
    rating: 5,
    upvotes: 48,
    upvotedByAvatars: [ICONS.USER, ICONS.USER],
    tabs: [
        { icon: Eye, label: 'Overview' },
        { icon: MessageSquare, label: 'Comments', count: 4 },
    ],
    publisherLogo: ICONS.USER,
    publisherName: 'invomaker',
    launchDate: '2025-11-27',
    category: 'Business',
};

export default async function ProductDetailsPage({ params }: { params: any }) {
    const slug = params.slug;
    console.log('slug', slug);
    let API_ENDPOINT = `${PUBLIC_ENV.API_ENDPOINT}/api/v1/products/details/${slug}`;
    const resposnse = await fetch(`${API_ENDPOINT}`, { cache: 'no-store' });
    const data = await resposnse.json();
    const result = data?.result || null;
    if (!result) return <div>Product not found</div>;
    console.log('RESULT:', result);

    return (
        <div className="bg-white mt-8 rounded-lg shadow-lg w-full max-w-6xl mx-auto overflow-hidden">
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Column (Main Content) */}
                <div className="md:col-span-2">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                        <ProductHeader
                            logo={result.logoUrl}
                            name={result.name}
                            rating={productData.rating}
                            tagline={result.tagline}
                        />
                        <div className="flex-shrink-0 sm:ml-auto">
                            <ProductDetailActions
                                websiteUrl={result.websiteUrl}
                                upvotes={productData.upvotes}
                            />
                        </div>
                    </div>

                    <ProductDetailsTabs tabs={productData.tabs} />

                    <div className="mt-6">
                        <ProductOverview description={result.description} />
                    </div>
                </div>

                {/* Right Column (Sidebar) */}
                <div className="md:col-span-1">
                    <ProductDetailsSidebar
                        publisherLogo={result.submittedBy?.profilePicture}
                        publisherName={result.submittedBy?.name || '-'}
                        launchDate={result.createdAt}
                        category={result.category?.name || '-'}
                        pricing={formatEnum(result?.pricingType || '')}
                        tags={result.tags}
                        socialDetails={result.details}
                    />
                </div>
            </div>
        </div>
    );
}
