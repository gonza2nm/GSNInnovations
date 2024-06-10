import React from 'react';
import { useTranslations } from 'next-intl';
import styles from '@/app/styles/contact.module.css';
import { gabarito } from '@/app/fonts.ts';
import ContactForm from '../ContactForm.tsx';

const Contact = () => {
  const t = useTranslations('Contact');
  return (
    <section id="contact" className={styles.contact_container}>
      <div className={styles.container_general}>
        <div className={styles.info}>
          <h2 className={`${styles.title} ${gabarito.className}`}>
            {t('title')}
          </h2>
          <p className={styles.desc}>{t('description')}</p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
