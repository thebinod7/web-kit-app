'use client';
import { API_ROUTES } from '@/app/constants/api';
import BtnPrimary from '@/components/mini/BtnPrimary';
import HeaderH2 from '@/components/mini/HeaderH2';
import { useProductStore } from '@/store/store.product';
import { generateCookieHeaders } from '@/utils/localstorage';
import { postRequest } from '@/utils/request';
import { hasAllValues, sanitizeError } from '@/utils/utils';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { ProductForm } from '../feature-product/ProductForm';
import FomoAlertBox from './FomoAlertBox';

export default function SubmitProductPage() {
    const { productPrimaryDetails, setProductPrimaryDetails } = useProductStore(
        (state) => state
    );
    const router = useRouter();

    const saveProductMutation = useMutation({
        mutationFn: (payload: any) => {
            return postRequest(
                API_ROUTES.PRODUCTS,
                payload,
                generateCookieHeaders()
            );
        },
        onError: (error: any) => {
            toast.error(sanitizeError(error));
        },
        onSuccess: ({ data }) => {
            setProductPrimaryDetails({
                name: '',
                websiteUrl: '',
                tagline: '',
                logoUrl: '',
                categoryId: '',
                description: '',
            });
            toast.success('Product added successfully!');
            router.push('/edit-product/' + data.result.cuid);
        },
    });

    const handleFormSubmit = () => {
        const isValid = hasAllValues(productPrimaryDetails);
        if (!isValid)
            return toast.error('All fields are required! Please fill them.');
        return saveProductMutation.mutate(productPrimaryDetails);
    };

    return (
        <div className="min-h-screen bg-white py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                <FomoAlertBox />

                <section className="mb-5">
                    <HeaderH2 text="Submit Your Product" />
                </section>

                <ProductForm />

                <div className="flex justify-end pt-6 border-t border-gray-200">
                    <BtnPrimary
                        variant="secondary"
                        handleClick={handleFormSubmit}
                        text="Submit for Review"
                        processing={saveProductMutation.isPending}
                    />
                </div>
            </div>
        </div>
    );
}
