import { APP_TITLE } from '@/app/constants/constants';
import { Search } from 'lucide-react';
import React from 'react';

export default function Header() {
    return (
        <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">
                                BFK
                            </span>
                        </div>
                        <span className="text-xl font-semibold text-gray-900">
                            {APP_TITLE}
                        </span>
                    </div>

                    {/* Search Bar - Hidden on mobile, shown on tablet+ */}
                    <div className="hidden md:flex flex-1 max-w-lg mx-8">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search products, categories, or creators..."
                                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white outline-none transition-all duration-200 text-sm"
                            />
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        {/* Mobile search button */}
                        <button className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors">
                            <Search className="w-5 h-5" />
                        </button>

                        <div className="hidden lg:flex items-center space-x-6">
                            <a
                                href="#featured"
                                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
                            >
                                Featured
                            </a>
                            <a
                                href="#apps"
                                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
                            >
                                Apps
                            </a>
                            <a
                                href="#blog"
                                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
                            >
                                Blog
                            </a>
                        </div>

                        <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                            Submit App
                        </button>
                    </div>
                </div>

                {/* Mobile Search Bar - Expandable */}
                <div className="md:hidden pb-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white outline-none transition-all duration-200 text-sm"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}
