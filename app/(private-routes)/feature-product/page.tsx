'use client';
import { API_ROUTES } from '@/app/constants/api';
import { FEATURED_ACTIONS } from '@/app/constants/constants';
import FeatureProductSelectCard from '@/components/FeatureProductSelectCard';
import BtnPrimary from '@/components/mini/BtnPrimary';
import { useListMyProductQuery } from '@/hooks/api/product/hook.product';
import { useProductStore } from '@/store/store.product';
import { generateCookieHeaders } from '@/utils/localstorage';
import { postRequest } from '@/utils/request';
import { hasAllValues, sanitizeError } from '@/utils/utils';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'sonner';
import FeatureOptionSelector, { FEATURE_TYPE } from './FeatureOptionSelector';
import { ProductForm } from './ProductForm';

// TODO: write cleanup for expired featured products
export default function FeatureProduct() {
    const { productPrimaryDetails } = useProductStore((state) => state);

    const { data, isLoading } = useListMyProductQuery();
    const rows = data?.data?.result.rows || [];

    const [selectedOption, setSelectedOption] = useState('');
    const [selectedProduct, setSelectedProduct] = useState('');

    const featureProductMutation = useMutation({
        mutationFn: (payload: any) => {
            return postRequest(
                `${API_ROUTES.PRODUCTS}/featured`,
                payload,
                generateCookieHeaders()
            );
        },
        onError: (error: any) => {
            toast.error(sanitizeError(error));
        },
        onSuccess: ({ data }) => {
            toast.success('Product featured successfully!');
        },
    });

    const handleSubmit = () => {
        if (selectedOption === FEATURE_TYPE.EXISTING) {
            if (!selectedProduct)
                return toast.error('Please select your product!');
            return featureProductMutation.mutate({
                productId: selectedProduct,
                action: FEATURED_ACTIONS.SELECT_PRODUCT,
            });
        }
        const valid = hasAllValues(productPrimaryDetails);
        if (!valid)
            return toast.error('Please make sure all fields are filled!');
        return featureProductMutation.mutate({
            ...productPrimaryDetails,
            action: FEATURED_ACTIONS.CREATE_PRODUCT,
        });
    };

    console.log('Rows:', rows);

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}

            {/* <header className="border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-4 py-4">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Feature a Product
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Showcase your product to our community of makers and
                        users
                    </p>
                </div>
            </header> */}

            <main className="max-w-4xl mx-auto px-4 py-4">
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
                                Product Details{' '}
                                <span className="text-xs text-red-500">
                                    All fields are required
                                </span>
                            </h3>

                            <ProductForm />
                        </div>
                    )}

                    {selectedOption && (
                        <div className="flex justify-end pt-6 border-t border-gray-200">
                            <BtnPrimary
                                processing={featureProductMutation.isPending}
                                handleClick={handleSubmit}
                                text={`Feature Product at $7.77`}
                            />
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
