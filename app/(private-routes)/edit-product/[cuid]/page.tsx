'use client';

import { PRICING_TYPES, PRODUCT_TABS } from '@/app/constants/constants';
import { useGetProductDetailsQuery } from '@/hooks/api/product/hook.product';
import { IProduct } from '@/types/product';
import { PUBLIC_ENV } from '@/utils/env';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import LeftPanel from '../LeftPanel';
import SubmitToday from '../SubmitToday';
import ProductTabs from '@/components/ProductTabs';

export default function ProductDashboardPage() {
    const params = useParams();
    const cuid = params.cuid as string;

    const [productDetails, setProductDetails] = useState<IProduct>({
        name: '',
        slug: '',
        tagline: '',
        websiteUrl: '',
        description: '',
        logoUrl: '',
        videoUrl: '',
        reviewComment: '',
        pricingType: '',
        status: '',
        isFeatured: false,
        categoryId: '',
        submittedById: '',
        tags: [],
        keywords: [],
        images: [],
    });

    const { data: productResponse } = useGetProductDetailsQuery(cuid);
    const result = productResponse?.data?.result;

    const [activeTab, setActiveTab] = useState(PRODUCT_TABS.GENERAL);

    const handleInputChange = (
        event: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {};

    useEffect(() => {
        if (result) {
            const { details, ...rest } = result;
            setProductDetails(rest);
        }
    }, [result]);

    console.log('PRODUCT DETAILS', productDetails);

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="mx-auto max-w-7xl">
                <SubmitToday />

                {/* Main Content Area */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <LeftPanel />

                    {/* Right Column: Tabs and Form */}
                    <div className="md:col-span-2">
                        <ProductTabs
                            activeTab={activeTab}
                            setActiveTab={(tab) => setActiveTab(tab)}
                        />
                        {/* Tab Content */}
                        <div className="rounded-lg bg-white p-6 shadow-sm">
                            {activeTab === PRODUCT_TABS.GENERAL && (
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="mb-1 block text-sm font-medium text-gray-700"
                                        >
                                            Name{' '}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={productDetails.name}
                                            onChange={handleInputChange}
                                            className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-900 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="slug"
                                            className="mb-1 block text-sm font-medium text-gray-700"
                                        >
                                            Slug{' '}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <div className="flex rounded-md shadow-sm">
                                            <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-100 px-3 text-gray-500 sm:text-sm">
                                                {PUBLIC_ENV.APP_URL}/tools/
                                            </span>
                                            <input
                                                type="text"
                                                id="slug"
                                                className="block w-full flex-1 rounded-r-md border border-gray-300 bg-gray-50 p-2 text-gray-900 focus:border-black focus:ring-black sm:text-sm"
                                                defaultValue={
                                                    productDetails.slug
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="md:col-span-2">
                                        <label
                                            htmlFor="url"
                                            className="mb-1 block text-sm font-medium text-gray-700"
                                        >
                                            Url{' '}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="url"
                                            id="url"
                                            name="url"
                                            className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-900 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                                            value={productDetails.websiteUrl}
                                            onChange={handleInputChange}
                                            placeholder="https://www.your-product.com"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="category"
                                            className="mb-1 block text-sm font-medium text-gray-700"
                                        >
                                            Category{' '}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <select
                                            id="category"
                                            className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-900 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                                            defaultValue="Business"
                                        >
                                            <option>Business</option>
                                            <option>Productivity</option>
                                            <option>Finance</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="pricingType"
                                            className="mb-1 block text-sm font-medium text-gray-700"
                                        >
                                            Pricing{' '}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <select
                                            id="pricingType"
                                            name="pricingType"
                                            onChange={handleInputChange}
                                            value={productDetails.pricingType}
                                            className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-900 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                                        >
                                            <option
                                                value={
                                                    PRICING_TYPES.NOT_SPECIFIED
                                                }
                                            >
                                                {PRICING_TYPES.NOT_SPECIFIED}
                                            </option>
                                            <option>
                                                {PRICING_TYPES.FREE}
                                            </option>
                                            <option>
                                                {PRICING_TYPES.FREEMIUM}
                                            </option>
                                            <option>
                                                {PRICING_TYPES.PAID}
                                            </option>
                                            <option>
                                                {PRICING_TYPES.LIFETIME}
                                            </option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-2">
                                        <label
                                            htmlFor="tags"
                                            className="mb-1 block text-sm font-medium text-gray-700"
                                        >
                                            Tags
                                        </label>
                                        <input
                                            type="text"
                                            name="tags"
                                            id="tags"
                                            className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-900 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                                            value={productDetails.tags}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            )}
                            {activeTab === PRODUCT_TABS.MEDIA && (
                                <div className="text-center text-gray-500">
                                    Media content goes here.
                                </div>
                            )}
                            {activeTab === PRODUCT_TABS.SOCIALS && (
                                <div className="text-center text-gray-500">
                                    Socials content goes here.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
