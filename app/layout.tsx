import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Providers from './Providers';
import { Suspense } from 'react';
import { APP_DESCRIPTION, APP_TITLE } from './constants/constants';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: `${APP_TITLE} - Home`,
    description: APP_DESCRIPTION,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Providers>
                    <Suspense fallback={<div>Loading...</div>}>
                        {children}
                    </Suspense>
                </Providers>
            </body>
        </html>
    );
}
