'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button, Card } from '@heroui/react';
import { toast } from 'react-toastify';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { useCart } from '@/lib/cartcontext';

interface Product {
  _id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
  description: string;
  image: string;
}

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const t = useTranslations('product');
  const tShop = useTranslations('shop');
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addItem({
      productId: product._id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
    });
    toast.success(t('addedToCart'));
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    if (quantity < product.stock) setQuantity(quantity + 1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="overflow-hidden">
          <div className="relative aspect-square">
            <Image
              src={product.image || '/placeholder.svg'}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </Card>

        <div className="flex flex-col">
          <span className="text-emerald-500 text-sm font-medium uppercase tracking-wide">
            {product.category}
          </span>
          <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
            {product.name}
          </h1>
          <p className="text-3xl font-bold text-emerald-500 mb-6">
            ${product.price.toFixed(2)}
          </p>

          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              {t('description')}
            </h3>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-600">
              {t('stock')}: <span className="font-semibold">{product.stock}</span>
            </p>
          </div>

          {product.stock > 0 ? (
            <>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-medium text-gray-700">
                  {t('quantity')}:
                </span>
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={decreaseQuantity}
                    className="p-2 hover:bg-gray-100 transition-colors"
                    disabled={quantity <= 1}
                  >
                    <FiMinus />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={increaseQuantity}
                    className="p-2 hover:bg-gray-100 transition-colors"
                    disabled={quantity >= product.stock}
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>

              <Button
                color="primary"
                size="lg"
                onPress={handleAddToCart}
                className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-600"
              >
                {tShop('addToCart')}
              </Button>
            </>
          ) : (
            <Button color="default" size="lg" isDisabled className="w-full md:w-auto">
              {tShop('outOfStock')}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

