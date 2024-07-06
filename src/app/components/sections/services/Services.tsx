import React from 'react';
import { gabarito } from '@/app/fonts.ts';
import styles from '@/app/components/sections/services/services.module.css';
import { useTranslation } from 'react-i18next';
const Services = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'Services' });
  return (
    <section id="services" className={styles.services_container}>
      <h2 className={`${gabarito.className} ${styles.title}`}>{t('title')}</h2>
      <div className={styles.general_container}>
        <div className={`${styles.strength_container} ${styles.bg_container}`}>
          <div className={styles.img_title_container}>
            <img
              className={styles.img}
              src={'/dpwa.svg'}
              width={250}
              height={250}
              alt="Custom Web Application Development image"
            />
            <h3 className={`${gabarito.className} ${styles.title_s}`}>
              {t('strengths1')}
            </h3>
          </div>
          <p className={styles.desc}>{t('desciption1')}</p>
        </div>
        <div className={styles.strength_container}>
          <div className={styles.img_title_container}>
            <img
              className={styles.img}
              src={'/design.svg'}
              width={250}
              height={250}
              alt="Web Application Design image"
            />
            <h3 className={`${gabarito.className} ${styles.title_s}`}>
              {t('strengths2')}
            </h3>
            <p className={styles.desc}>{t('desciption2')}</p>
          </div>
        </div>
        <div className={`${styles.strength_container} ${styles.bg_container}`}>
          <div className={styles.img_title_container}>
            <img
              className={styles.img}
              src={'/maintenance.svg'}
              width={250}
              height={250}
              alt="Web Application Maintenance image"
            />
            <h3 className={`${gabarito.className} ${styles.title_s}`}>
              {t('strengths3')}
            </h3>
          </div>
          <p className={styles.desc}>{t('desciption3')}</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
