import Link from 'next/link';
import Menu from './Menu';
import Logo from '../images/Logo.png';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="flex justify-between mr-2 sm:mr-10 md:mr-16 xl:mr-28 mt-3 sm:mt-10">
      <div className="flex sm:justify-start items-center ml-7 hover:scale-125 transition-transform duration-300">
        <Link href="/">
          <Image src={Logo} alt="logo" width={150} height={60} />
        </Link>
      </div>
      <div className="hidden sm:flex sm:items-center gap-3 lg:gap-5 text-sm md:text-md lg:text-lg text-white">
        <Link href="/about">
          <div className="hover:text-black duration-500">About</div>
        </Link>
        <Link href="/service">
          <div className="hover:text-black duration-500">Service</div>
        </Link>
        <Link href="/team">
          <div className="hover:text-black duration-500">Team</div>
        </Link>
        <Link href="/news">
          <div className="hover:text-black duration-500">News</div>
        </Link>
        <Link href="/contact">
          <div className="hover:text-black duration-500">Contact</div>
        </Link>
        <Link href="/booksession">
          <div className="bg-green px-4 rounded-full hover:text-black duration-500">
            Book a Session
          </div>
        </Link>
      </div>
      <div className="sm:hidden flex mr-2 z-20">
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
