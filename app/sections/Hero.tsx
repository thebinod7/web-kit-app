import { ArrowRight, Leaf } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { APP_PATHS } from '../constants/api';
import { ICONS } from '../constants/images';

export default function Hero({
    totalUsers,
    userProfiles,
}: {
    totalUsers: number;
    userProfiles: any[];
}) {
    return (
        <section className="relative overflow-hidden bg-white py-20 lg:py-32">
            <Leaf
                className="absolute top-1/4 left-15 -translate-x-1/2 text-gray-300 opacity-70 hidden md:block"
                size={200}
                strokeWidth={1}
            />
            <Leaf
                className="absolute top-1/4 right-16 translate-x-1/2 text-gray-300 opacity-70 hidden md:block rotate-250" // Rotate for variety
                size={200}
                strokeWidth={1}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    {/* Trusted by section */}
                    {userProfiles.length > 0 && (
                        <div className="mb-8">
                            <p className="text-sm text-gray-600 mb-2">
                                Trusted by{' '}
                                <span className="font-bold">{totalUsers}</span>{' '}
                                founders
                            </p>
                            <div className="flex justify-center -space-x-2 overflow-hidden">
                                {userProfiles.map((profile) => {
                                    return (
                                        <Image
                                            key={profile.cuid}
                                            src={
                                                profile.profilePicture ||
                                                ICONS.USER
                                            }
                                            referrerPolicy="no-referrer"
                                            alt="Founder avatar"
                                            width={32}
                                            height={32}
                                            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                                        />
                                    );
                                })}

                                <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-900 text-white text-xs font-medium ring-2 ring-white">
                                    +{totalUsers - userProfiles.length}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            Free & No Signup
                        </span>
                        <span className="block mt-1 text-5xl sm:text-6xl lg:text-7xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 bg-clip-text text-transparent animate-pulse">
                            Resume Generator
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Create a professional resume in minutes. No account
                        needed, no hidden fees. Just fill in your information
                        and download your polished resume instantly.
                    </p>

                    {/* Call to Action Button */}
                    <div className="flex justify-center">
                        <Link
                            href={APP_PATHS.GENERATE_RESUME}
                            className="inline-flex items-center space-x-2 bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all transform hover:scale-105"
                        >
                            <span>Create Resume</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    <p className="mt-6 text-sm text-slate-500">
                        Takes less than 15 minutes • No signup required •
                        Privacy guaranteed
                    </p>
                </div>
            </div>
        </section>
    );
}
