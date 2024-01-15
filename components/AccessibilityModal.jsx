'use client';
import Image from 'next/image';
import { IoMdClose } from 'react-icons/io';
import Logo from '../images/Logo.png';

const AccessibilityModal = ({ onClose, toggleContrast }) => {
  return (
    <div className="fixed right-0 top-[200px] w-full sm:w-1/2 h-[500px] bg-blue flex flex-col text-white">
      <div className="flex justify-between m-3">
        <Image src={Logo} alt="logo" width={120} height={30} />

        <IoMdClose
          size={40}
          onClick={onClose}
          className="hover:cursor-pointer"
        />
      </div>
      <div className="ml-3 mt-3">
        <p className="text-xl font-semibold mb-3">Personalisation Options</p>
        <p>
          Welcome to our accessibility toolbar! Adjust the options below to
          cater the website to your accessibility needs.
        </p>
      </div>
      <div className="flex justify-center w-full gap-3 mt-10">
        <button
          onClick={toggleContrast}
          className="bg-white w-[200px] h-[100px] text-black font-semibold"
        >
          High Contrast
        </button>
      </div>
    </div>
  );
};

export default AccessibilityModal;
