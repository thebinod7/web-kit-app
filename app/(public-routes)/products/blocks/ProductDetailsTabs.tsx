'use client';
import { API_ROUTES, APP_PATHS } from '@/app/constants/api';
import { PRODUCT_DETAIL_SECTIONS } from '@/app/constants/constants';
import { RatingInput } from '@/components/mini/RatingInput';
import {
    clearLocalStorage,
    generateCookieHeaders,
    LOCAL_KEYS,
} from '@/utils/localstorage';
import { putRequest } from '@/utils/request';
import { useMutation } from '@tanstack/react-query';
import { getCookie } from 'cookies-next/client';
import { Eye, StarIcon } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import ProductOverview from './ProductOverview';
import AlertBox from '@/components/mini/AlertBox';

const tabs = [
    { icon: Eye, label: PRODUCT_DETAIL_SECTIONS.OVERVIEW },
    { icon: StarIcon, label: PRODUCT_DETAIL_SECTIONS.RATING },
];

export default function ProductDetailsTabs({
    description,
    images,
    productId,
}: {
    description: string;
    images: string[];
    productId: string;
}) {
    const accessToken = getCookie(LOCAL_KEYS.ACCESS_TOKEN);

    const [activeTab, setActiveTab] = useState(
        PRODUCT_DETAIL_SECTIONS.OVERVIEW
    );
    const [currentRating, setCurrentRating] = useState(0);
    const [ratingSubmitted, setRatingSubmitted] = useState(false);

    const upsertRatingMutation = useMutation({
        mutationFn: (payload: any) => {
            return putRequest(
                API_ROUTES.PRODUCT_FEEDBACK + '/rating',
                payload,
                generateCookieHeaders()
            );
        },
        onError: (err) => {
            toast.error('Something went wrong! Please try again.');
        },
        onSuccess: () => {
            setRatingSubmitted(true);
        },
    });

    const handleRatingSubmit = () => {
        if (!accessToken) return gotoLogin();
        if (currentRating < 1) return toast.error('Please select a rating!');
        return upsertRatingMutation.mutate({
            productId,
            rating: currentRating,
        });
    };

    const gotoLogin = () => {
        clearLocalStorage();
        const redirectUrl = window.location.href;
        window.location.href = APP_PATHS.LOGIN + `?redirectUrl=${redirectUrl}`;
    };

    return (
        <>
            <nav className="border-b border-gray-200">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500">
                    {tabs.map((tab) => (
                        <li key={tab.label} className="mr-2">
                            <button
                                onClick={() => setActiveTab(tab.label)}
                                className={`inline-flex cursor-pointer items-center justify-center p-4 border-b-2 rounded-t-lg group
                ${
                    tab.label === activeTab
                        ? 'border-gray-900 text-gray-900'
                        : 'border-transparent hover:text-gray-600 hover:border-gray-300'
                }
                bg-transparent hover:bg-gray-100`}
                            >
                                <tab.icon className="w-4 h-4 mr-2" />
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="mt-6">
                {activeTab === PRODUCT_DETAIL_SECTIONS.OVERVIEW && (
                    <ProductOverview
                        description={description}
                        images={images}
                    />
                )}
                {activeTab === PRODUCT_DETAIL_SECTIONS.RATING && (
                    <div className="flex items-center justify-center p-4">
                        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
                            <div className="mb-6 text-center">
                                <h1 className="text-xl font-bold">
                                    Your opinion matters
                                </h1>
                                <p className="mt-2 text-gray-600">
                                    How was your experience with this product?
                                </p>
                            </div>
                            <div className="flex flex-col items-center gap-6 py-2 mb-6">
                                <RatingInput
                                    initialRating={currentRating}
                                    onRatingChange={setCurrentRating}
                                    className="cursor-pointer"
                                />
                                {currentRating > 0 && (
                                    <p className="text-sm text-gray-500">
                                        You have selected:{' '}
                                        <span className="font-semibold">
                                            {currentRating}
                                        </span>{' '}
                                        star(s)
                                    </p>
                                )}
                            </div>
                            {ratingSubmitted ? (
                                <AlertBox message="Your rating has been recorded and will be visible shortly." />
                            ) : (
                                <button
                                    type="button"
                                    disabled={upsertRatingMutation.isPending}
                                    onClick={handleRatingSubmit}
                                    className="w-full rounded-md border border-orange-300 bg-white text-orange-700 hover:bg-orange-50 h-10 px-4 py-2 gap-2 focus:outline-none cursor-pointer"
                                >
                                    {upsertRatingMutation.isPending
                                        ? 'Submitting...'
                                        : 'Submit Rating'}
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
