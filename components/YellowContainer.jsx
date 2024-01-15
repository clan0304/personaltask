'use client';

import React from 'react';
import { useLetterSpacing } from './hooks/useLetterSpacing';

const YellowContainer = () => {
  const { isLetterSpacing } = useLetterSpacing();
  return (
    <div
      className={`bg-yellow text-black font-lato w-full justify-center sm:justify-start sm:w-1/2 flex items-center sm:pl-10 lg:pl-20 text-3xl xs:text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold aspect-[4/3] ${
        isLetterSpacing && 'tracking-wider'
      }`}
    >
      We lead the
      <br />
      way when it
      <br /> comes to
      <br />
      range, quality
      <br />
      and expertise.
    </div>
  );
};

export default YellowContainer;
