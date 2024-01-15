'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const LetterSpacingContext = createContext();

export const useLetterSpacing = () => useContext(LetterSpacingContext);

export const LetterSpacingProvider = ({ children }) => {
  const [isLetterSpacing, setIsLetterSpacing] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('isLetterSpacing');
    if (saved !== null) {
      setIsLetterSpacing(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('isLetterSpacing', JSON.stringify(isLetterSpacing));
  }, [isLetterSpacing]);

  return (
    <LetterSpacingContext.Provider
      value={{ isLetterSpacing, setIsLetterSpacing }}
    >
      {children}
    </LetterSpacingContext.Provider>
  );
};
