import React from 'react';
import { ICONS } from '../constants/images';
import { ExternalLink, Star } from 'lucide-react';
import Link from 'next/link';

const FEATURED_LIST = [
    {
        id: 1,
        name: ' Creative Solutions Inc. EverestKart Prvate Limited',
        icon: ICONS.BLANK_IMAGE,
    },
    { id: 2, name: ' Creative Solutions Inc.', icon: ICONS.BLANK_IMAGE },
    { id: 3, name: ' Creative Solutions Inc.', icon: ICONS.BLANK_IMAGE },
    { id: 4, name: ' Creative Solutions Inc.', icon: ICONS.BLANK_IMAGE },
    { id: 5, name: ' Creative Solutions Inc.', icon: ICONS.BLANK_IMAGE },
    { id: 6, name: ' Creative Solutions Inc.', icon: ICONS.BLANK_IMAGE },
    { id: 7, name: ' Creative Solutions Inc.', icon: ICONS.BLANK_IMAGE },
    { id: 8, name: ' Creative Solutions Inc.', icon: ICONS.BLANK_IMAGE },
];

export default function FeaturedProducts() {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Feature Products
            </h3>
            <ul className="space-y-4">
                {FEATURED_LIST.map((item) => {
                    return (
                        <li
                            key={item.id}
                            className="group  bg-white hover:bg-gray-50 border border-gray-100 hover:border-gray-200 rounded-lg transition-all duration-200"
                        >
                            <div className="flex items-center gap-3 p-3">
                                <img
                                    src={item.icon}
                                    alt={item.name}
                                    className="w-10 h-10 rounded-lg object-cover"
                                />
                                <p className="font-medium text-gray-800 flex-1">
                                    {item.name}
                                </p>
                                <Link
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                </Link>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
