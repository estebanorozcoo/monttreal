'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { Button } from '@heroui/react';
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import { useCart } from '@/lib/cart-context';
import LanguageSwitcher from './LanguageSwitcher';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const { data: session } = useSession();
  const t = useTranslations('common');
  const { getItemCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const itemCount = getItemCount();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo-monttreal.svg"
            alt="Monttreal"
            width={36}
            height={36}
            className={styles.logoImage}
          />
          <span className={styles.logoText}>MONTTREAL</span>
        </Link>

        <div className={styles.desktopMenu}>
          <Link href="/shop" className={styles.navLink}>
            {t('shop')}
          </Link>

          <Link href="/cart" className={styles.cartLink}>
            <FiShoppingCart size={20} />
            {itemCount > 0 && (
              <span className={styles.cartBadge}>{itemCount}</span>
            )}
          </Link>

          <LanguageSwitcher />

          {session ? (
            <div className={styles.userMenu}>
              {session.user.role === 'admin' && (
                <Link href="/dashboard">
                  <Button size="sm" variant="flat" color="primary">
                    {t('dashboard')}
                  </Button>
                </Link>
              )}
              <Link href="/orders">
                <Button size="sm" variant="flat">
                  {t('orders')}
                </Button>
              </Link>
              <Button
                size="sm"
                variant="flat"
                color="danger"
                onPress={() => signOut()}
              >
                {t('logout')}
              </Button>
            </div>
          ) : (
            <Link href="/auth/login">
              <Button color="primary" size="sm">
                {t('login')}
              </Button>
            </Link>
          )}
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link
            href="/shop"
            className={styles.mobileLink}
            onClick={() => setIsMenuOpen(false)}
          >
            {t('shop')}
          </Link>

          <Link
            href="/cart"
            className={styles.mobileLink}
            onClick={() => setIsMenuOpen(false)}
          >
            {t('cart')} {itemCount > 0 && `(${itemCount})`}
          </Link>

          {session ? (
            <>
              {session.user.role === 'admin' && (
                <Link
                  href="/dashboard"
                  className={styles.mobileLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('dashboard')}
                </Link>
              )}
              <Link
                href="/orders"
                className={styles.mobileLink}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('orders')}
              </Link>
              <button
                className={styles.mobileLink}
                onClick={() => {
                  signOut();
                  setIsMenuOpen(false);
                }}
              >
                {t('logout')}
              </button>
            </>
          ) : (
            <Link
              href="/auth/login"
              className={styles.mobileLink}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('login')}
            </Link>
          )}

          <div className={styles.mobileLangSwitcher}>
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
}
