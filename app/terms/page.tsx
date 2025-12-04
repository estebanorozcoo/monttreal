import { getTranslations } from 'next-intl/server';

export default async function TermsPage() {
  const t = await getTranslations('terms');

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">{t('title')}</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">{t('lastUpdated')}: Diciembre 2024</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('section1Title')}</h2>
          <p className="text-gray-600 leading-relaxed">{t('section1Text')}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('section2Title')}</h2>
          <p className="text-gray-600 leading-relaxed">{t('section2Text')}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('section3Title')}</h2>
          <p className="text-gray-600 leading-relaxed mb-4">{t('section3Text')}</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>{t('section3Item1')}</li>
            <li>{t('section3Item2')}</li>
            <li>{t('section3Item3')}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('section4Title')}</h2>
          <p className="text-gray-600 leading-relaxed">{t('section4Text')}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('section5Title')}</h2>
          <p className="text-gray-600 leading-relaxed">{t('section5Text')}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('section6Title')}</h2>
          <p className="text-gray-600 leading-relaxed">{t('section6Text')}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('section7Title')}</h2>
          <p className="text-gray-600 leading-relaxed">{t('section7Text')}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{t('section8Title')}</h2>
          <p className="text-gray-600 leading-relaxed">
            {t('section8Text')} <a href="mailto:info@monttreal.com" className="text-emerald-600 hover:underline">info@monttreal.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}

export async function generateMetadata() {
  return {
    title: 'Términos y Condiciones - Monttreal',
    description: 'Términos y condiciones de uso de Monttreal',
  };
}

