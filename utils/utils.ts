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
