'use client';
import React from 'react';
import styles from '@/app/components/footer/footer.module.css';
import { useTranslation } from 'react-i18next';
import X_brand from '../icons/social_media/X_brand.tsx';
import Ig_brand from '../icons/social_media/Ig_brand.tsx';
import GitHub_brand from '../icons/social_media/GitHub_brand.tsx';

const Footer = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'Footer' });
  return (
      <footer className={styles.footer_container}>
        <div className={styles.company_name}>{t("company_name")}</div>
        <div className={styles.sm_container}>
          <a href='https://x.com/gsninnovations' target='_blank'>
            <X_brand
              clasName={styles.img_sm}/>
          </a>
          <a href='https://www.instagram.com/gsninnovations' target='_blank'>
            <Ig_brand
              clasName={styles.img_sm}/>
          </a>
          <a href='https://github.com/gsninnovations' target='_blank'>
            <GitHub_brand
              clasName={styles.img_sm}/>
          </a>
        </div>
        <div className={styles.rights}>{t("text")}</div>
      </footer>
    );
};

export default Footer;
