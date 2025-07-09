import { API_ROUTES } from '@/app/constants/api';
import { QUERY_KEYS } from '@/app/constants/query-key';
import { getRequest } from '@/utils/request';
import { useQuery } from '@tanstack/react-query';

export const useListUsers = (query: any) => {
    const queryParams = new URLSearchParams(query).toString();
    return useQuery({
        queryKey: [QUERY_KEYS.USER.LIST, query],
        queryFn: () => getRequest(`${API_ROUTES.USERS}?${queryParams}`),
        enabled: true,
        staleTime: 0,
    });
};

//    const forgotPasswordMutation = useMutation({
//         mutationFn: (payload: any) => {
//             return postRequest(API_ROUTES.AUTH + '/forgot-password', payload);
//         },
//         onError: (error: any) => {
//             toast.error(sanitizeError(error));
//         },
//         onSuccess: () => {
//             const emailInput = document.getElementById(
//                 'email'
//             ) as HTMLInputElement;
//             if (emailInput) {
//                 emailInput.value = '';
//             }
//             toast.success('Email has been sent! Please check your inbox.');
//         },
//     });
