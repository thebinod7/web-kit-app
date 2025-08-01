'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import AppWrapper from './AppWrapper';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { PUBLIC_ENV } from '@/utils/env';

const Providers = ({ children }: { readonly children: React.ReactNode }) => {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <GoogleOAuthProvider
            clientId={PUBLIC_ENV.GOOGLE_OAUTH_WEB_CLIENT_ID as string}
        >
            <QueryClientProvider client={queryClient}>
                <AppWrapper>{children}</AppWrapper>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </GoogleOAuthProvider>
    );
};

export default Providers;
