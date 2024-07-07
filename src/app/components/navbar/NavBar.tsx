'use client';
import { useEffect, useState } from 'react';
import styles from '@/app/components/navbar/NavBar.module.css';
import MenuIcon from '../icons/MenuIcon.tsx';
import CloseMenu from '../icons/CloseMenu.tsx';
import Switch from '../switch/Switch.tsx';
import '@/app/lib/i18n.js';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const { t, i18n } = useTranslation('translation', { keyPrefix: 'NavBar' });
  useEffect(() => {});
  const handleToogle = () => {
    window.scrollTo({ top: window.scrollY, behavior: 'instant' });
    if (i18n.language === 'en') {
      i18n.changeLanguage('es');
    } else {
      i18n.changeLanguage('en');
    }
    if (isOpen) {
      setIsOpen(false);
    }
    setIsOn(!isOn);
  };
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
              href="#"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              {t('home')}
            </a>
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
          <Switch
            menuOpen={isOpen}
            notCheckedString="ES"
            checkedString="EN"
            handleToogle={handleToogle}
            isOn={isOn}
          />
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
          <div className={styles.switch}>
            <Switch
              menuOpen={isOpen}
              notCheckedString="ES"
              checkedString="EN"
              handleToogle={handleToogle}
              isOn={isOn}
            />
          </div>
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
