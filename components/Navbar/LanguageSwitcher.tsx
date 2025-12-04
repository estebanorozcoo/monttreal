'use client';

import { useTransition } from 'react';
import { Button } from '@heroui/react';
import { useLocale } from 'next-intl';
import { setLocaleCookie } from '@/app/actions/locale';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: string) => {
    startTransition(async () => {
      await setLocaleCookie(newLocale);
      window.location.reload();
    });
  };

  return (
    <div className="flex gap-1">
      <Button
        size="sm"
        variant={locale === 'es' ? 'solid' : 'flat'}
        color={locale === 'es' ? 'primary' : 'default'}
        onPress={() => switchLocale('es')}
        isDisabled={isPending}
        className="min-w-[40px]"
      >
        ES
      </Button>
      <Button
        size="sm"
        variant={locale === 'en' ? 'solid' : 'flat'}
        color={locale === 'en' ? 'primary' : 'default'}
        onPress={() => switchLocale('en')}
        isDisabled={isPending}
        className="min-w-[40px]"
      >
        EN
      </Button>
    </div>
  );
}

