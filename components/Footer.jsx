'use client';

import Link from 'next/link';

import useSpeak from './Speak';

const Footer = () => {
  const speak = useSpeak();

  return (
    <div className="h-[180px] w-full sm:h-[120px] bg-blue text-white flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-3 md:gap-4 text-xs md:text-sm lg:text-md xl:text-lg">
      <div className="flex justify-center xs:justify-around sm:justify-center gap-10 w-full sm:gap-4 md:gap-6 px-2">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 md:gap-6">
          <Link tabIndex={-1} href="/about">
            About
          </Link>
          <Link tabIndex={-1} href="/services">
            Services
          </Link>
          <Link tabIndex={-1} href="/team">
            Team
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 md:gap-6">
          <Link tabIndex={-1} href="/news">
            News
          </Link>

          <Link tabIndex={-1} href="/contact">
            Contact
          </Link>

          <Link onFocus={() => speak('Careers')} href="/careers">
            Careers
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 md:gap-6">
          <Link onFocus={() => speak('Privacy')} href="/privacy">
            Privacy
          </Link>
          <Link onFocus={() => speak('Disclaimer')} href="/disclaimer">
            Disclaimer
          </Link>
          <Link
            onFocus={() => speak('Looking for another clinic?')}
            href="/anotherclinic"
          >
            Looking for another clinic?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
