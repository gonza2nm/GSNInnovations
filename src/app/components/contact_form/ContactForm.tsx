'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from '@/app/components/sections/contact/contact.module.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';

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
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>(formInitialValues);
  const [isValidInput, setIsValidInput] = useState({
    name: true,
    email: true,
    subject: true,
    message: true,
  });
  const [disabled, setDisabled] = useState<boolean>(false);
  const [isSending, setIsSending] = useState<boolean>(false);
  const { t } = useTranslation('translation', { keyPrefix: 'Contact' });

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
    if (value === '') {
      setIsValidInput({
        ...isValidInput,
        [name]: false,
      });
    } else {
      setIsValidInput({
        ...isValidInput,
        [name]: true,
      });
    }
  };

  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (apiKey && serviceId && templateId && formRef.current) {
      setIsSending(true);
      try {
        await emailjs.sendForm(serviceId, templateId, formRef.current, {
          publicKey: apiKey,
        });
        setFormData(formInitialValues);
        toast.success('cambiar a success', { autoClose: 5000 });
      } catch (error) {
        console.error(error);
        toast.error('cambiar a error', { autoClose: 5000 });
      }
      setIsSending(false);
    }
  };

  return (
    <>
      <form
        className={styles.form_container}
        ref={formRef}
        onSubmit={sendEmail}
      >
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
              className={
                isValidInput.name === true ? styles.input : styles.invalid_input
              }
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
              className={
                isValidInput.email === true
                  ? styles.input
                  : styles.invalid_input
              }
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
              className={
                isValidInput.subject === true
                  ? styles.input
                  : styles.invalid_input
              }
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
              className={
                isValidInput.message === true
                  ? styles.textarea
                  : styles.invalid_textarea
              }
              id="message"
              rows={5}
              placeholder={t('pMessage')}
              autoComplete="off"
            ></textarea>
          </div>
        </div>
        <div className={styles.btn_container}>
          <button
            className={disabled ? styles.btnDisabled : styles.btn}
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
      <ToastContainer />
    </>
  );
};

export default ContactForm;
