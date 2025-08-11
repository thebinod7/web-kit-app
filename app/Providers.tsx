'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import AppWrapper from './AppWrapper';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { PUBLIC_ENV } from '@/utils/env';

const GOOGLE_CLIENT_ID = PUBLIC_ENV.GOOGLE_OAUTH_WEB_CLIENT_ID!;
console.log('GOOGLE_CLIENT_ID===>', GOOGLE_CLIENT_ID);

const Providers = ({ children }: { readonly children: React.ReactNode }) => {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
            <QueryClientProvider client={queryClient}>
                <AppWrapper>{children}</AppWrapper>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </GoogleOAuthProvider>
    );
};

export default Providers;
