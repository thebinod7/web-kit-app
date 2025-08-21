import { IProductDetails, IProductPrimaryDetails } from '@/types/product';
import { create } from 'zustand';

interface ProductStore {
    productDetails: IProductDetails | null;
    setProductDetails: (payload: IProductDetails) => void;
    productPrimaryDetails: IProductPrimaryDetails | null;
    setProductPrimaryDetails: (payload: IProductPrimaryDetails) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
    productDetails: null,
    setProductDetails: (payload) => set({ productDetails: payload }),
    productPrimaryDetails: {
        name: '',
        websiteUrl: '',
        tagline: '',
        logoUrl: '',
        category: '',
        description: '',
    },
    setProductPrimaryDetails: (payload) =>
        set({ productPrimaryDetails: payload }),
}));
