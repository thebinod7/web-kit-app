'use client';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { Fragment } from 'react';
import { Toaster } from 'sonner';

const AppWrapper = ({ children }: { readonly children: React.ReactNode }) => {
    return (
        <Fragment>
            <Header />
            <main className="">{children}</main>

            <Footer />

            <Toaster position="top-right" toastOptions={{ duration: 5000 }} />
        </Fragment>
    );
};

export default AppWrapper;
