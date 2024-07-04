'use client';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import styles from '../styles/navbar.module.css';
import MenuIcon from './icons/MenuIcon.tsx';
import CloseMenu from './icons/CloseMenu.tsx';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('NavBar');
  return (
    <header id={styles.header}>
      <nav className={`${styles.nav} ${isOpen ? styles.nav_open : ''}`}>
        <a className={styles.logo + ' ' + styles.no_styles_link} href="#home">
          GSN Innovations
        </a>
        <ul
          className={
            isOpen ? `${styles.ul_nav} ${styles.active}` : `${styles.ul_nav}`
          }
        >
          <li className={styles.close_btn_container}>
            <CloseMenu
              className={styles.close_btn}
              close={() => {
                setIsOpen(false);
              }}
            />
          </li>
          <li className={styles.li_links}>
            <a
              className={`${styles.no_styles_link} ${styles.link}`}
              href="#about"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              {t('about')}
            </a>
          </li>
          <li className={styles.li_links}>
            <a
              className={`${styles.no_styles_link} ${styles.link}`}
              href="#services"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              {t('services')}
            </a>
          </li>
          {/*<li className={styles.li_links}>
            <a
              className={`${styles.no_styles_link} ${styles.link}`}
              href="#portfolio"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              {t('portfolio')}
            </a>
          </li>*/}
          <li className={styles.li_links}>
            <a
              href="#contact"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <button className={styles.btn} type="button">
                {t('main_button')}
              </button>
            </a>
          </li>
        </ul>
        <div className={styles.menu_btn_container}>
          <MenuIcon
            className={styles.menu_btn}
            open={() => {
              setIsOpen(true);
            }}
          />
        </div>
      </nav>
    </header>
  );
};
export default NavBar;
