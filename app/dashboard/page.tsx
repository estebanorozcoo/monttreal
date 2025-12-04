import { redirect } from 'next/navigation';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { getTranslations } from 'next-intl/server';
import { Card, CardBody, Button } from '@heroui/react';
import { FiPackage, FiShoppingBag } from 'react-icons/fi';
import { authOptions } from '@/lib/auth';
import { connectDB } from '@/lib/mongodb';
import Product from '@/lib/models/Product';
import Order from '@/lib/models/Order';

async function getStats() {
  await connectDB();
  const [productCount, orderCount] = await Promise.all([
    Product.countDocuments(),
    Order.countDocuments(),
  ]);
  return { productCount, orderCount };
}

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== 'admin') {
    redirect('/');
  }

  const t = await getTranslations('dashboard');
  const { productCount, orderCount } = await getStats();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">{t('title')}</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600">
          <CardBody className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-100 text-sm">{t('totalProducts')}</p>
                <p className="text-4xl font-bold text-white mt-2">{productCount}</p>
              </div>
              <FiPackage className="text-emerald-200" size={48} />
            </div>
          </CardBody>
        </Card>

        <Card className="bg-gradient-to-br from-blue-500 to-blue-600">
          <CardBody className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm">{t('totalOrders')}</p>
                <p className="text-4xl font-bold text-white mt-2">{orderCount}</p>
              </div>
              <FiShoppingBag className="text-blue-200" size={48} />
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="flex gap-4">
        <Link href="/dashboard/products">
          <Button color="primary" size="lg" className="bg-emerald-500 hover:bg-emerald-600">
            {t('manageProducts')}
          </Button>
        </Link>
      </div>
    </div>
  );
}

