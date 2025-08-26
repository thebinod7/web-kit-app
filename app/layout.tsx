import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './Providers';
import { Suspense } from 'react';
import { APP_DESCRIPTION, APP_TITLE } from './constants/constants';
import { Loader2 } from 'lucide-react';

const myFont = Inter({
    subsets: ['latin'],
    weight: '400',
});

export const metadata: Metadata = {
    title: `${APP_TITLE} - Discover, Launch, and Dominate: The Product Discovery Platform.`,
    description: APP_DESCRIPTION,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${myFont.className} antialiased`}>
                <Providers>
                    <Suspense
                        fallback={
                            <div className="flex items-center justify-center p-4 min-h-screen">
                                <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
                                <span className="sr-only">Loading...</span>
                            </div>
                        }
                    >
                        {children}
                    </Suspense>
                </Providers>
            </body>
        </html>
    );
}
