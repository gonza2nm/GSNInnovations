import React from 'react';
import ImageSlider from './ImageSlider.tsx';
import styles from '@/app/styles/index.module.css';

const MainInfo = () => {
  return (
    <section id={styles.home}>
      <div className={styles.home_container}>
        <ImageSlider />
        <div className={styles.data_container}>
          <h1 className={styles.group_name}>Sixto y Gonza Title</h1>
          <p className={styles.description}>datos</p>
        </div>
      </div>
    </section>
  );
};

export default MainInfo;
