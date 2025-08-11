import React from 'react';
import { ICONS } from '../constants/images';
import Link from 'next/link';

export default function Advertising() {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Advertisement
            </h3>
            <div className="space-y-2">
                <div className="rounded-lg text-center">
                    <img
                        src={ICONS.BLANK_IMAGE}
                        alt="Ad 1"
                        className="w-full h-auto rounded-md mb-1"
                    />
                    <p className="text-sm font-medium text-gray-800">
                        Boost Your Sales with X-CRM!
                    </p>
                    <Link
                        href="#"
                        className="text-xs text-blue-400 hover:underline"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    );
}
