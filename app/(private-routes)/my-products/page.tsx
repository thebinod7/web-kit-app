import { IMAGE_URLS } from '@/app/constants/images';
import Image from 'next/image';
import Link from 'next/link';

// Define a type for app data
interface App {
    id: string;
    name: string;
    imageUrl: string; // Main app icon/screenshot
    status: 'Available' | 'Coming Soon' | 'Maintenance';
}

// Sample app data
const apps: App[] = [
    {
        id: '1',
        name: 'TaskFlow Pro - Project Management',
        imageUrl: IMAGE_URLS.APP_DP,
        status: 'Available',
    },
    {
        id: '2',
        name: 'CodeBuddy - AI Coding Assistant',
        imageUrl: IMAGE_URLS.APP_DP,
        status: 'Coming Soon',
    },
    {
        id: '3',
        name: 'PixelPerfect - Image Editor',
        imageUrl: IMAGE_URLS.APP_DP,
        status: 'Maintenance',
    },
    {
        id: '4',
        name: 'FinanceTrack - Personal Budgeting',
        imageUrl: IMAGE_URLS.APP_DP,
        status: 'Available',
    },
];

export default function AppsPage() {
    return (
        <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">
                    Your Products
                </h1>
                <Link
                    href={'/submit-product'}
                    className="inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm font-medium
                           ring-offset-background focus-visible:outline-none focus-visible:ring-2
                           focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none
                           disabled:opacity-50 bg-gray-900 text-gray-50 hover:bg-gray-900/90 h-10 px-4 py-2
                           shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                    Submit New Product
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {apps.map((app) => (
                    <div
                        key={app.id}
                        className="bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden flex flex-col
                       transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                    >
                        {/* App Image (Main Screenshot/Hero) */}
                        <div className="relative w-full h-40 sm:h-48 bg-gray-50 flex items-center justify-center overflow-hidden">
                            <Image
                                src={app.imageUrl || '/placeholder.svg'}
                                alt={`Screenshot of ${app.name}`}
                                width={300}
                                height={300}
                                className="object-cover w-full h-full"
                                priority // Prioritize loading for initial apps
                            />
                        </div>
                        {/* App Details */}
                        <div className="p-5 flex-grow flex flex-col justify-between">
                            <h2 className="text-xl font-semibold mb-4 text-gray-900 line-clamp-2">
                                {app.name}
                            </h2>
                            {/* App Status */}
                            <div className="flex justify-end">
                                <span
                                    className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-sm font-medium ${
                                        app.status === 'Available'
                                            ? 'bg-green-50 text-green-700 border border-green-100'
                                            : app.status === 'Coming Soon'
                                            ? 'bg-yellow-50 text-yellow-700 border border-yellow-100'
                                            : 'bg-red-50 text-red-700 border border-red-100'
                                    }`}
                                >
                                    {app.status}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
