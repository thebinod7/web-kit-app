export const sanitizeError = (error: any) => {
    console.log('error', error.response);
    if (error?.response?.data?.message) {
        return error.response.data.message;
    }
    return 'Something went wrong!';
};

export const getNameInitials = (name: string) => {
    const names = name.split(' ');
    if (names.length === 1) {
        return names[0].charAt(0).toUpperCase();
    } else if (names.length > 1) {
        return (
            names[0].charAt(0).toUpperCase() +
            names[names.length - 1].charAt(0).toUpperCase()
        );
    }
    return '';
};

export const createCategoryDropdownOptions = (categories: any[]) => {
    if (!categories || !categories.length) return [];
    return categories.map((category: any) => ({
        cuid: category.cuid,
        label: category.name,
        value: category.name,
        slug: category.slug,
    }));
};

export const formatEnum = (inputText: string) => {
    return inputText
        .toLowerCase()
        .split('_')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};
