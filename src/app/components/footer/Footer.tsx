'use client';
import React from 'react';
import styles from '@/app/components/footer/footer.module.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'Footer' });
  return <footer className={styles.footer_container}>{t('text')}</footer>;
};

export default Footer;
