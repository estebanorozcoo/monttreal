import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { getTranslations } from 'next-intl/server';
import { Card } from '@heroui/react';
import { authOptions } from '@/lib/auth';
import { connectDB } from '@/lib/mongodb';
import Order from '@/lib/models/Order';

async function getOrders(userId: string) {
  await connectDB();
  const orders = await Order.find({ userId }).sort({ createdAt: -1 }).lean();
  return JSON.parse(JSON.stringify(orders));
}

export default async function OrdersPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth/login');
  }

  const t = await getTranslations('orders');
  const orders = await getOrders(session.user.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">{t('title')}</h1>

      {orders.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">{t('noOrders')}</p>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order: {
            _id: string;
            createdAt: string;
            total: number;
            status: 'pending' | 'paid';
            items: { name: string; quantity: number; price: number }[];
          }) => (
            <Card key={order._id} className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-500">
                    {t('date')}: {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Order ID: {order._id}
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      order.status === 'paid'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {order.status === 'paid' ? t('paid') : t('pending')}
                  </span>
                  <p className="text-xl font-bold text-emerald-500">
                    ${order.total.toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm text-gray-600">
                  {order.items.length} {order.items.length === 1 ? 'item' : 'items'}
                </p>
                <ul className="mt-2 space-y-1">
                  {order.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-500">
                      {item.name} x{item.quantity} - ${(item.price * item.quantity).toFixed(2)}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

