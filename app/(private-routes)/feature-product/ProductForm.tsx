'use client';

import { API_ROUTES } from '@/app/constants/api';
import { CATEGORY_LIST_LIMIT } from '@/app/constants/constants';
import DropzoneUploader from '@/components/DropzoneUploader';
import { useFetchAllCategory } from '@/hooks/api/app';
import { useProductStore } from '@/store/store.product';
import { IProductPrimaryDetails } from '@/types/product';
import { generateCookieHeaders } from '@/utils/localstorage';
import { postRequest } from '@/utils/request';
import { sanitizeError } from '@/utils/utils';
import { useMutation } from '@tanstack/react-query';
import { FileText, Globe, ImageIcon, Tag, Type } from 'lucide-react';
import type React from 'react';
import { useCallback, useState } from 'react';
import { toast } from 'sonner';

export function ProductForm() {
    const { all_categories } = useFetchAllCategory({
        perPage: CATEGORY_LIST_LIMIT,
    });

    const { productPrimaryDetails, setProductPrimaryDetails } = useProductStore(
        (state) => state
    );

    const [logoUploadError, setLogoUploadError] = useState([]);

    const uploadLogoMutation = useMutation({
        mutationFn: (payload: any) => {
            return postRequest(
                API_ROUTES.APP + '/upload-single',
                payload,
                generateCookieHeaders()
            );
        },
        onError: (error) => {
            toast.error(sanitizeError(error));
        },
        onSuccess: (data) => {
            const result: any = data?.data?.result;
            setProductPrimaryDetails({
                ...productPrimaryDetails,
                logoUrl: result.Location,
                name: productPrimaryDetails?.name || '',
                tagline: productPrimaryDetails?.tagline || '',
                websiteUrl: productPrimaryDetails?.websiteUrl || '',
                categoryId: productPrimaryDetails?.categoryId || '',
                description: productPrimaryDetails?.description || '',
            });
        },
    });

    const clearLogoPreview = () => {
        setProductPrimaryDetails({
            ...productPrimaryDetails,
            logoUrl: '',
            name: productPrimaryDetails?.name || '',
            tagline: productPrimaryDetails?.tagline || '',
            websiteUrl: productPrimaryDetails?.websiteUrl || '',
            categoryId: productPrimaryDetails?.categoryId || '',
            description: productPrimaryDetails?.description || '',
        });
    };

    const handleLogoUpload = useCallback(
        (acceptedFiles: any, fileRejection: any) => {
            if (fileRejection.length) return setLogoUploadError(fileRejection);

            setLogoUploadError([]);
            const file = acceptedFiles[0];
            const formData: any = new FormData();
            formData.append('file', file);
            return uploadLogoMutation.mutate(formData);
        },
        []
    );

    const handleInputChange = (field: string, value: string) => {
        const updatedDetails = {
            ...productPrimaryDetails,
            [field]: value,
        } as IProductPrimaryDetails;
        setProductPrimaryDetails(updatedDetails);
    };

    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
            <form className="space-y-6">
                {/* Logo Upload */}
                <div className="space-y-2">
                    <label
                        htmlFor="logo"
                        className="text-sm font-medium text-gray-900 flex items-center gap-2"
                    >
                        <ImageIcon className="w-4 h-4 text-gray-500" />
                        Product Logo{' '}
                        <span className="text-xs">
                            Square logo is recommended.
                        </span>
                    </label>
                    <div className="flex items-center gap-4">
                        <div className="flex-1">
                            <DropzoneUploader
                                clearPreview={clearLogoPreview}
                                onFileUplad={handleLogoUpload}
                                label="Drag 'n' drop an image, or click to select"
                                maxFiles={1}
                                uploadError={logoUploadError}
                                isUploadig={uploadLogoMutation.isPending}
                                previewUrl={productPrimaryDetails?.logoUrl}
                            />
                        </div>
                    </div>
                </div>
                {/* Product Name */}
                <div className="space-y-2">
                    <label
                        htmlFor="name"
                        className="text-sm font-medium text-gray-900 flex items-center gap-2"
                    >
                        <Type className="w-4 h-4 text-gray-500" />
                        Product Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Enter your product name"
                        value={productPrimaryDetails?.name}
                        onChange={(e) =>
                            handleInputChange('name', e.target.value)
                        }
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-black focus:ring-black"
                        required
                    />
                </div>

                {/* Website URL and Category Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label
                            htmlFor="websiteUrl"
                            className="text-sm font-medium text-gray-900 flex items-center gap-2"
                        >
                            <Globe className="w-4 h-4 text-gray-500" />
                            Website URL
                        </label>
                        <input
                            id="websiteUrl"
                            type="url"
                            placeholder="https://yourproduct.com"
                            value={productPrimaryDetails?.websiteUrl}
                            onChange={(e) =>
                                handleInputChange('websiteUrl', e.target.value)
                            }
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-black focus:ring-black"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label
                            htmlFor="category"
                            className="text-sm font-medium text-gray-900 flex items-center gap-2"
                        >
                            <Tag className="w-4 h-4 text-gray-500" />
                            Category
                        </label>
                        <select
                            id="categoryId"
                            value={productPrimaryDetails?.categoryId}
                            onChange={(e) =>
                                handleInputChange('categoryId', e.target.value)
                            }
                            className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-gray-900 shadow-sm focus:border-black focus:ring-black"
                            required
                        >
                            <option value="">Select a category</option>
                            {all_categories.map((c) => (
                                <option key={c.cuid} value={c.cuid}>
                                    {c.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Tagline */}
                <div className="space-y-2">
                    <label
                        htmlFor="tagline"
                        className="text-sm font-medium text-gray-900 flex items-center gap-2"
                    >
                        <FileText className="w-4 h-4 text-gray-500" />
                        Tagline
                    </label>
                    <input
                        id="tagline"
                        type="text"
                        placeholder="A brief, catchy description of your product"
                        value={productPrimaryDetails?.tagline}
                        onChange={(e) =>
                            handleInputChange('tagline', e.target.value)
                        }
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-black focus:ring-black"
                        maxLength={100}
                        required
                    />
                    <p className="text-xs text-gray-500">
                        {productPrimaryDetails?.tagline.length}/100 characters
                    </p>
                </div>

                {/* Description */}
                <div className="space-y-2">
                    <label
                        htmlFor="description"
                        className="text-sm font-medium text-gray-900 flex items-center gap-2"
                    >
                        <FileText className="w-4 h-4 text-gray-500" />
                        Description
                    </label>
                    <textarea
                        rows={4}
                        id="description"
                        placeholder="Tell us more about your product. What problem does it solve? What makes it special?"
                        value={productPrimaryDetails?.description}
                        onChange={(e) =>
                            handleInputChange('description', e.target.value)
                        }
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-black focus:ring-black"
                        maxLength={500}
                        required
                    />
                    <p className="text-xs text-gray-500">
                        {productPrimaryDetails?.description.length}/500
                        characters
                    </p>
                </div>
            </form>
        </div>
    );
}
