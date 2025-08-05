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

export const extractFileNameAfterLastHyphen = (
    s3Url: string,
    maxLength?: number
) => {
    if (!maxLength) maxLength = 16;
    const fullFileName = s3Url.split('/').pop();
    const prefix = 'file-';
    if (!fullFileName) return '';

    const prefixIndex = fullFileName.indexOf(prefix);
    if (prefixIndex === -1) return trimText(fullFileName, maxLength);

    const nameAfterPrefix = fullFileName.slice(prefixIndex + prefix.length);

    return trimText(nameAfterPrefix, maxLength);
};

export const trimText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
        const extIndex = text.lastIndexOf('.');
        const extension = extIndex !== -1 ? text.slice(extIndex) : '';
        const baseName = text.slice(0, maxLength - extension.length - 3);
        return `${baseName}...${extension}`;
    }
    return text;
};

// Write a code to create slug
export const createSlug = (text: string) => {
    return text
        .toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-');
};
