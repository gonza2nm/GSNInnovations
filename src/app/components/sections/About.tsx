import { useTranslations } from 'next-intl';
import React from 'react';
import { gabarito } from '@/app/fonts.ts';
import Image from 'next/image';

const About = () => {
  const t = useTranslations('About');
  return (
    <section id="about">
      <div>
        <div>{t('section')}</div>
        <h2 className={`${gabarito.className} `}>{t('title')}</h2>
        <p>{t('description')}</p>
      </div>
      <div>
        <div>
          <div>
            <Image src={''} alt="" width={'300'} height={'300'} />
            <div>
              <div>Gonzalo Mansilla</div>
              <p>
                Front-end developer & Future System Analist "poner traduccion"
              </p>
            </div>
          </div>
          <div>
            <Image src={''} alt="" width={'300'} height={'300'} />
            <div>
              <div>Sixto Cabrera</div>
              <p>Back-end developer "poner traduccion"</p>
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
