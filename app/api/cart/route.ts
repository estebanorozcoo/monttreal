import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { connectDB } from '@/lib/mongodb';
import Cart from '@/lib/models/Cart';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    const cart = await Cart.findOne({ userId: session.user.id }).lean();

    return NextResponse.json(cart || { items: [] });
  } catch (error) {
    console.error('Error fetching cart:', error);
    return NextResponse.json({ error: 'Error fetching cart' }, { status: 500 });
  }
}

