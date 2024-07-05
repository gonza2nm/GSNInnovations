'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

type ImgSliderProps = {
  className: string;
  width: number;
  height: number;
};

const imagenesSVG = ['/m1.svg', '/m2.svg', '/m3.svg', '/m4.svg'];

const ImgSlider = ({ className, width, height }: ImgSliderProps) => {
  const [inidiceActual, setIndiceActual] = useState(0);
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceActual(
        (indiceActual) => (indiceActual + 1) % imagenesSVG.length
      );
    }, 5000);
    return () => clearInterval(intervalo); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <img
      src={imagenesSVG[inidiceActual]}
      alt="Image"
      width={width}
      height={height}
    />
  );
};

export default ImgSlider;
