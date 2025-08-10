'use client';
import { API_ROUTES, APP_PATHS } from '@/app/constants/api';
import {
    clearLocalStorage,
    generateCookieHeaders,
    LOCAL_KEYS,
} from '@/utils/localstorage';
import { putRequest } from '@/utils/request';
import { useMutation } from '@tanstack/react-query';
import { getCookie } from 'cookies-next/client';
import { ArrowUp, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'sonner';

interface ProductActionsProps {
    upvotes: number;
    websiteUrl: string;
    productId: string;
}

export default function ProductDetailActions({
    upvotes,
    websiteUrl,
    productId,
}: ProductActionsProps) {
    const [upvoteCount, setUpvoteCount] = useState(upvotes);
    const accessToken = getCookie(LOCAL_KEYS.ACCESS_TOKEN);

    const toggleUpvoteMutation = useMutation({
        mutationFn: (payload: any) => {
            return putRequest(
                API_ROUTES.PRODUCT_FEEDBACK + '/toggle-vote',
                payload,
                generateCookieHeaders()
            );
        },
        onError: (err) => {
            toast.error('Something went wrong! Please try again.');
        },
        onSuccess: ({ data }) => {
            const { result } = data;
            setUpvoteCount(result?.upvoted ? upvoteCount + 1 : upvoteCount - 1);
            const flag = result?.upvoted ? 'Upvoted' : ' Downvoted';
            toast.success(`${flag} the product!`, {
                icon: result?.upvoted ? '👍' : '👎',
            });
        },
    });

    const toggleUpvote = () => {
        if (!accessToken) return gotoLogin();
        return toggleUpvoteMutation.mutate({
            productId: productId,
        });
    };

    const gotoLogin = () => {
        clearLocalStorage();
        const redirectUrl = window.location.href;
        window.location.href = APP_PATHS.LOGIN + `?redirectUrl=${redirectUrl}`;
    };

    return (
        <div className="flex flex-col gap-2 w-full sm:w-auto">
            <Link
                target="_blank"
                rel="noopener noreferrer"
                href={websiteUrl}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
                   border border-orange-300 bg-white text-orange-700 hover:bg-orange-50 h-10 px-4 py-2 gap-2"
            >
                Visit website
                <ExternalLink className="h-4 w-4" />
            </Link>
            <button
                onClick={toggleUpvote}
                className="inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
                   border border-orange-300 bg-white text-orange-700 hover:bg-orange-50 h-10 px-4 py-2 gap-2"
            >
                <ArrowUp className="h-4 w-4" />
                {upvoteCount} Upvotes
            </button>
        </div>
    );
}
