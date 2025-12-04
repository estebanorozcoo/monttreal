import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { connectDB } from '@/lib/mongodb';
import Product from '@/lib/models/Product';
import ProductDetails from './ProductDetails';

async function getProduct(id: string) {
  await connectDB();

  try {
    const product = await Product.findById(id).lean();
    if (!product) return null;
    return JSON.parse(JSON.stringify(product));
  } catch {
    return null;
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: `${product.name} - Monttreal`,
    description: product.description,
  };
}

