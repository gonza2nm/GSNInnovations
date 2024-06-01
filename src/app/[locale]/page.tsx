import { useTranslations } from 'next-intl';
import styles from '@/app/styles/index.module.css';
import MainInfo from '../components/MainInfo.tsx';
import AboutSection from '../components/AboutSection.tsx';

export default function Index() {
  const t = useTranslations('Index');
  return (
    <main className={styles.img_data_container}>
      <MainInfo />
      <AboutSection />
    </main>
  );
}
