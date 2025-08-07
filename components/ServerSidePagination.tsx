'use client';

import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
} from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

interface IMeta {
    currentPage: number;
    lastPage: number;
    perPage: number;
    total: number;
}

export default function ServerSidePagination({ meta }: { meta: IMeta }) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const totalPages = Math.ceil(meta.total / meta.perPage);
    const currentPage = meta.currentPage;

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            const params = new URLSearchParams(searchParams.toString());
            params.set('page', page.toString());
            router.push(`?${params.toString()}`);
        }
    };

    const renderPageButton = (pageNumber: number) => {
        const isActive = pageNumber === currentPage;
        const buttonClasses = `
      h-10 w-10 flex items-center justify-center
      rounded-lg border
      ${
          isActive
              ? 'bg-blue-400 text-white'
              : 'bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-100'
      }
      transition-colors duration-200
      text-sm font-medium
    `;
        return (
            <button
                key={pageNumber}
                className={`${buttonClasses} cursor-pointer`}
                onClick={() => handlePageChange(pageNumber)}
                aria-current={isActive ? 'page' : undefined}
            >
                {pageNumber}
            </button>
        );
    };

    const navButtonClasses = `
    h-10 w-10 flex items-center justify-center
    rounded-lg border bg-white border-neutral-200 text-neutral-700
    hover:bg-neutral-100 transition-colors duration-200
  `;

    return (
        <div className="p-8 bg-neutral-50 flex justify-center items-center min-h-[200px]">
            <div className="flex space-x-2">
                <button
                    className={`${navButtonClasses} cursor-pointer`}
                    onClick={() => handlePageChange(1)}
                    aria-label="Go to first page"
                    disabled={currentPage === 1}
                >
                    <ChevronsLeft className="h-4 w-4" />
                </button>
                <button
                    className={`${navButtonClasses} cursor-pointer`}
                    onClick={() => handlePageChange(currentPage - 1)}
                    aria-label="Go to previous page"
                    disabled={currentPage === 1}
                >
                    <ChevronLeft className="h-4 w-4" />
                </button>

                {/* Page numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    renderPageButton
                )}

                <button
                    className={`${navButtonClasses} cursor-pointer`}
                    onClick={() => handlePageChange(currentPage + 1)}
                    aria-label="Go to next page"
                    disabled={currentPage === totalPages}
                >
                    <ChevronRight className="h-4 w-4" />
                </button>
                <button
                    className={`${navButtonClasses} cursor-pointer`}
                    onClick={() => handlePageChange(totalPages)}
                    aria-label="Go to last page"
                    disabled={currentPage === totalPages}
                >
                    <ChevronsRight className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}
