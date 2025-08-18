import { Plus, Search } from 'lucide-react';
import React from 'react';

export const FEATURE_TYPE = {
    EXISTING: 'existing',
    NEW_ONE: 'new_one',
};

export default function FeatureOptionSelector({
    selectedOption,
    setSelectedOption,
}: {
    selectedOption: string;
    setSelectedOption: (option: string) => void;
}) {
    return (
        <div className="grid md:grid-cols-2 gap-4">
            <div
                onClick={() => setSelectedOption(FEATURE_TYPE.EXISTING)}
                className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedOption === FEATURE_TYPE.EXISTING
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 hover:border-gray-300'
                }`}
            >
                <div className="flex items-start space-x-3">
                    <Search className="w-6 h-6 text-orange-500 mt-1" />
                    <div>
                        <h3 className="font-semibold text-gray-800">
                            Feature Existing Product
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                            Select from your existing products
                        </p>
                    </div>
                </div>
            </div>

            <div
                onClick={() => setSelectedOption(FEATURE_TYPE.NEW_ONE)}
                className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedOption === FEATURE_TYPE.NEW_ONE
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 hover:border-gray-300'
                }`}
            >
                <div className="flex items-start space-x-3">
                    <Plus className="w-6 h-6 text-orange-500 mt-1" />
                    <div>
                        <h3 className="font-semibold text-gray-800">
                            Create New Product
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                            Add a new product to feature
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
