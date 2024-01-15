'use client';

import Link from 'next/link';
import Menu from './Menu';
import Logo from '../images/Logo.png';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Accessibility from './Accessibility';
import useSpeak from './Speak';

const Navbar = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isLetterSpacing, setIsLetterSpacing] = useState(false);

  const toggleContrast = () => {
    setIsHighContrast(!isHighContrast);
  };

  const toggleLetterSpacing = () => {
    setIsLetterSpacing(!isLetterSpacing);
  };

  const speak = useSpeak();
  return (
    <nav
      className={`flex flex-row md:flex-col justify-between mr-1 sm:mr-4 lg:mr-6 mt-3 md:mt-10 ${
        isLetterSpacing && 'tracking-wider'
      }`}
    >
      <div className="justify-between flex">
        <div className="flex md:justify-start ml-7 hover:scale-125 transition-transform duration-300 items-start">
          <Link href="/">
            <Image src={Logo} alt="logo" width={150} height={60} />
          </Link>
        </div>
        <div className="hidden md:flex md:items-center gap-5 lg:gap-7 xl:gap-10 text-sm md:text-base lg:text-2xl xl:text-3xl text-white">
          {['about', 'service', 'team', 'news', 'contact'].map(
            (link, index) => (
              <Link
                tabIndex={0}
                onFocus={() => speak(link)}
                href={`/${link}`}
                key={index}
              >
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
        <Accessibility
          toggleContrast={toggleContrast}
          isHighContrast={isHighContrast}
          toggleLetterSpacing={toggleLetterSpacing}
          isLetterSpacing={isLetterSpacing}
        />
      </div>
      <div className="md:hidden flex items-center mr-2 z-20 mt-10">
        <Menu
          speak={speak}
          isHighContrast={isHighContrast}
          isLetterSpacing={isLetterSpacing}
        />
      </div>
    </nav>
  );
};

export default Navbar;
