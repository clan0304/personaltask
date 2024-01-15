import { useState, useEffect } from 'react';

const useSpeak = () => {
  const [isUsingKeyboard, setIsUsingKeyboard] = useState(false);

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === 'Tab') {
        setIsUsingKeyboard(true);
      }
    };

    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  const speak = (text) => {
    if (isUsingKeyboard) {
      const msg = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(msg);
    }
  };

  return speak;
};

export default useSpeak;
