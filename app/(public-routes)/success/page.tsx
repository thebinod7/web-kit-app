'use client';

import { APP_PATHS } from '@/app/constants/api';
import { ArrowRight, Home } from 'lucide-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ThankYouPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const name = searchParams.get('name');
        if (name) {
            setUserName(decodeURIComponent(name));
        }
    }, [searchParams]);

    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col items-center justify-center p-4">
            {/* Decorative Background Element */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-2xl mt-5">
                {/* Success Icon */}
                <div className="flex justify-center mb-8">
                    <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                        <svg
                            className="w-12 h-12 text-emerald-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                </div>

                {/* Main Message */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4 text-balance">
                        {userName
                            ? `Congratulations, ${userName}!`
                            : 'Congratulations!'}
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 mb-4 text-balance">
                        Your resume has been download successfully
                    </p>
                    <p className="text-base md:text-lg text-slate-500 text-balance">
                        Your professional resume is ready share with potential
                        employers.
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => router.push('/')}
                        className="flex cursor-pointer items-center justify-center gap-2 px-8 py-3 bg-white border-2 border-slate-200 text-slate-900 font-semibold rounded-lg hover:border-slate-300 hover:bg-slate-50 transition-colors"
                    >
                        <Home className="w-5 h-5" />
                        <span>Back to Home</span>
                    </button>

                    <button
                        onClick={() => router.push(APP_PATHS.GENERATE_RESUME)}
                        className="flex cursor-pointer items-center justify-center gap-2 px-8 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
                    >
                        <span>Build Another</span>
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>

                {/* Footer Message */}
                <div className="mt-16 text-center">
                    <p className="text-slate-600">
                        Need help?{' '}
                        <Link
                            href="/contact"
                            className="text-emerald-600 hover:text-emerald-700 font-semibold"
                        >
                            Contact our support team
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
