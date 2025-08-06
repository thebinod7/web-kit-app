import { getCookie } from 'cookies-next/client';

export const LOCAL_KEYS = {
    ACCESS_TOKEN: 'accessToken',
};

export const saveAccessToken = (token: string) => {
    localStorage.setItem('accessToken', token);
};

export const getAccessToken = () => {
    return localStorage.getItem('accessToken') || null;
};

export const clearLocalStorage = () => {
    localStorage.clear();
};

export const generateCookieHeaders = () => {
    const accessToken = getCookie(LOCAL_KEYS.ACCESS_TOKEN);
    console.log({ accessToken });
    return {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };
};
