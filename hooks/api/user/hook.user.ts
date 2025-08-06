'use client';
import { API_ROUTES } from '@/app/constants/api';
import { QUERY_KEYS } from '@/app/constants/query-key';
import { generateCookieHeaders } from '@/utils/localstorage';
import { getRequest } from '@/utils/request';
import { useQuery } from '@tanstack/react-query';

export const useGetMeUser = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.USER.ME],
        queryFn: () =>
            getRequest(`${API_ROUTES.USERS}/me`, generateCookieHeaders()),
        enabled: true,
        staleTime: 0,
    });
};
