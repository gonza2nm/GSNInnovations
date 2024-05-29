'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import styles from '@/app/styles/NavBar.module.css';
import BurguerButton from './BurguerButton.tsx';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const params = useParams<{ locale: string }>();
  const t = useTranslations('NavBar');
  const { locale } = params;
  return (
    <header id="header">
      <nav className={styles.navbar}>
        <div>
          <Link className={styles.no_styles_link} href={`/${locale}`}>
            Logo
          </Link>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.nav_list} ${styles.active}`
              : `${styles.nav_list}`
          }
        >
          <li className={styles.nav_link}>
            <Link
              className={styles.no_styles_link}
              href={`/${locale}`}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              {t('home')}
            </Link>
          </li>
          <li className={styles.nav_link}>
            <Link
              className={styles.no_styles_link}
              href={`/${locale}/about`}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              {t('about')}
            </Link>
          </li>
          <li className={styles.nav_link}>
            <Link
              className={styles.no_styles_link}
              href={`/${locale}/projects`}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              {t('projects')}
            </Link>
          </li>
          {isOpen && (
            <li
              className={`${styles.nav_link} ${styles.btn_burguer}`}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <Link className={styles.btn_container} href={`/${locale}/about`}>
                <button className={styles.nav_btn} type="button">
                  {t('button')}
                </button>
              </Link>
            </li>
          )}
        </ul>
        <div className={styles.nav_btn_container}>
          <Link className={styles.btn_container} href={`/${locale}/about`}>
            <button className={styles.nav_btn} type="button">
              {t('button')}
            </button>
          </Link>
          <BurguerButton isOpen={isOpen} handleClick={handleClick} />
        </div>
      </nav>
    </header>
  );
};
export default NavBar;
