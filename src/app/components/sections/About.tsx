import { useTranslations } from 'next-intl';
import React from 'react';
import { gabarito } from '@/app/fonts.ts';
import Image from 'next/image';
import styles from '@/app/styles/about.module.css';
import EmailSVG from '../icons/EmailSVG.tsx';
import LinkedInSVG from '../icons/LinkedInSVG.tsx';

const About = () => {
  const t = useTranslations('About');
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
            <Image
              className={styles.img_profile}
              src={'/images/gonza.jpg'}
              alt="profile"
              width={'128'}
              height={'128'}
            />
            <div className={styles.data_profile}>
              <div className={styles.name}>Gonzalo Mansilla</div>
              <p className={styles.profesion}>{t('profesionG')}</p>
              <div className={styles.contact_container}>
                <div>
                  <EmailSVG />
                  <button>Contact</button>
                </div>
                <div>
                  <LinkedInSVG />
                  <button>LinkedIn</button>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.profile}>
            <Image
              className={styles.img_profile}
              src={'/images/fotoCeleste.jpg'}
              alt=""
              width={'128'}
              height={'128'}
            />
            <div className={styles.data_profile}>
              <div className={styles.name}>Sixto Cabrera</div>
              <p className={styles.profesion}>{t('profesionS')}</p>
              <div className={styles.contact_container}>
                <div>
                  <EmailSVG />
                  <button>Contact</button>
                </div>
                <div>
                  <LinkedInSVG />
                  <button>LinkedIn</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <h3>{t('title1')}</h3>
            <p>{t('description1')}</p>
          </div>
          <div>
            <h3>{t('title2')}</h3>
            <p>{t('description2')}</p>
          </div>
          <div>
            <h3>{t('title3')}</h3>
            <p>{t('description3')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
