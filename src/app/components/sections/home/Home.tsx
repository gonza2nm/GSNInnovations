'use client';
import React, { useContext } from 'react';
import styles from '@/app/components/sections/home/home.module.css';
import { gabarito } from '@/app/fonts.ts';
import ImgSlider from '../../img_slider/ImgSlider.tsx';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'Home' });
  return (
    <section id="home" className={styles.home_container}>
      <div className={styles.info}>
        <h1 className={`${gabarito.className} ${styles.slogan}`}>
          {t('slogan')}
        </h1>
        <p className={styles.description}>{t('description')}</p>
        <div className={styles.btns_container}>
          <a href="#contact">
            <button className={`${styles.btn} ${styles.st_btn}`} type="button">
              {t('first_btn')}
            </button>
          </a>
          {/*<a className={`${styles.btn} ${styles.nd_btn}`} href="#portfolio">
            {t('second_btn')}
          </a>*/}
        </div>
      </div>
      <div className={styles.img_container}>
        <ImgSlider className={styles.img} />
      </div>
    </section>
  );
};

export default Home;
