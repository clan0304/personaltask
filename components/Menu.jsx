'use client';

import { IoMenu } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Menu = () => {
  const [isMobileToggle, setIsMobileToggle] = useState(false);

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
        >
          {isMobileToggle ? <IoMdClose size={25} /> : <IoMenu size={25} />}
        </button>
      </div>

      {isMobileToggle && (
        <div
          className="fixed top-0 left-0 w-full h-full z-30 bg-yellow opacity-0 scale-75 transition-all duration-700 ease-in-out"
          style={{
            animation: 'fadeIn 0.7s ease-in-out forwards',
          }}
        >
          <div className="flex flex-col gap-10 items-center text-black text-3xl font-semibold mt-32 h-[100vh]">
            <Link href="/about">
              <button className="hover:text-white duration-500 ease-in">
                About
              </button>
            </Link>
            <Link href="/service">
              <button className="hover:text-white duration-500">Service</button>
            </Link>
            <Link href="/team">
              <button className="hover:text-white duration-500">Team</button>
            </Link>
            <Link href="/news">
              <button className="hover:text-white duration-500">News</button>
            </Link>
            <Link href="/contact">
              <button className="hover:text-white duration-500">Contact</button>
            </Link>
            <Link href="/booksession">
              <button className="bg-green px-6 rounded-full hover:text-white duration-500">
                Book a Session
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
