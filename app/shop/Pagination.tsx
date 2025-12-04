'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '@heroui/react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  searchParams: {
    search?: string;
    category?: string;
  };
}

export default function Pagination({
  currentPage,
  totalPages,
  searchParams,
}: PaginationProps) {
  const t = useTranslations('common');

  if (totalPages <= 1) return null;

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams();
    if (searchParams.search) params.set('search', searchParams.search);
    if (searchParams.category) params.set('category', searchParams.category);
    params.set('page', page.toString());
    return `/shop?${params.toString()}`;
  };

  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      {currentPage > 1 ? (
        <Link href={createPageUrl(currentPage - 1)}>
          <Button variant="flat">{t('previous')}</Button>
        </Link>
      ) : (
        <Button variant="flat" isDisabled>
          {t('previous')}
        </Button>
      )}

      <span className="text-gray-600">
        {currentPage} / {totalPages}
      </span>

      {currentPage < totalPages ? (
        <Link href={createPageUrl(currentPage + 1)}>
          <Button variant="flat">{t('next')}</Button>
        </Link>
      ) : (
        <Button variant="flat" isDisabled>
          {t('next')}
        </Button>
      )}
    </div>
  );
}

