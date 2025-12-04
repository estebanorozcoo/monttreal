'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Card, CardBody, CardFooter, Button } from '@heroui/react';
import { toast } from 'react-toastify';
import { useCart } from '@/lib/cart-context';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  stock: number;
}

export default function ProductCard({ id, name, price, image, stock }: ProductCardProps) {
  const t = useTranslations('shop');
  const tProduct = useTranslations('product');
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (stock <= 0) return;

    addItem({
      productId: id,
      name,
      price,
      quantity: 1,
      image,
    });

    toast.success(tProduct('addedToCart'));
  };

  return (
    <Link href={`/product/${id}`} className={styles.link}>
      <Card className={styles.card} isPressable>
        <CardBody className={styles.cardBody}>
          <div className={styles.imageContainer}>
            <Image
              src={image || '/placeholder.svg'}
              alt={name}
              fill
              className={styles.image}
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        </CardBody>
        <CardFooter className={styles.cardFooter}>
          <div className={styles.info}>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.price}>${price.toFixed(2)}</p>
          </div>
          <Button
            color="primary"
            size="sm"
            onPress={handleAddToCart as () => void}
            isDisabled={stock <= 0}
            className={styles.addButton}
          >
            {stock > 0 ? t('addToCart') : t('outOfStock')}
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}

