'use client';
import { getCookie } from 'cookies-next/client';

export interface ILocalUser {
    id: number;
    cuid: string;
    name: string;
    username: string;
    profilePicture: string;
    phone: string;
    gender: string;
    role: string;
    roleId: number;
    perms: string[];
    extras: Record<string, any>;
}

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

export const getLocalUser = () => {
    const user = localStorage.getItem('localUser');
    return user ? JSON.parse(user) : null;
};

export const setLocalUser = (user: ILocalUser) => {
    localStorage.setItem('localUser', JSON.stringify(user));
};
