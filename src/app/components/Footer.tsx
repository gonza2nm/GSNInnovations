import { useTranslations } from 'next-intl';
import React from 'react';
import styles from '@/app/styles/footer.module.css';

const Footer = () => {
  const t = useTranslations('Footer');
  return <footer className={styles.footer_container}>{t('text')}</footer>;
};

export default Footer;
