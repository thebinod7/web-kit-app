import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: false,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'apply-visa-assets.s3.eu-north-1.amazonaws.com',
            },
        ],
    },
};

export default nextConfig;
