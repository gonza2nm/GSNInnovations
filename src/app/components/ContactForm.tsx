'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from '@/app/styles/contact.module.css';
import { useTranslations } from 'next-intl';
import emailjs from '@emailjs/browser';

const apiKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
const formInitialValues: FormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const ContactForm = () => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const t = useTranslations('Contact');
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>(formInitialValues);

  useEffect(() => {
    const isFormComplete = Object.values(formData).every(
      (value) => value !== ''
    );
    setDisabled(!isFormComplete);
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('se ejecuto');
    if (apiKey && serviceId && templateId && formRef.current) {
      setIsSending(true);
      try {
        await emailjs.sendForm(serviceId, templateId, formRef.current, {
          publicKey: apiKey,
        });
        setFormData(formInitialValues);
      } catch (error) {
        console.error(error);
      }
      setIsSending(false);
    }
  };

  return (
    <form className={styles.form_container} ref={formRef} onSubmit={sendEmail}>
      <div className={styles.input_grid}>
        <div className={styles.noBorder}>
          <label className={styles.label} htmlFor="name">
            {t('name')}
            <span className={styles.red}> *</span>
          </label>
          <input
            onChange={handleChange}
            value={formData.name}
            autoComplete="name"
            name="name"
            className={styles.input}
            id="name"
            placeholder={t('pName')}
            type="text"
          />
        </div>
        <div className={styles.noBorder}>
          <label className={styles.label} htmlFor="email">
            {t('email')}
            <span className={styles.red}> *</span>
          </label>
          <input
            onChange={handleChange}
            value={formData.email}
            autoComplete="email"
            name="email"
            className={styles.input}
            id="email"
            type="email"
            placeholder={t('pEmail')}
          />
        </div>
      </div>
      <div className={styles.email_container}>
        <div className={styles.noBorder}>
          <label className={styles.label} htmlFor="subject">
            {t('subject')}
            <span className={styles.red}> *</span>
          </label>
          <input
            onChange={handleChange}
            value={formData.subject}
            autoComplete="off"
            className={styles.input}
            name="subject"
            id="subject"
            type="text"
            placeholder={t('subject')}
          />
        </div>
        <div className={styles.noBorder}>
          <label className={styles.label} htmlFor="message">
            {t('message')}
            <span className={styles.red}> *</span>
          </label>
          <textarea
            onChange={handleChange}
            value={formData.message}
            name="message"
            className={styles.textarea}
            id="message"
            rows={5}
            placeholder={t('pMessage')}
            autoComplete="off"
          ></textarea>
        </div>
      </div>
      <div className={styles.btn_container}>
        <button
          className={disabled || isSending ? styles.btnDisabled : styles.btn}
          disabled={disabled || isSending}
          type="submit"
        >
          {isSending ? (
            <div className={styles.spinner_container}>
              {t('sending')}
              <div className={styles.spinner}></div>
            </div>
          ) : (
            t('btn')
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
/*const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID_EMAILJS || '';
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID_EMAILJS || '';
    const apiKey = process.env.NEXT_PUBLIC_API_KEY_EMAILJS;

    if (formRef.current) {
      emailjs
        .sendForm(serviceId, templateId, formRef.current, apiKey)
        .then((result) => console.log(result.text))
        .catch((error) => console.error(error));
      console.log(templateId);
      console.log(serviceId);
    } else {
      console.error('el formulario no esta disponible');
    }
  };*/
