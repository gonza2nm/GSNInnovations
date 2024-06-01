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
          <a className={styles.no_styles_link} href="#">
            Logo
          </a>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.nav_list} ${styles.active}`
              : `${styles.nav_list}`
          }
        >
          <li className={styles.nav_link}>
            <a
              className={styles.no_styles_link}
              href="#"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              {t('home')}
            </a>
          </li>
          <li className={styles.nav_link}>
            <a
              className={styles.no_styles_link}
              href="#"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              {t('about')}
            </a>
          </li>
          <li className={styles.nav_link}>
            <a
              className={styles.no_styles_link}
              href="#"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              {t('projects')}
            </a>
          </li>
          {isOpen && (
            <li
              className={`${styles.nav_link} ${styles.btn_burguer}`}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <a className={styles.btn_container} href="#">
                <button className={styles.nav_btn} type="button">
                  {t('button')}
                </button>
              </a>
            </li>
          )}
        </ul>
        <div className={styles.nav_btn_container}>
          <a className={styles.btn_container} href="#">
            <button className={styles.nav_btn} type="button">
              {t('button')}
            </button>
          </a>
          <BurguerButton isOpen={isOpen} handleClick={handleClick} />
        </div>
      </nav>
    </header>
  );
};
export default NavBar;
