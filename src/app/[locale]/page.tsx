import { useTranslations } from 'next-intl';
import ImageSlider from '../components/index/ImageSlider.tsx';

export default function Index() {
  const t = useTranslations('Index');
  return (
    <div>
      <ImageSlider>
        <h1>Sixto y Gonza Title</h1>
      </ImageSlider>
    </div>
  );
}
