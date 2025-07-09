import { ArrowRight, Calendar, Star, Users } from 'lucide-react';
import React from 'react';

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Discover & Promote
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            Indie Products
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        The ultimate platform for indie hackers and content
                        creators to showcase their websites, apps, and digital
                        products to a community that matters.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <button className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all transform hover:scale-105 flex items-center space-x-2">
                            <span>Submit Your Product</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 transition-colors">
                            Browse Products
                        </button>
                    </div>

                    <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4" />
                            <span>2,500+ Creators</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Star className="w-4 h-4" />
                            <span>1,200+ Products</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>Daily Updates</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
