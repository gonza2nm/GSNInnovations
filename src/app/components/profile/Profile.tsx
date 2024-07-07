import React from 'react';
import { useTranslation } from 'react-i18next';
import EmailSVG from '../icons/EmailSVG.tsx';
import LinkedInSVG from '../icons/LinkedInSVG.tsx';
import styles from './profile.module.css';

const Profile = ({
  name,
  linkedIn,
  msg,
  pathphoto,
}: {
  name: string;
  linkedIn: string;
  msg: string;
  pathphoto: string;
}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'About' });
  return (
    <div className={styles.profile}>
      <img className={styles.img_profile} src={pathphoto} alt="profile" />
      <div className={styles.data_profile}>
        <div className={styles.name}>{name}</div>
        <p className={styles.profesion}>
          {name === 'Gonzalo Mansilla' ? t('profesionG') : t('profesionS')}
        </p>
      </div>
      <div className={styles.contact_container}>
        <div className={styles.btn_contact_container}>
          <EmailSVG className={styles.svg} />
          <a className={styles.btn_contact} target="_blank" href={msg}>
            Contact
          </a>
        </div>
        <div className={styles.btn_in_container}>
          <LinkedInSVG className={styles.svg} />
          <a className={styles.btn_linkedin} href={linkedIn} target="_blank">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
