'use client';
import { useTranslations } from 'next-intl';
import React from 'react';
import styles from '@/app/styles/home.module.css';
import Image from 'next/image';
import { gabarito } from '@/app/fonts.ts';
import photo1 from '@/../public/fotoPaisaje.jpg';

const Home = () => {
  const t = useTranslations('Home');
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
          <a className={`${styles.btn} ${styles.nd_btn}`} href="#portfolio">
            {t('second_btn')}
          </a>
        </div>
      </div>
      <div className={styles.img_container}>
        <Image
          className={styles.img}
          width={'935'}
          height={'935'}
          src={photo1}
          alt=""
        />
      </div>
    </section>
  );
};

export default Home;
