import { PUBLIC_ENV } from '@/utils/env';
import { formatEnum } from '@/utils/utils';
import ProductDetailActions from '../blocks/ProductDetailActions';
import ProductDetailsSidebar from '../blocks/ProductDetailsSidebar';
import ProductDetailsTabs from '../blocks/ProductDetailsTabs';
import ProductHeader from '../blocks/ProductHeader';

export default async function ProductDetailsPage({ params }: { params: any }) {
    const slug = params.slug;
    let API_ENDPOINT = `${PUBLIC_ENV.API_ENDPOINT}/api/v1/products/details/${slug}`;
    const resposnse = await fetch(`${API_ENDPOINT}`, { cache: 'no-store' });
    const data = await resposnse.json();
    const result = data?.result || null;
    if (!result)
        return <div className="py-24 text-center">Product not found!</div>;
    console.log('RESULT:', result);

    return (
        <div className="bg-white mt-8 rounded-lg shadow-lg w-full max-w-6xl mx-auto overflow-hidden">
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                        <ProductHeader
                            logo={result.logoUrl}
                            name={result.name}
                            rating={result?.feedback?.rating || 0}
                            tagline={result.tagline}
                        />
                        <div className="flex-shrink-0 sm:ml-auto">
                            <ProductDetailActions
                                websiteUrl={result.websiteUrl}
                                upvotes={result?.feedback?.upvotes || 0}
                                productId={result.cuid}
                            />
                        </div>
                    </div>

                    <ProductDetailsTabs
                        description={result.description}
                        images={result.images}
                        productId={result.cuid}
                    />
                </div>

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
