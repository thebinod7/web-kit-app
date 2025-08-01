'use client';

import { useState } from 'react';
import {
    MonitorPlay,
    TriangleAlert,
    Eye,
    ImageIcon,
    MessageSquare,
    Tag,
    ArrowUpRight,
} from 'lucide-react';

export default function ProductDashboardPage() {
    const [activeTab, setActiveTab] = useState('general');

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="mx-auto max-w-7xl">
                {/* Submit to Directories Section */}
                <div className="mb-6 flex flex-col items-start justify-between rounded-lg bg-white p-6 shadow-sm md:flex-row md:items-center">
                    <div className="flex items-center gap-4">
                        <MonitorPlay className="h-8 w-8 text-gray-600" />
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">
                                Submit your product to 100+ directories
                            </h2>
                            <p className="text-sm text-gray-500">
                                We manually submit your product to 100+
                                directories with Uneed Directories.
                            </p>
                        </div>
                    </div>
                    <button className="mt-4 flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 md:mt-0">
                        Submit to 100+ directories
                        <ArrowUpRight className="h-4 w-4" />
                    </button>
                </div>

                {/* Waiting Line Alert */}
                <div className="mb-6 flex items-start gap-4 rounded-lg bg-orange-50 p-6 text-orange-800 shadow-sm">
                    <TriangleAlert className="h-6 w-6 flex-shrink-0" />
                    <div>
                        <h2 className="text-lg font-semibold">
                            The waiting line is temporarily closed
                        </h2>
                        <p className="mt-1 text-sm">
                            The free waiting line is closed until October 1st.
                            You can still publish your product the day of your
                            choice by skipping the waiting line.
                        </p>
                        <button className="mt-4 rounded-md bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-800 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                            More info
                        </button>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {/* Left Column: Launch Scheduled */}
                    <div className="rounded-lg bg-white p-6 shadow-sm md:col-span-1">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Launch Scheduled{' '}
                            <span role="img" aria-label="party popper">
                                🎉
                            </span>
                        </h2>
                        <p className="mt-2 text-sm text-gray-500">
                            Your product is scheduled to launch on November 27,
                            2025. However, you can skip the waiting line and
                            choose a date of your choice.
                        </p>
                        <button className="mt-6 w-full rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                            Skip the waiting line
                        </button>
                        <button className="mt-3 w-full rounded-md border border-red-300 px-4 py-2 text-sm font-medium text-red-600 shadow-sm hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                            Unschedule
                        </button>
                    </div>

                    {/* Right Column: Tabs and Form */}
                    <div className="md:col-span-2">
                        {/* Tabs */}
                        <div className="mb-6 flex flex-wrap rounded-lg bg-gray-100 p-1 shadow-sm">
                            <button
                                className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                                    activeTab === 'general'
                                        ? 'bg-black text-white shadow-sm'
                                        : 'text-gray-700 hover:bg-gray-200'
                                } flex items-center justify-center gap-2`}
                                onClick={() => setActiveTab('general')}
                            >
                                <Eye className="h-4 w-4" /> General
                            </button>
                            <button
                                className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                                    activeTab === 'media'
                                        ? 'bg-black text-white shadow-sm'
                                        : 'text-gray-700 hover:bg-gray-200'
                                } flex items-center justify-center gap-2`}
                                onClick={() => setActiveTab('media')}
                            >
                                <ImageIcon className="h-4 w-4" /> Media
                            </button>
                            <button
                                className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                                    activeTab === 'socials'
                                        ? 'bg-black text-white shadow-sm'
                                        : 'text-gray-700 hover:bg-gray-200'
                                } flex items-center justify-center gap-2`}
                                onClick={() => setActiveTab('socials')}
                            >
                                <MessageSquare className="h-4 w-4" /> Socials
                            </button>
                            <button
                                className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                                    activeTab === 'sell'
                                        ? 'bg-black text-white shadow-sm'
                                        : 'text-gray-700 hover:bg-gray-200'
                                } flex items-center justify-center gap-2`}
                                onClick={() => setActiveTab('sell')}
                            >
                                <Tag className="h-4 w-4" /> Sell
                            </button>
                        </div>

                        {/* Tab Content */}
                        <div className="rounded-lg bg-white p-6 shadow-sm">
                            {activeTab === 'general' && (
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="mb-1 block text-sm font-medium text-gray-700"
                                        >
                                            Name{' '}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-900 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                                            defaultValue="invomaker"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="slug"
                                            className="mb-1 block text-sm font-medium text-gray-700"
                                        >
                                            Slug{' '}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <div className="flex rounded-md shadow-sm">
                                            <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-100 px-3 text-gray-500 sm:text-sm">
                                                uneed.best/tool/
                                            </span>
                                            <input
                                                type="text"
                                                id="slug"
                                                className="block w-full flex-1 rounded-r-md border border-gray-300 bg-gray-50 p-2 text-gray-900 focus:border-black focus:ring-black sm:text-sm"
                                                defaultValue="invomaker"
                                            />
                                        </div>
                                    </div>
                                    <div className="md:col-span-2">
                                        <label
                                            htmlFor="url"
                                            className="mb-1 block text-sm font-medium text-gray-700"
                                        >
                                            Url{' '}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="url"
                                            id="url"
                                            className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-900 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                                            defaultValue="https://www.invomaker.com/"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="category"
                                            className="mb-1 block text-sm font-medium text-gray-700"
                                        >
                                            Category{' '}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <select
                                            id="category"
                                            className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-900 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                                            defaultValue="Business"
                                        >
                                            <option>Business</option>
                                            <option>Productivity</option>
                                            <option>Finance</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="pricing"
                                            className="mb-1 block text-sm font-medium text-gray-700"
                                        >
                                            Pricing{' '}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            id="pricing"
                                            className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-900 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label
                                            htmlFor="tags"
                                            className="mb-1 block text-sm font-medium text-gray-700"
                                        >
                                            Tags{' '}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            id="tags"
                                            className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-gray-900 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                                            defaultValue="Invoicing,Freelance,Personal Finances"
                                        />
                                    </div>
                                </div>
                            )}
                            {activeTab === 'media' && (
                                <div className="text-center text-gray-500">
                                    Media content goes here.
                                </div>
                            )}
                            {activeTab === 'socials' && (
                                <div className="text-center text-gray-500">
                                    Socials content goes here.
                                </div>
                            )}
                            {activeTab === 'sell' && (
                                <div className="text-center text-gray-500">
                                    Sell content goes here.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
