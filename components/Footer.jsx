import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="h-[180px] w-full sm:h-[120px] bg-blue text-white flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-3 md:gap-4 text-xs md:text-sm lg:text-md xl:text-lg">
      <div className="flex justify-center xs:justify-around sm:justify-center gap-10 w-full sm:gap-4 md:gap-6 px-2">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 md:gap-6">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/team">Team</Link>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 md:gap-6">
          <Link href="/news">News</Link>

          <Link href="/contact">Contact</Link>

          <Link href="/careers">Careers</Link>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 md:gap-6">
          <Link href="/privacy">Privacy</Link>
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/anotherclinic">Looking for another clinic?</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
