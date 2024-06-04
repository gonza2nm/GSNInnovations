import React from 'react';
import { useTranslations } from 'next-intl';
import styles from '@/app/styles/contact.module.css';
import { gabarito } from '@/app/fonts.ts';

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
        <form className={styles.form_container}>
          <div className={styles.input_grid}>
            <div>
              <label className={styles.label} htmlFor="name">
                {t('name')}
              </label>
              <input
                className={styles.input}
                id="name"
                placeholder={t('pName')}
                type="text"
              />
            </div>
            <div>
              <label className={styles.label} htmlFor="email">
                {t('email')}
              </label>
              <input
                className={styles.input}
                id="email"
                type="email"
                placeholder={t('pEmail')}
              />
            </div>
          </div>
          <div className={styles.textarea_container}>
            <label className={styles.label} htmlFor="message">
              {t('message')}
            </label>
            <textarea
              className={styles.textarea}
              id="message"
              rows={5}
              placeholder={t('pMessage')}
            ></textarea>
          </div>
          <div className={styles.btn_container}>
            <button className={styles.btn} type="button">
              {t('btn')}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
