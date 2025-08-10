import React from 'react';
import { ICONS } from '../constants/images';

export default function Advertising() {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Advertisements
            </h3>
            <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4 text-center">
                    <img
                        src={ICONS.BLANK_IMAGE}
                        alt="Ad 1"
                        className="w-full h-auto rounded-md mb-2"
                    />
                    <p className="text-sm font-medium text-gray-800">
                        Boost Your Sales with X-CRM!
                    </p>
                    <a
                        href="#"
                        className="text-xs text-blue-400 hover:underline"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    );
}
