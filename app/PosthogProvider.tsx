// app/providers.tsx
'use client';

import SuspendedPostHogPageView from '@/components/PosthogPageview';
import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { useEffect } from 'react';

const POSTHOG_API_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_API_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST;
const NEXT_PUBLIC_RUNNING_ENV =
    process.env.NEXT_PUBLIC_RUNNING_ENV || 'development';

const isProduction = NEXT_PUBLIC_RUNNING_ENV === 'production';

export function PostHogProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        console.log({ isProduction });
        if (isProduction) {
            posthog.init(POSTHOG_API_KEY!, {
                api_host: POSTHOG_API_HOST,
                capture_pageview: false, // Disable automatic pageview capture, as we capture manually
            });
        }
    }, []);

    return (
        <PHProvider client={posthog}>
            <SuspendedPostHogPageView />
            {children}
        </PHProvider>
    );
}
