import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { cookies } from 'next/headers';
import Providers from '@/components/providers/Providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
// @ts-ignore
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Monttreal',
  description: '| Prendas exclusivas',
};

async function getMessages(locale: string) {
  try {
    return (await import(`@/messages/${locale}.json`)).default;
  } catch {
    return (await import(`@/messages/es.json`)).default;
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const locale = cookieStore.get('locale')?.value || 'es';
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body className={`${poppins.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Providers locale={locale} messages={messages}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
