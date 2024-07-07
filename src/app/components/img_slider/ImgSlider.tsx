'use client';
import React, { useEffect, useState } from 'react';

type ImgSliderProps = {
  className: string;
};

const imagenesSVG = [
  '/img1.svg',
  '/img2.svg',
  '/img3.svg',
  '/img4.svg',
  'img5.svg',
];

const ImgSlider = ({ className }: ImgSliderProps) => {
  const [inidiceActual, setIndiceActual] = useState(0);
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceActual(
        (indiceActual) => (indiceActual + 1) % imagenesSVG.length
      );
    }, 3000);
    return () => clearInterval(intervalo); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <img className={className} src={imagenesSVG[inidiceActual]} alt="Image" />
  );
};

export default ImgSlider;
