import { getCookie } from 'cookies-next/client';

export const LOCAL_KEYS = {
    ACCESS_TOKEN: 'accessToken',
};

export const clearLocalStorage = () => {
    localStorage.clear();
};

export const generateCookieHeaders = () => {
    const accessToken = getCookie(LOCAL_KEYS.ACCESS_TOKEN);
    return {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };
};
