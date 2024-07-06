import React from 'react';
import { gabarito } from '@/app/fonts.ts';
import styles from '@/app/components/sections/about/about.module.css';
import EmailSVG from '../../icons/EmailSVG.tsx';
import LinkedInSVG from '../../icons/LinkedInSVG.tsx';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'About' });
  return (
    <section id="about" className={styles.about_container}>
      <div className={styles.intro}>
        <div className={styles.are}>{t('section')}</div>
        <h2 className={`${gabarito.className} ${styles.title}`}>
          {t('title')}
        </h2>
        <p className={styles.desc}>{t('description')}</p>
      </div>
      <div className={styles.extra_info}>
        <div className={styles.profile_container}>
          <div className={styles.profile}>
            <img
              className={styles.img_profile}
              src={'/gonza.jpg'}
              alt="profile"
            />
            <div className={styles.data_profile}>
              <div className={styles.name}>Gonzalo Mansilla</div>
              <p className={styles.profesion}>{t('profesionG')}</p>
            </div>
            <div className={styles.contact_container}>
              <div className={styles.btn_contact_container}>
                <EmailSVG className={styles.svg} />
                <a
                  className={styles.btn_contact}
                  target="_blank"
                  href="mailto:gonzalo2nm@gmail.com?subject=Question&body=Hello,%20I%20would%20like%20to%20get%20information%20about..."
                >
                  Contact
                </a>
              </div>
              <div className={styles.btn_in_container}>
                <LinkedInSVG className={styles.svg} />
                <a
                  className={styles.btn_linkedin}
                  href="https://www.linkedin.com/in/gmansilla-se-utn/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className={styles.profile}>
            <img
              className={styles.img_profile}
              src={'/sixto.jpg'}
              alt="profile"
            />
            <div className={styles.data_profile}>
              <div className={styles.name}>Sixto Cabrera</div>
              <p className={styles.profesion}>{t('profesionS')}</p>
            </div>
            <div className={styles.contact_container}>
              <div className={styles.btn_contact_container}>
                <EmailSVG className={styles.svg} />
                <a
                  className={styles.btn_contact}
                  target="_blank"
                  href="mailto:six_cabre@outlook.com?subject=Question&body=Hello,%20I%20would%20like%20to%20get%20information%20about..."
                >
                  Contact
                </a>
              </div>
              <div className={styles.btn_in_container}>
                <LinkedInSVG className={styles.svg} />
                <a
                  className={styles.btn_linkedin}
                  href="https://www.linkedin.com/in/sixto-cabrera-snctech/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.info_container}>
          <div className={styles.partition_info}>
            <h3 className={`${gabarito.className} ${styles.p_title}`}>
              {t('title1')}
            </h3>
            <p className={styles.p_desc}>{t('description1')}</p>
          </div>
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
        </div>
      </div>
    </section>
  );
};

export default About;
