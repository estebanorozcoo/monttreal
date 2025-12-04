'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FiInstagram, FiFacebook, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import styles from './Footer.module.scss';

export default function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <Link href="/" className={styles.logoLink}>
              <Image
                src="/logo-monttreal.svg"
                alt="Monttreal"
                width={40}
                height={40}
                className={styles.logoImage}
              />
              <span className={styles.logoText}>MONTTREAL</span>
            </Link>
            <p className={styles.tagline}>{t('tagline')}</p>
            <p className={styles.description}>{t('description')}</p>
            <div className={styles.social}>
              <a href="https://www.instagram.com/montt.real/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FiInstagram size={20} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61559081385397" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FiFacebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksSection}>
            <h4 className={styles.sectionTitle}>{t('quickLinks')}</h4>
            <ul className={styles.linksList}>
              <li><Link href="/shop">{t('shop')}</Link></li>
              <li><Link href="/shop?category=Camisetas">{t('tshirts')}</Link></li>
              <li><Link href="/shop?category=Pantalones">{t('pants')}</Link></li>
              <li><Link href="/shop?category=Vestidos">{t('dresses')}</Link></li>
              <li><Link href="/shop?category=Chaquetas">{t('jackets')}</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className={styles.linksSection}>
            <h4 className={styles.sectionTitle}>{t('customerService')}</h4>
            <ul className={styles.linksList}>
              <li><Link href="/auth/login">{t('myAccount')}</Link></li>
              <li><a href="#">{t('returns')}</a></li>
              <li><a href="#">{t('faq')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.contactSection}>
            <h4 className={styles.sectionTitle}>{t('contact')}</h4>
            <ul className={styles.contactList}>
              <li>
                <FiMapPin size={16} />
                <span>Monttreal, Medellín - Colombia</span>
              </li>
              <li>
                <FiMail size={16} />
                <a href="mailto:info@monttreal.com">info@monttreal.com</a>
              </li>
              <li>
                <FiPhone size={16} />
                <a href="tel:+15141234567">+57 3126251938</a>
              </li>
            </ul>
            <div className={styles.newsletter}>
              <p className={styles.newsletterText}>{t('newsletterText')}</p>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copyright}>
            <p>© {currentYear} Monttreal. {t('rights')}.</p>
          </div>
          <div className={styles.legal}>
            <Link href="/privacy">{t('privacy')}</Link>
            <Link href="/terms">{t('terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
