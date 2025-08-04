'use client';

import { API_ROUTES } from '@/app/constants/api';
import { PRICING_TYPES, PRODUCT_TABS } from '@/app/constants/constants';
import ProductTabs from '@/components/ProductTabs';
import { useFetchAllCountries } from '@/hooks/api/app';
import { useGetProductDetailsQuery } from '@/hooks/api/product/hook.product';
import { IProduct } from '@/types/product';
import { generateTokenHeaders } from '@/utils/localstorage';
import { patchRequest, postRequest } from '@/utils/request';
import { formatEnum, sanitizeError } from '@/utils/utils';
import { useMutation } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'sonner';
import SidePanel from '../SidePanel';
import SubmitToday from '../SubmitToday';
import SocialDetailsForm from '../SocialDetailsForm';
import { useProductStore } from '@/store/store.product';
import DropzoneUploader from '@/components/DropzoneUploader';

export default function ProductDashboardPage() {
    const { all_categories } = useFetchAllCountries();
    const params = useParams();
    const cuid = params.cuid as string;

    const { productDetails, setProductDetails } = useProductStore(
        (state) => state
    );

    const [productBasicInfo, setProductBasicInfo] = useState<IProduct>({
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
    ) => {
        const { name } = event.target;
        let value: any = event.target.value;
        if (name === 'tags') {
            value = value.split(',') || [];
        }
        setProductBasicInfo((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const updateProductMutation = useMutation({
        mutationFn: (payload: any) => {
            return patchRequest(
                `${API_ROUTES.PRODUCTS}/${cuid}`,
                payload,
                generateTokenHeaders()
            );
        },
        onError: (error: any) => {
            toast.error(sanitizeError(error));
        },
        onSuccess: ({ data }) => {
            toast.success('Product updated successfully!');
        },
    });

    const handleUpdateClick = () => {
        if (
            !productBasicInfo.name ||
            !productBasicInfo.tagline ||
            !productBasicInfo.websiteUrl
        ) {
            return toast.error('Fields with * are required! Please fill them.');
        }
        productBasicInfo.details = productDetails || {};
        return updateProductMutation.mutate(productBasicInfo);
    };

    const uploadLogoMutation = useMutation({
        mutationFn: (payload: any) => {
            return postRequest(
                API_ROUTES.APP + '/upload-single',
                payload,
                generateTokenHeaders()
            );
        },
        onError: (error) => {
            toast.error(sanitizeError(error));
        },
        onSuccess: (data) => {
            const result: any = data?.data?.result;
            console.log('Result', result);
            // setPhotoUrl(result.Location);
            setProductBasicInfo({
                ...productBasicInfo,
                logoUrl: result.Location,
            });
        },
    });

    const uploadPhotoToS3 = async (file: File) => {
        const formData: any = new FormData();
        formData.append('file', file);
        return uploadLogoMutation.mutate(formData);
    };

    const handleLogoUpload = useCallback(
        (acceptedFiles: any, fileRejection: any) => {
            if (fileRejection.length) {
                console.log('ERROR', fileRejection);
            }
            // setPhotoErrors([]);
            const file = acceptedFiles[0];
            return uploadPhotoToS3(file);
        },
        []
    );

    useEffect(() => {
        if (result) {
            const { details, ...rest } = result;
            setProductBasicInfo(rest);
            setProductDetails(details);
        }
    }, [result]);

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="mx-auto max-w-7xl">
                <SubmitToday />

                {/* Main Content Area */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {/* Left Column: Tabs and Form */}
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
                                            <span className="text-red-500 font-bold text-xl">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={productBasicInfo.name}
                                            onChange={handleInputChange}
                                            className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-900 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="tagline"
                                            className="mb-1 block text-sm font-medium text-gray-700"
                                        >
                                            Tagline{' '}
                                            <span className="text-red-500 font-bold text-xl">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            id="tagline"
                                            name="tagline"
                                            value={productBasicInfo.tagline}
                                            onChange={handleInputChange}
                                            className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-900 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label
                                            htmlFor="websiteUrl"
                                            className="mb-1 block text-sm font-medium text-gray-700"
                                        >
                                            Website Link{' '}
                                            <span className="text-red-500 font-bold text-xl">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="websiteUrl"
                                            id="websiteUrl"
                                            name="websiteUrl"
                                            className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-900 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                                            value={productBasicInfo.websiteUrl}
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
                                        </label>
                                        <select
                                            id="categoryId"
                                            name="categoryId"
                                            className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-900 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                                            value={
                                                productBasicInfo?.categoryId ||
                                                ''
                                            }
                                            onChange={handleInputChange}
                                        >
                                            <option value="">--Select--</option>
                                            {all_categories.length > 0
                                                ? all_categories.map(
                                                      (category) => {
                                                          return (
                                                              <option
                                                                  key={
                                                                      category.cuid
                                                                  }
                                                                  value={
                                                                      category.cuid
                                                                  }
                                                              >
                                                                  {
                                                                      category.label
                                                                  }
                                                              </option>
                                                          );
                                                      }
                                                  )
                                                : ''}
                                        </select>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="pricingType"
                                            className="mb-1 block text-sm font-medium text-gray-700"
                                        >
                                            Pricing{' '}
                                        </label>
                                        <select
                                            id="pricingType"
                                            name="pricingType"
                                            onChange={handleInputChange}
                                            value={productBasicInfo.pricingType}
                                            className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-900 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                                        >
                                            <option
                                                value={
                                                    PRICING_TYPES.NOT_SPECIFIED
                                                }
                                            >
                                                {formatEnum(
                                                    PRICING_TYPES.NOT_SPECIFIED
                                                )}
                                            </option>
                                            <option value={PRICING_TYPES.FREE}>
                                                {formatEnum(PRICING_TYPES.FREE)}
                                            </option>
                                            <option
                                                value={PRICING_TYPES.FREEMIUM}
                                            >
                                                {formatEnum(
                                                    PRICING_TYPES.FREEMIUM
                                                )}
                                            </option>
                                            <option value={PRICING_TYPES.PAID}>
                                                {formatEnum(PRICING_TYPES.PAID)}
                                            </option>
                                            <option
                                                value={PRICING_TYPES.LIFETIME}
                                            >
                                                {formatEnum(
                                                    PRICING_TYPES.LIFETIME
                                                )}
                                            </option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-2">
                                        <label
                                            htmlFor="tags"
                                            className="mb-1 block text-sm font-medium text-gray-700"
                                        >
                                            Tags (Enter comma separated tags at
                                            max 5)
                                        </label>
                                        <input
                                            type="text"
                                            name="tags"
                                            id="tags"
                                            className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-900 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                                            value={
                                                productBasicInfo.tags?.join(
                                                    ','
                                                ) || ''
                                            }
                                            onChange={handleInputChange}
                                            placeholder="Eg: freelancing, business, content creation"
                                        />
                                    </div>

                                    <div className="md:col-span-2">
                                        <label
                                            htmlFor="description"
                                            className="mb-1 block text-sm font-medium text-gray-700"
                                        >
                                            Description
                                        </label>
                                        <textarea
                                            rows={4}
                                            name="description"
                                            id="description"
                                            className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-900 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                                            value={
                                                productBasicInfo.description ||
                                                ''
                                            }
                                            onChange={handleInputChange}
                                            placeholder="Describe your product in brief"
                                        />
                                    </div>
                                </div>
                            )}
                            {activeTab === PRODUCT_TABS.MEDIA && (
                                <div className="text-center text-gray-500">
                                    <DropzoneUploader
                                        onFileUplad={handleLogoUpload}
                                        label="Upload Photo*"
                                        maxFiles={1}
                                        isUploadig={
                                            uploadLogoMutation.isPending
                                        }
                                        previewFile={productBasicInfo.logoUrl}
                                    />
                                </div>
                            )}
                            {activeTab === PRODUCT_TABS.SOCIALS && (
                                <SocialDetailsForm />
                            )}
                        </div>
                    </div>

                    <SidePanel handleUpdateClick={handleUpdateClick} />
                </div>
            </div>
        </div>
    );
}
