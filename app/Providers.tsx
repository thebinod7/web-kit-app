'use client';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import AppWrapper from './AppWrapper';

const Providers = ({ children }: { readonly children: React.ReactNode }) => {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <GoogleOAuthProvider
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}
        >
            <QueryClientProvider client={queryClient}>
                <AppWrapper>{children}</AppWrapper>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </GoogleOAuthProvider>
    );
};

export default Providers;
