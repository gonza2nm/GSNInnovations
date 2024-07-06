import React from 'react';
import styles from '@/app/components/sections/contact/contact.module.css';
import { gabarito } from '@/app/fonts.ts';
import ContactForm from '../../contact_form/ContactForm.tsx';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'Contact' });
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
