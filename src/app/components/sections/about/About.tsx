'use client';
import React, { useEffect, useState, useRef } from 'react';
import { gabarito } from '@/app/fonts.ts';
import styles from '@/app/components/sections/about/about.module.css';
import { useTranslation } from 'react-i18next';
import Profile from '../../profile/Profile.tsx';
import Brand_img from '../../brand_img/Brand_img.tsx';

const About = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'About' });
  const [indiceActual, setIndiceActual] = useState(0);
  const intervaloRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    iniciarIntervalo();
    return () => {
      if (intervaloRef.current) {
        clearInterval(intervaloRef.current);
      }
    };
  }, []);

  const iniciarIntervalo = () => {
    intervaloRef.current = setInterval(() => {
      setIndiceActual((indiceActual) => (indiceActual + 1) % 2);
    }, 5000);
  };

  const pausarIntervalo = () => {
    if (intervaloRef.current) {
      clearInterval(intervaloRef.current);
      intervaloRef.current = null;
    }
  };
  // control de click en los circulos
  const handleDotClick = (index: number) => {
    pausarIntervalo();
    setIndiceActual(index);
  };
  //posiciones del puntero
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipeGesture();
  };

  //control de toques del slider
  const handleSwipeGesture = () => {
    const minSwipeDistance = 60; // Distancia mínima para considerar el deslizamiento válido
    const distance = touchEndX - touchStartX;

    if (distance < -minSwipeDistance || distance > minSwipeDistance) {
      setIndiceActual(1 - indiceActual);
      pausarIntervalo();
      iniciarIntervalo();
    }
  };

  return (
    <section id="about" className={styles.about_container}>
      <div className={styles.intro}>
        <div className={styles.are}>{t('section')}</div>
        <h2 className={`${gabarito.className} ${styles.title}`}>
          {t('title')}
        </h2>
      </div>
      <div className={styles.extra_info}>
        <div className={styles.logo_desc_profile_container}>
          <div className={styles.logo_more_desc}>
            <img className={styles.logo} src="/logo.jpg" alt="logo" />
            <p className={styles.desc}>{t('description')}</p>
          </div>
          <div
            className={styles.profile_container}
            onTouchEnd={handleTouchEnd}
            onTouchStart={handleTouchStart}
            onMouseEnter={pausarIntervalo}
            onMouseLeave={iniciarIntervalo}
          >
            {indiceActual === 1 ? (
              <Profile
                name="Gonzalo Mansilla"
                linkedIn="https://www.linkedin.com/in/gmansilla-se-utn/"
                msg="mailto:gonzalo2nm@gmail.com?subject=Question&body=Hello,%20I%20would%20like%20to%20get%20information%20about..."
                pathphoto="/gonza.jpg"
              />
            ) : (
              <Profile
                name="Sixto Cabrera"
                linkedIn="https://www.linkedin.com/in/sixto-cabrera-snctech/"
                msg="mailto:six_cabre@outlook.com?subject=Question&body=Hello,%20I%20would%20like%20to%20get%20information%20about..."
                pathphoto="/sixto.jpg"
              />
            )}
            <div className={styles.dot_container}>
              <span
                className={
                  indiceActual === 1
                    ? `${styles.dot} ${styles.i_slid_actual}`
                    : styles.dot
                }
                onClick={() => handleDotClick(1)}
              ></span>
              <span
                className={
                  indiceActual === 0
                    ? `${styles.dot} ${styles.i_slid_actual}`
                    : styles.dot
                }
                onClick={() => handleDotClick(0)}
              ></span>
            </div>
          </div>
        </div>
        <div className={styles.info_container}>
          <div className={styles.partition_info}>
            <h3 className={`${gabarito.className} ${styles.p_title}`}>
              {t('title2')}
            </h3>
            <p className={styles.p_desc}>{t('description2')}</p>
          </div>
          <div className={styles.partition_info}>
            <h3 className={`${gabarito.className} ${styles.p_title}`}>
              {t('title3')}
            </h3>
            <p className={styles.p_desc}>{t('description3')}</p>
          </div>
          <div className={styles.partition_info}>
            <h3 className={`${gabarito.className} ${styles.p_title}`}>
              {t('title1')}
            </h3>
            <p className={styles.p_desc}>{t('description1')}</p>
          </div>
        </div>
                  <div className={`${styles.partition_info_brands} ${styles.div_center}`}>
            <h3 className={`${gabarito.className} ${styles.p_title} ${styles.p_title_center}`}>
              {t('tecnologies')}
            </h3>
            <div className={styles.brands_container}>
              <Brand_img
                src='/react_brand.svg'
                alt='React'
              />
              <Brand_img
                src='/nodejs_brand.svg'
                alt='NodeJS'
              />
              <Brand_img
                src='/mysql_brand.svg'
                alt="MySQL"
              />
              <Brand_img
                src='/mongodb_brand.svg'
                alt="MongoDB"
              /> 
              <Brand_img
                src='/html5_brand.svg'
                alt="HTML5"
              />
              <Brand_img
                src='/js_brand.svg'
                alt="JavaScript"
              />
              <Brand_img
                src='/google_cloud_brand.svg'
                alt="Google Cloud"
              />
              <Brand_img
                src='/css3_brand.svg'
                alt="CSS3"
              />
              <Brand_img
                src='/ts_brand.svg'
                alt="Typescript"
              />
              <Brand_img
                src='/nextjs_brand.svg'
                alt="NextJS"
              />                           
            </div>
          </div>
      </div>
    </section>
  );
};

export default About;
