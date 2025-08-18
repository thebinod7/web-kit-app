'use client';
import { API_ROUTES } from '@/app/constants/api';
import { PUBLIC_ENV } from '@/utils/env';
import { generateCookieHeaders } from '@/utils/localstorage';
import { postRequest } from '@/utils/request';
import { createSlug, sanitizeError } from '@/utils/utils';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import FomoAlertBox from './FomoAlertBox';

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
                generateCookieHeaders()
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
                    To maintain the quality and credibility of our platform,
                    every product is carefully reviewed by our team before going
                    live. Providing accurate, and complete details will help us
                    approve your submission faster.
                    <span role="img" aria-label="smiling face with sunglasses">
                        🌟
                    </span>
                </p>

                <FomoAlertBox />

                {/* Form */}
                <form className="space-y-6" onSubmit={handleFormSubmit}>
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-lg font-medium text-gray-900 mb-2"
                        >
                            Your product name {}
                            <span className="text-red-500 font-bold">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={productDetails.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your product name"
                            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm 
             focus:ring-gray-700 focus:border-gray-700 sm:text-base 
             placeholder-gray-400 
             bg-white text-gray-900 
             dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                        />
                        <p className="mt-2 text-sm text-gray-500">
                            {PUBLIC_ENV.APP_URL}/products/
                            {createSlug(productDetails.name)}
                        </p>
                    </div>

                    <div>
                        <label
                            htmlFor="tagline"
                            className="block text-lg font-medium text-gray-900 mb-2"
                        >
                            Your product tagline {}
                            <span className="text-red-500 font-bold">*</span>
                        </label>
                        <input
                            type="text"
                            id="tagline"
                            name="tagline"
                            value={productDetails.tagline}
                            onChange={handleInputChange}
                            required
                            placeholder="Describe your product in a few words"
                            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm 
             focus:ring-gray-700 focus:border-gray-700 sm:text-base 
             placeholder-gray-400 
             bg-white text-gray-900 
             dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="websiteUrl"
                            className="block text-lg font-medium text-gray-900 mb-2"
                        >
                            Product website link{' '}
                            <span className="text-red-500 font-bold">*</span>
                        </label>
                        <input
                            type="url"
                            id="websiteUrl"
                            name="websiteUrl"
                            value={productDetails.websiteUrl}
                            onChange={handleInputChange}
                            required
                            placeholder="https://www.your-product.com"
                            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm 
             focus:ring-gray-700 focus:border-gray-700 sm:text-base 
             placeholder-gray-400 
             bg-white text-gray-900 
             dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
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
