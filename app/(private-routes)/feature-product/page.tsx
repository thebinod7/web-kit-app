'use client';
import FeatureProductSelectCard from '@/components/FeatureProductSelectCard';
import { useListMyProductQuery } from '@/hooks/api/product/hook.product';
import { useState } from 'react';
import FeatureOptionSelector, { FEATURE_TYPE } from './FeatureOptionSelector';

export default function FeatureProduct() {
    const { data, isLoading } = useListMyProductQuery();
    const rows = data?.data?.result.rows || [];

    const [selectedOption, setSelectedOption] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [newProduct, setNewProduct] = useState({
        name: '',
        tagline: '',
        description: '',
        website: '',
        category: '',
        logo: '',
    });

    const handleSubmit = () => {
        if (selectedOption === FEATURE_TYPE.EXISTING && selectedProduct) {
            alert('Featuring existing product!');
        } else if (
            selectedOption === FEATURE_TYPE.NEW_ONE &&
            newProduct.name &&
            newProduct.description
        ) {
            alert('Featuring new product!');
        }
    };

    const isFormValid = () => {
        if (selectedOption === FEATURE_TYPE.EXISTING) {
            return selectedProduct !== null;
        } else if (selectedOption === FEATURE_TYPE.NEW_ONE) {
            return (
                newProduct.name.trim() &&
                newProduct.description.trim() &&
                newProduct.website.trim()
            );
        }
        return false;
    };

    console.log('Rows:', rows);

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-4 py-6">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Feature a Product
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Showcase your product to our community of makers and
                        users
                    </p>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-8">
                <div className="space-y-8">
                    {/* Option Selection */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-800">
                            Choose an Option
                        </h2>
                        <FeatureOptionSelector
                            selectedOption={selectedOption}
                            setSelectedOption={setSelectedOption}
                        />
                    </div>

                    {/* Existing Product Selection */}
                    {selectedOption === FEATURE_TYPE.EXISTING && (
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800">
                                Select Your Product
                            </h3>

                            {/* <div className="relative">
                                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchQuery}
                                    onChange={(e) =>
                                        setSearchQuery(e.target.value)
                                    }
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2focus:border-transparent"
                                />
                            </div> */}

                            <div className="space-y-3 max-h-96 overflow-y-auto">
                                {rows.map((product: any) => (
                                    <FeatureProductSelectCard
                                        key={product.cuid}
                                        product={product}
                                        selectedProduct={selectedProduct}
                                        setSelectedProduct={setSelectedProduct}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* New Product Form */}
                    {selectedOption === FEATURE_TYPE.NEW_ONE && (
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold text-gray-800">
                                Product Details (All fields are required)
                            </h3>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Product Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={newProduct.name}
                                            onChange={(e) =>
                                                setNewProduct({
                                                    ...newProduct,
                                                    name: e.target.value,
                                                })
                                            }
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg"
                                            placeholder="Enter product name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Website URL *
                                        </label>
                                        <input
                                            type="url"
                                            required
                                            value={newProduct.website}
                                            onChange={(e) =>
                                                setNewProduct({
                                                    ...newProduct,
                                                    website: e.target.value,
                                                })
                                            }
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg"
                                            placeholder="https://your-product.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Category
                                        </label>
                                        <select
                                            value={newProduct.category}
                                            onChange={(e) =>
                                                setNewProduct({
                                                    ...newProduct,
                                                    category: e.target.value,
                                                })
                                            }
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg"
                                        >
                                            <option value="">
                                                Select category
                                            </option>
                                            <option value="Productivity">
                                                Productivity
                                            </option>
                                            <option value="Design Tools">
                                                Design Tools
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Description *
                                        </label>
                                        <textarea
                                            required
                                            rows={4}
                                            value={newProduct.description}
                                            onChange={(e) =>
                                                setNewProduct({
                                                    ...newProduct,
                                                    description: e.target.value,
                                                })
                                            }
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg resize-none"
                                            placeholder="Describe your product in a few sentences..."
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Tagline
                                        </label>
                                        <input
                                            type="text"
                                            value={newProduct.logo}
                                            onChange={(e) =>
                                                setNewProduct({
                                                    ...newProduct,
                                                    logo: e.target.value,
                                                })
                                            }
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg"
                                            placeholder="Enter your tagline"
                                            maxLength={2}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Submit Button */}
                    {selectedOption && (
                        <div className="flex justify-end pt-6 border-t border-gray-200">
                            <button
                                type="button"
                                onClick={handleSubmit}
                                disabled={!isFormValid()}
                                className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                                    isFormValid()
                                        ? 'bg-orange-500 text-white hover:bg-orange-600'
                                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                }`}
                            >
                                Feature Product
                            </button>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
