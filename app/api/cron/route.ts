import { NextRequest, NextResponse } from 'next/server';
import { sendDailyCronEmail } from '@/lib/nodemailer';

// This endpoint can be called by a cron job service (e.g., Vercel Cron, Railway, etc.)
// Set up a daily trigger at your preferred time

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    // Verify cron secret for security (optional but recommended)
    const authHeader = request.headers.get('authorization');
    const cronSecret = process.env.CRON_SECRET;

    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await sendDailyCronEmail();

    return NextResponse.json({ 
      success: true, 
      message: 'Daily email sent',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Cron job error:', error);
    return NextResponse.json(
      { error: 'Cron job failed' },
      { status: 500 }
    );
  }
}

