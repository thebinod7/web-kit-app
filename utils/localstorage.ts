import { Resume } from '@/types/resume';
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

export const saveResumeLocal = (resume: Resume) => {
    localStorage.setItem('resume', JSON.stringify(resume));
};

export const getResumeLocal = () => {
    const resume = localStorage.getItem('resume');
    return resume ? JSON.parse(resume) : null;
};

export const removeResumeLocal = () => {
    localStorage.removeItem('resume');
};
