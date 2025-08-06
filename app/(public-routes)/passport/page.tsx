'use client';

import { APP_PATHS } from '@/app/constants/api';
import Spinner from '@/components/Spinner';
import { clearLocalStorage, LOCAL_KEYS } from '@/utils/localstorage';
import { deleteCookie } from 'cookies-next/client';
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

export default function page() {
    const searchParams = useSearchParams();
    const redirectUrl = searchParams.get('redirectUrl');

    useEffect(() => {
        clearLocalStorage();
        deleteCookie(LOCAL_KEYS.ACCESS_TOKEN);
        window.location.href = APP_PATHS.LOGIN + `?redirectUrl=${redirectUrl}`;
    }, []);
    return (
        <div className="flex justify-center items-center mt-20">
            <Spinner text="Please wait..." />
        </div>
    );
}
