import React from 'react';
import styles from '@/app/components/switch/swtich.module.css';

const Switch = ({
  isOn,
  handleToogle,
  notCheckedString,
  checkedString,
  menuOpen,
}: {
  isOn: boolean;
  handleToogle: () => void;
  notCheckedString: string;
  checkedString: string;
  menuOpen: boolean;
}) => {
  return (
    <div className={styles.container}>
      <p
        className={
          menuOpen ? `${styles.idioma} ${styles.color_black}` : styles.idioma
        }
      >
        {notCheckedString}
      </p>
      <label className={styles.switch}>
        <input checked={isOn} onChange={handleToogle} type="checkbox" />
        <span className={styles.slider} />
      </label>
      <p
        className={
          menuOpen ? `${styles.idioma} ${styles.color_black}` : styles.idioma
        }
      >
        {checkedString}
      </p>
    </div>
  );
};

export default Switch;
