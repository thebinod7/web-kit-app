import { API_ROUTES } from '@/app/constants/api';
import { QUERY_KEYS } from '@/app/constants/query-key';
import { getRequest } from '@/utils/request';
import { createCategoryDropdownOptions } from '@/utils/utils';
import { useQuery } from '@tanstack/react-query';

export const useFetchAllCountries = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: [QUERY_KEYS.CATEGORY.LIST_ALL],
        queryFn: async () => {
            const response = await getRequest(API_ROUTES.CATEGORY);
            return response?.data?.result?.rows || [];
        },
        staleTime: 5 * 60 * 1000, // 5 minutes
    });

    const dropdownOptions = createCategoryDropdownOptions(data);

    return {
        all_categories: dropdownOptions,
        loading: isLoading,
        response: data,
        error,
    };
};
