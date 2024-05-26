'use client';
import React, { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const NavBar = () => {
  const locale = useParams().locale;
  const t = useTranslations('NavBar');
  return (
    <nav>
      <div>logo</div>
      <ul>
        <li>{t('about')}</li>
        <li>{t('projects')}</li>
      </ul>
      <Link href={`/${locale}/about`}>
        <button type="button">{t('button')}</button>
      </Link>
    </nav>
  );
};

export default NavBar;
