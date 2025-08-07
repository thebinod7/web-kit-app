import { ICONS } from '@/app/constants/images';
import { Eye, Facebook, MessageSquare, Youtube } from 'lucide-react';
import ProductDetailActions from '../blocks/ProductDetailActions';
import ProductDetailsSidebar from '../blocks/ProductDetailsSidebar';
import ProductDetailsTabs from '../blocks/ProductDetailsTabs';
import ProductHeader from '../blocks/ProductHeader';
import ProductOverview from '../blocks/ProductOverview';

interface ProductDetailsPageProps {
    logo: string;
    name: string;
    rating: number;
    shortDescription: string;
    upvotes: number;
    upvotedByAvatars: string[];
    tabs: { icon: React.ElementType; label: string; count?: number }[];
    longDescription: string;
    publisherLogo: string;
    publisherName: string;
    launchDate: string;
    category: string;
    pricing: string;
    socials: { icon: React.ElementType; url: string }[];
    forSale: string;
    tags: string[];
}

// Mock data for the product details
const productData: ProductDetailsPageProps = {
    logo: ICONS.BLANK_IMAGE,
    name: 'invomaker',
    rating: 5,
    shortDescription:
        'Create and download professional invoices for free with no signup required.',
    upvotes: 48,
    upvotedByAvatars: [ICONS.USER, ICONS.USER],
    tabs: [
        { icon: Eye, label: 'Overview' },
        { icon: MessageSquare, label: 'Comments', count: 4 },
    ],
    longDescription:
        'Easily create and customize professional invoices with our Free Invoice Generator. Whether you are a freelancer, small business owner, or entrepreneur, our tool helps you create accurate, professional invoices for free. Simply input your details, customize the invoice to fit your needs, and download it in PDF format, ready to send to your clients. No sign-up required.',
    publisherLogo: ICONS.USER,
    publisherName: 'invomaker',
    launchDate: '2025-11-27',
    category: 'Business',
    pricing: 'Free',
    socials: [
        { icon: Facebook, url: '#' },
        { icon: Youtube, url: '#' },
    ],
    forSale: 'No',
    tags: ['#Invoicing', '#Freelance', '#Personal Finances'],
};

export default function ProductDetailsPage() {
    return (
        <div className="bg-white mt-8 rounded-lg shadow-lg w-full max-w-6xl mx-auto overflow-hidden">
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Column (Main Content) */}
                <div className="md:col-span-2">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                        <ProductHeader
                            logo={productData.logo}
                            name={productData.name}
                            rating={productData.rating}
                            shortDescription={productData.shortDescription}
                            upvotedByAvatars={productData.upvotedByAvatars}
                        />
                        <div className="flex-shrink-0 sm:ml-auto">
                            <ProductDetailActions
                                upvotes={productData.upvotes}
                            />
                        </div>
                    </div>

                    <ProductDetailsTabs tabs={productData.tabs} />

                    <div className="mt-6">
                        <ProductOverview
                            description={productData.longDescription}
                        />
                    </div>
                </div>

                {/* Right Column (Sidebar) */}
                <div className="md:col-span-1">
                    <ProductDetailsSidebar
                        publisherLogo={productData.publisherLogo}
                        publisherName={productData.publisherName}
                        launchDate={productData.launchDate}
                        category={productData.category}
                        pricing={productData.pricing}
                        socials={productData.socials}
                        forSale={productData.forSale}
                        tags={productData.tags}
                    />
                </div>
            </div>
        </div>
    );
}
