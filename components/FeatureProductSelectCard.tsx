import { ICONS } from '@/app/constants/images';
import Image from 'next/image';

export default function FeatureProductSelectCard({
    product,
    selectedProduct,
    setSelectedProduct,
}: {
    product: any;
    selectedProduct: string;
    setSelectedProduct: (productId: string) => void;
}) {
    return (
        <div
            key={product.cuid}
            onClick={() => setSelectedProduct(product.cuid)}
            className={`p-4 border rounded-lg cursor-pointer transition-all ${
                selectedProduct === product.cuid
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-gray-200 hover:border-gray-300'
            }`}
        >
            <div className="flex items-start space-x-3">
                <div className="text-2xl">
                    <Image
                        src={product.logoUrl || ICONS.BLANK_IMAGE}
                        alt="Product Logo"
                        width={40}
                        height={40}
                    />
                </div>
                <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-gray-800">
                            {product.name}
                        </h4>
                        <div className="flex items-center space-x-3 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                                <div className="font-medium border px-2 py-1 rounded-sm border-orange-300 text-orange-600">
                                    {product.category?.name || 'Uncategorized'}
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">
                        {product.tagline}
                    </p>
                </div>
            </div>
        </div>
    );
}
