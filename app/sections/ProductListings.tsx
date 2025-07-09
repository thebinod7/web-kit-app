import { ChevronRight, ExternalLink, Filter, Star } from 'lucide-react';
import React from 'react';

export default function ProductListings() {
    return (
        <section id="apps" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                            All Products
                        </h2>
                        <p className="text-lg text-gray-600">
                            Explore our complete collection of indie products
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-6 lg:mt-0">
                        <div className="relative">
                            <search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none w-full sm:w-64"
                            />
                        </div>
                        <button className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors bg-white">
                            <Filter className="w-5 h-5 text-gray-500" />
                            <span className="text-gray-700">Filter</span>
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {[
                        {
                            name: 'MindMap Studio',
                            category: 'Design',
                            users: '5k+',
                            rating: 4.6,
                            image: '/images/app.jpg',
                            description:
                                'Create stunning mind maps effortlessly',
                        },
                        {
                            name: 'CodeSnippet Pro',
                            category: 'Developer',
                            users: '18k+',
                            rating: 4.9,
                            image: '/images/app.jpg',
                            description:
                                'Organize and share your code snippets',
                        },
                        {
                            name: 'SocialBoost',
                            category: 'Marketing',
                            users: '7k+',
                            rating: 4.5,
                            image: '/images/app.jpg',
                            description: 'Boost your social media presence',
                        },
                        {
                            name: 'InvoiceEasy',
                            category: 'Finance',
                            users: '12k+',
                            rating: 4.8,
                            image: '/images/app.jpg',
                            description: 'Create and manage invoices with ease',
                        },
                        {
                            name: 'BlogCraft',
                            category: 'Content',
                            users: '9k+',
                            rating: 4.7,
                            image: '/images/app.jpg',
                            description: 'Craft beautiful blogs in minutes',
                        },
                        {
                            name: 'TeamSync',
                            category: 'Productivity',
                            users: '14k+',
                            rating: 4.6,
                            image: '/images/app.jpg',
                            description: 'Sync your team’s tasks and projects',
                        },
                        {
                            name: 'PixelPerfect',
                            category: 'Design',
                            users: '6k+',
                            rating: 4.8,
                            image: '/images/app.jpg',
                            description: 'Design pixel-perfect graphics easily',
                        },
                        {
                            name: 'DataViz Pro',
                            category: 'Analytics',
                            users: '11k+',
                            rating: 4.9,
                            image: '/images/app.jpg',
                            description:
                                'Visualize your data like never before',
                        },
                    ].map((app, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
                        >
                            <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
                                <img
                                    src={app.image || '/placeholder.svg'}
                                    alt={app.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                                    {app.category}
                                </span>
                                <div className="flex items-center space-x-1 text-sm text-gray-500">
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    <span>{app.rating}</span>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {app.name}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                {app.description}
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500">
                                    {app.users} users
                                </span>
                                <button className="text-blue-600 hover:text-blue-700 flex items-center space-x-1 text-sm font-medium">
                                    <span>View Details</span>
                                    <ExternalLink className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-gray-400 transition-colors flex items-center space-x-2 mx-auto">
                        <span>See More Products</span>
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}
