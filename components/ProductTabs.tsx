import { PRODUCT_TABS } from '@/app/constants/constants';
import { Eye, ImageIcon, MessageSquare } from 'lucide-react';
import React from 'react';

interface ProductTabsProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export default function ProductTabs({
    activeTab,
    setActiveTab,
}: ProductTabsProps) {
    return (
        <div className="mb-6 flex flex-wrap rounded-lg bg-gray-100 p-1 shadow-sm">
            <button
                className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeTab === PRODUCT_TABS.GENERAL
                        ? 'bg-black text-white shadow-sm'
                        : 'text-gray-700 hover:bg-gray-200'
                } flex items-center justify-center gap-2`}
                onClick={() => setActiveTab(PRODUCT_TABS.GENERAL)}
            >
                <Eye className="h-4 w-4" /> {PRODUCT_TABS.GENERAL}
            </button>
            <button
                className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeTab === PRODUCT_TABS.MEDIA
                        ? 'bg-black text-white shadow-sm'
                        : 'text-gray-700 hover:bg-gray-200'
                } flex items-center justify-center gap-2`}
                onClick={() => setActiveTab(PRODUCT_TABS.MEDIA)}
            >
                <ImageIcon className="h-4 w-4" /> {PRODUCT_TABS.MEDIA}
            </button>
            <button
                className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeTab === PRODUCT_TABS.SOCIALS
                        ? 'bg-black text-white shadow-sm'
                        : 'text-gray-700 hover:bg-gray-200'
                } flex items-center justify-center gap-2`}
                onClick={() => setActiveTab(PRODUCT_TABS.SOCIALS)}
            >
                <MessageSquare className="h-4 w-4" /> {PRODUCT_TABS.SOCIALS}
            </button>
        </div>
    );
}
