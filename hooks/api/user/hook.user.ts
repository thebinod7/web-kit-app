import { API_ROUTES } from '@/app/constants/api';
import { QUERY_KEYS } from '@/app/constants/query-key';
import { generateTokenHeaders } from '@/utils/localstorage';
import { getRequest } from '@/utils/request';
import { useQuery } from '@tanstack/react-query';

export const useGetMeUser = () => {
    return useQuery({
        queryKey: [QUERY_KEYS.USER.ME],
        queryFn: () =>
            getRequest(`${API_ROUTES.USERS}/me`, generateTokenHeaders()),
        enabled: true,
        staleTime: 0,
    });
};
