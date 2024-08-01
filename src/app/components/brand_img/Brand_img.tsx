import React from 'react'
import styles from '@/app/components/brand_img/brand_img.module.css'

type Props = {
  src:string,
  alt:string
}

const Brand_img = ({src,alt}: Props) => {
  return (
    <img
        className={styles.img}
        src={src}
        alt={alt}
    />
  )
}
export default Brand_img;