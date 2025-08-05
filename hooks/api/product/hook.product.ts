import { API_ROUTES } from '@/app/constants/api';
import { QUERY_KEYS } from '@/app/constants/query-key';
import { generateTokenHeaders } from '@/utils/localstorage';
import { getRequest } from '@/utils/request';
import { useQuery } from '@tanstack/react-query';

export const useGetProductDetailsQuery = (cuid: string | undefined) => {
    return useQuery({
        queryKey: [QUERY_KEYS.PRODUCT.GET_BY_CUID, cuid],
        queryFn: () =>
            getRequest(
                `${API_ROUTES.PRODUCTS}/${cuid}`,
                generateTokenHeaders()
            ),
        enabled: true,
        staleTime: 0,
    });
};

export const useListMyProductQuery = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.PRODUCT.GET_BY_CUID],
        queryFn: () =>
            getRequest(`${API_ROUTES.PRODUCTS}/me`, generateTokenHeaders()),
        enabled: true,
        staleTime: 0,
    });
};
