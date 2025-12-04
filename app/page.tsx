import Link from 'next/link';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Button } from '@heroui/react';
import { FiTruck, FiShield, FiRefreshCw, FiHeart, FiGlobe, FiStar, FiUsers } from 'react-icons/fi';

export default async function HomePage() {
  const t = await getTranslations('landing');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-emerald-50 via-white to-emerald-50 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
              {t('badge')}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              {t('heroTitle')} <span className="text-emerald-500">Monttreal</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              {t('heroSubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop">
                <Button 
                  color="primary" 
                  size="lg" 
                  className="font-semibold px-10 py-7 text-lg bg-emerald-500 hover:bg-emerald-600 shadow-lg shadow-emerald-500/30"
                >
                  {t('cta')}
                </Button>
              </Link>
              <Link href="#about">
                <Button 
                  variant="bordered" 
                  size="lg" 
                  className="font-semibold px-10 py-7 text-lg border-2"
                >
                  {t('learnMore')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <FiTruck className="text-emerald-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{t('freeShipping')}</h3>
              <p className="text-sm text-gray-500">{t('freeShippingDesc')}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <FiShield className="text-emerald-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{t('securePayment')}</h3>
              <p className="text-sm text-gray-500">{t('securePaymentDesc')}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <FiRefreshCw className="text-emerald-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{t('easyReturns')}</h3>
              <p className="text-sm text-gray-500">{t('easyReturnsDesc')}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <FiHeart className="text-emerald-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{t('quality')}</h3>
              <p className="text-sm text-gray-500">{t('qualityDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-emerald-500 font-semibold text-sm uppercase tracking-wider">
                {t('aboutLabel')}
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-6">
                {t('aboutTitle')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('aboutText1')}
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                {t('aboutText2')}
              </p>
              <div className="flex gap-8">
                <div>
                  <p className="text-3xl font-bold text-emerald-500">500+</p>
                  <p className="text-gray-500 text-sm">{t('happyClients')}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-emerald-500">100%</p>
                  <p className="text-gray-500 text-sm">{t('premiumQuality')}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-emerald-500">24/7</p>
                  <p className="text-gray-500 text-sm">{t('support')}</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-white rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center p-12 border border-gray-100">
                <Image
                  src="/logo-monttreal.svg"
                  alt="Monttreal Logo"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-200 rounded-2xl -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-300 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-emerald-500 font-semibold text-sm uppercase tracking-wider">
              {t('collectionsLabel')}
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              {t('collectionsTitle')}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: t('catTshirts'), category: 'Camisetas', color: 'from-rose-400 to-rose-600' },
              { name: t('catPants'), category: 'Pantalones', color: 'from-blue-400 to-blue-600' },
              { name: t('catDresses'), category: 'Vestidos', color: 'from-purple-400 to-purple-600' },
              { name: t('catJackets'), category: 'Chaquetas', color: 'from-amber-400 to-amber-600' },
            ].map((item) => (
              <Link 
                key={item.category} 
                href={`/shop?category=${item.category}`}
                className="group"
              >
                <div className={`aspect-[4/5] rounded-2xl bg-gradient-to-br ${item.color} p-6 flex flex-col justify-end relative overflow-hidden transition-transform hover:scale-105`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                  <h3 className="text-white text-xl font-bold relative z-10">{item.name}</h3>
                  <p className="text-white/80 text-sm relative z-10">{t('viewCollection')}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-emerald-500">
        <div className="container mx-auto px-6">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl font-bold mb-4">{t('valuesTitle')}</h2>
            <p className="text-emerald-100 max-w-2xl mx-auto">{t('valuesSubtitle')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiGlobe size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('value1Title')}</h3>
              <p className="text-emerald-100 text-sm leading-relaxed">{t('value1Desc')}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiStar size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('value2Title')}</h3>
              <p className="text-emerald-100 text-sm leading-relaxed">{t('value2Desc')}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiUsers size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('value3Title')}</h3>
              <p className="text-emerald-100 text-sm leading-relaxed">{t('value3Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('ctaTitle')}</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">{t('ctaSubtitle')}</p>
          <Link href="/shop">
            <Button 
              color="primary" 
              size="lg" 
              className="font-semibold px-10 py-7 text-lg bg-emerald-500 hover:bg-emerald-600 shadow-lg shadow-emerald-500/30"
            >
              {t('ctaButton')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
