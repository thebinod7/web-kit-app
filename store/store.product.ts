import { IProductDetails } from '@/types/product';
import { create } from 'zustand';

interface ProductStore {
    productDetails: IProductDetails | null;
    setProductDetails: (payload: IProductDetails) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
    productDetails: null,
    setProductDetails: (payload) => set({ productDetails: payload }),
}));
