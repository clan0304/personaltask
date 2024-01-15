'use client';

import { IoMenu } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import useSpeak from './Speak';
import { useLetterSpacing } from './hooks/LetterSpacingProvider';

const Menu = ({ isHighContrast }) => {
  const [isMobileToggle, setIsMobileToggle] = useState(false);
  const { isLetterSpacing } = useLetterSpacing();
  const speak = useSpeak();

  useEffect(() => {
    if (isMobileToggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileToggle]);

  return (
    <div>
      <div className="flex absolute top-2 right-2 justify-end z-40">
        <button
          className="hover:scale-125 transition-transform duration-500"
          onClick={() => setIsMobileToggle(!isMobileToggle)}
          onFocus={() => (isMobileToggle ? speak('Close') : speak('Menu'))}
        >
          {isMobileToggle ? <IoMdClose size={30} /> : <IoMenu size={30} />}
        </button>
      </div>

      {isMobileToggle && (
        <div
          className={`fixed top-0 left-0 w-full h-full z-30 bg-yellow opacity-0 scale-75 transition-all duration-700 ease-in-out ${
            isLetterSpacing && 'tracking-wider'
          }`}
          style={{
            animation: 'fadeIn 0.7s ease-in-out forwards',
          }}
        >
          <div className="flex flex-col gap-10 items-center text-black text-3xl font-semibold mt-32 h-[100vh]">
            {['about', 'service', 'team', 'news', 'contact'].map(
              (link, index) => (
                <Link
                  className="hover:text-white"
                  onFocus={() => speak(link)}
                  key={index}
                  href={`/${link}`}
                >
                  {link}
                </Link>
              )
            )}

            <Link
              className={
                isHighContrast
                  ? 'bg-green px-6 rounded-full hover:text-white duration-500'
                  : 'bg-darkGreen px-6 rounded-full hover:text-white duration-500'
              }
              href="/booksession"
              onFocus={() => speak('Book a Session')}
            >
              Book a Session
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
