import React from 'react';
import { ICONS } from '../constants/images';
import Link from 'next/link';

export default function Advertising() {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Our Partners
            </h3>
            <div className="space-y-2">
                <div className="rounded-lg text-center">
                    <img
                        src={ICONS.BLANK_IMAGE}
                        alt="Ad 1"
                        className="w-full h-auto rounded-md mb-1"
                    />
                    <p className="text-sm font-medium text-gray-800">
                        Become our partner
                    </p>
                    <Link
                        href="/contact"
                        className="text-xs text-blue-400 hover:underline"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
}
