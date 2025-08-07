import React from 'react';
import { ICONS } from '../constants/images';

export default function Partners() {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Our Partners
            </h3>
            <ul className="space-y-4">
                <li className="flex items-center gap-3">
                    <img
                        src={ICONS.BLANK_IMAGE}
                        alt="Partner 1"
                        className="w-10 h-10 rounded-md object-cover"
                    />
                    <div>
                        <p className="font-medium text-gray-800">
                            Creative Solutions Inc.
                        </p>
                        <a
                            href="#"
                            className="text-sm text-blue-400 hover:underline"
                        >
                            Visit Website
                        </a>
                    </div>
                </li>
                <li className="flex items-center gap-3">
                    <img
                        src={ICONS.BLANK_IMAGE}
                        alt="Partner 2"
                        className="w-10 h-10 rounded-md object-cover"
                    />
                    <div>
                        <p className="font-medium text-gray-800">
                            Innovate Tech Co.
                        </p>
                        <a
                            href="#"
                            className="text-sm text-blue-400 hover:underline"
                        >
                            Visit Website
                        </a>
                    </div>
                </li>
                <li className="flex items-center gap-3">
                    <img
                        src={ICONS.BLANK_IMAGE}
                        alt="Partner 3"
                        className="w-10 h-10 rounded-md object-cover"
                    />
                    <div>
                        <p className="font-medium text-gray-800">
                            Global Marketing Group
                        </p>
                        <a
                            href="#"
                            className="text-sm text-blue-400 hover:underline"
                        >
                            Visit Website
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    );
}
