'use client';

import React from 'react';
import { useLetterSpacing } from './hooks/useLetterSpacing';

const MainSentence = () => {
  const { isLetterSpacing } = useLetterSpacing();
  return (
    <div
      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center ${
        isLetterSpacing && 'tracking-wider'
      }`}
    >
      <p className="text-white text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-lato whitespace-nowrap my-3">
        Lifecare Essendon
      </p>
      <p className="text-white text-[12px] xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-lato whitespace-nowrap">
        Leaders in physiotherapy and sports medicine
      </p>
    </div>
  );
};

export default MainSentence;
