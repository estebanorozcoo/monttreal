'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { Button, Card } from '@heroui/react';
import { toast } from 'react-toastify';
import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';
import { useCart } from '@/lib/cartcontext';

export default function CartPage() {
  const { data: session } = useSession();
  const t = useTranslations('cart');
  const { items, updateQuantity, removeItem, getTotal, clearCart } = useCart();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (!session) return;

    setLoading(true);
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Error creating order');
      }

      toast.success(t('orderSuccess'));
      clearCart();
    } catch (error) {
      toast.error((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('title')}</h1>
        <p className="text-gray-500 mb-8">{t('empty')}</p>
        <Link href="/shop">
          <Button color="primary" className="bg-emerald-500 hover:bg-emerald-600">
            {t('continueShopping')}
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">{t('title')}</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <Card key={item.productId} className="p-4">
              <div className="flex gap-4">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src={item.image || '/placeholder.svg'}
                    alt={item.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-emerald-500 font-bold">
                    ${item.price.toFixed(2)}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <FiMinus size={16} />
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <FiPlus size={16} />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-end">
                  <p className="font-bold text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeItem(item.productId)}
                    className="text-red-500 hover:text-red-700 p-1"
                  >
                    <FiTrash2 size={18} />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="lg:col-span-1">
          <Card className="p-6 sticky top-24">
            <h2 className="text-xl font-bold text-gray-900 mb-4">{t('total')}</h2>
            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between text-2xl font-bold">
                <span>{t('total')}</span>
                <span className="text-emerald-500">${getTotal().toFixed(2)}</span>
              </div>
            </div>

            {session ? (
              <Button
                color="primary"
                size="lg"
                className="w-full bg-emerald-500 hover:bg-emerald-600"
                onPress={handleCheckout}
                isLoading={loading}
              >
                {t('checkout')}
              </Button>
            ) : (
              <Link href="/auth/login">
                <Button
                  color="primary"
                  size="lg"
                  className="w-full bg-emerald-500 hover:bg-emerald-600"
                >
                  {t('goToLogin')}
                </Button>
              </Link>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}

