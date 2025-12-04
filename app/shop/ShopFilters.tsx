'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Input, Select, SelectItem } from '@heroui/react';
import { FiSearch } from 'react-icons/fi';

interface ShopFiltersProps {
  categories: string[];
  currentCategory?: string;
  currentSearch?: string;
}

export default function ShopFilters({
  categories,
  currentCategory,
  currentSearch,
}: ShopFiltersProps) {
  const t = useTranslations('common');
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [search, setSearch] = useState(currentSearch || '');

  const updateFilters = (key: string, value: string) => {
    const params = new URLSearchParams();
    if (currentSearch && key !== 'search') params.set('search', currentSearch);
    if (currentCategory && key !== 'category') params.set('category', currentCategory);
    if (value) params.set(key, value);

    startTransition(() => {
      router.push(`/shop?${params.toString()}`);
    });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    updateFilters('search', search);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <form onSubmit={handleSearch} className="flex-1">
        <Input
          placeholder={t('search')}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          startContent={<FiSearch className="text-gray-400" />}
          className="w-full"
          isDisabled={isPending}
        />
      </form>
      <Select
        placeholder={t('category')}
        selectedKeys={currentCategory ? [currentCategory] : []}
        onChange={(e) => updateFilters('category', e.target.value)}
        className="w-full sm:w-48"
        isDisabled={isPending}
      >
        {[
          <SelectItem key="all" value="all">
            {t('all')}
          </SelectItem>,
          ...categories.map((cat) => (
            <SelectItem key={cat} value={cat}>
              {cat}
            </SelectItem>
          )),
        ]}
      </Select>
    </div>
  );
}

