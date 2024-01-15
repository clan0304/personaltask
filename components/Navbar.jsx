'use client';

import Link from 'next/link';
import Menu from './Menu';
import Logo from '../images/Logo.png';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Accessibility from './Accessibility';

const Navbar = () => {
  const [isUsingKeyboard, setIsUsingKeyboard] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);

  const toggleContrast = () => {
    setIsHighContrast(!isHighContrast);
  };

  const speak = (text) => {
    if (isUsingKeyboard) {
      var msg = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(msg);
    }
  };
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

  return (
    <nav className="flex flex-row md:flex-col justify-between mr-2 sm:mr-10 lg:mr-16 mt-3 md:mt-10">
      <div className="justify-between flex">
        <div className="flex md:justify-start ml-7 hover:scale-125 transition-transform duration-300 items-start">
          <Link href="/">
            <Image src={Logo} alt="logo" width={150} height={60} />
          </Link>
        </div>
        <div className="hidden md:flex md:items-center gap-7 lg:gap-10 xl:gap-14 text-sm md:text-base tracking-wide lg:text-2xl xl:text-3xl text-white">
          {['about', 'service', 'team', 'news', 'contact'].map(
            (link, index) => (
              <Link onFocus={() => speak(link)} href={`/${link}`} key={index}>
                {link}
              </Link>
            )
          )}
          <Link
            href="booksession"
            onFocus={() => speak('Book a Session')}
            className={
              isHighContrast
                ? 'bg-darkGreen px-5 rounded-full font-semibold'
                : 'bg-green px-5 rounded-full'
            }
          >
            Book a Session
          </Link>
        </div>
      </div>
      <div className="flex justify-end md:mt-5 fixed right-3.5 top-[350px]">
        <Accessibility toggleContrast={toggleContrast} />
      </div>
      <div className="md:hidden flex items-center mr-2 z-20 mt-10">
        <Menu speak={speak} />
      </div>
    </nav>
  );
};

export default Navbar;
