'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import MenuItem from '../../../public/menu.svg';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import styles from '@/app/styles/NavBar.module.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useParams().locale;
  const t = useTranslations('NavBar');
  return (
    <nav className={styles.navbar}>
      <div>
        <Link className={styles.noStylesLink} href={`/${locale}`}>
          Logo
        </Link>
      </div>
      <ul className={styles.navlist}>
        <Link className={styles.noStylesLink} href={`/${locale}/about`}>
          <li className={styles.navlink}>{t('about')}</li>
        </Link>
        <Link className={styles.noStylesLink} href={`/${locale}/projects`}>
          <li className={styles.navlink}>{t('projects')}</li>
        </Link>
      </ul>
      <div className="nav-buttons">
        <Link href={`/${locale}/about`}>
          <button className="nav-btn" type="button">
            {t('button')}
          </button>
        </Link>
        <Image
          className="itemMenu"
          src={MenuItem}
          alt="menu"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      </div>
    </nav>
  );
};

export default NavBar;
