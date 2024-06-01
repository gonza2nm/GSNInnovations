'use client';
import React, { useEffect, useState } from 'react';
import photo1 from '@/../public/images/fotoArenaNoche.jpg';
import photo2 from '@/../public/images/fotoCeleste.jpg';
import photo3 from '@/../public/images/fotoEspacio.jpg';
import photo4 from '@/../public/images/fotoPaisaje.jpg';
import photo5 from '@/../public/images/fotoVerde.jpg';
import styles from '@/app/styles/index.module.css';
const images = [photo1, photo2, photo3, photo4, photo5];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <img
      className={styles.img_bg}
      src={images[currentIndex].src}
      alt="Slideshow image"
    />
  );
};
export default ImageSlider;
