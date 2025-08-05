'use client';
import { API_ROUTES } from '@/app/constants/api';
import { PUBLIC_ENV } from '@/utils/env';
import { generateTokenHeaders } from '@/utils/localstorage';
import { postRequest } from '@/utils/request';
import { createSlug, sanitizeError } from '@/utils/utils';
import { useMutation } from '@tanstack/react-query';
import { TriangleAlert } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

export default function SubmitProductPage() {
    const router = useRouter();
    const [productDetails, setProductDetails] = useState({
        name: '',
        websiteUrl: '',
        tagline: '',
    });

    const saveProductMutation = useMutation({
        mutationFn: (payload: any) => {
            return postRequest(
                API_ROUTES.PRODUCTS,
                payload,
                generateTokenHeaders()
            );
        },
        onError: (error: any) => {
            toast.error(sanitizeError(error));
        },
        onSuccess: ({ data }) => {
            toast.success('Product added successfully!');
            router.push('/edit-product/' + data.result.cuid);
        },
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setProductDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        return saveProductMutation.mutate(productDetails);
    };

    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Submit Your Product
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    Get your product in front of more people! Add it to our
                    platform and boost your visibility, reach, and credibility,
                    all in just a few clicks.
                    <span role="img" aria-label="smiling face with sunglasses">
                        🌟
                    </span>
                </p>

                {/* Alert Box */}
                <div className="bg-gray-100 border border-gray-300 text-gray-800 p-4 rounded-lg flex items-start space-x-3 mb-10">
                    <TriangleAlert className="h-6 w-6 flex-shrink-0 mt-0.5" />
                    <div>
                        <h3 className="font-semibold text-lg mb-1">
                            The waiting line is temporarily closed
                        </h3>
                        <p className="text-base mb-3">
                            The free waiting line is closed until October 1st.
                            You can still publish your product the day of your
                            choice by skipping the waiting line.
                        </p>
                        <button className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-4 rounded-md text-sm">
                            More info
                        </button>
                    </div>
                </div>

                {/* Form */}
                <form className="space-y-6" onSubmit={handleFormSubmit}>
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-lg font-medium text-gray-700 mb-2"
                        >
                            Your product name*
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={productDetails.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your product name"
                            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-gray-700 focus:border-gray-700 sm:text-base placeholder-gray-400"
                        />
                        <p className="mt-2 text-sm text-gray-500">
                            {PUBLIC_ENV.APP_URL}/tools/
                            {createSlug(productDetails.name)}
                        </p>
                    </div>

                    <div>
                        <label
                            htmlFor="tagline"
                            className="block text-lg font-medium text-gray-700 mb-2"
                        >
                            Your product tagline*
                        </label>
                        <input
                            type="text"
                            id="tagline"
                            name="tagline"
                            value={productDetails.tagline}
                            onChange={handleInputChange}
                            required
                            placeholder="Describe your product in a few words"
                            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-gray-700 focus:border-gray-700 sm:text-base placeholder-gray-400"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="websiteUrl"
                            className="block text-lg font-medium text-gray-700 mb-2"
                        >
                            Product website link*
                        </label>
                        <input
                            type="url"
                            id="websiteUrl"
                            name="websiteUrl"
                            value={productDetails.websiteUrl}
                            onChange={handleInputChange}
                            required
                            placeholder="https://www.your-product.com"
                            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-gray-700 focus:border-gray-700 sm:text-base placeholder-gray-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-auto cursor-pointer bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-gray-950 text-white font-semibold py-3 px-6 rounded-md shadow-md text-lg"
                    >
                        Submit your Product
                    </button>
                </form>
            </div>
        </div>
    );
}
