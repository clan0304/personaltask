'use client';

import { createContext, useContext, useState } from 'react';

const LetterSpacingContext = createContext();

export const useLetterSpacing = () => useContext(LetterSpacingContext);

export const LetterSpacingProvider = ({ children }) => {
  const [isLetterSpacing, setIsLetterSpacing] = useState(false);

  return (
    <LetterSpacingContext.Provider
      value={{ isLetterSpacing, setIsLetterSpacing }}
    >
      {children}
    </LetterSpacingContext.Provider>
  );
};
