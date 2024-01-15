'use client';
import Image from 'next/image';
import { IoMdClose } from 'react-icons/io';
import Logo from '../images/Logo.png';

const AccessibilityModal = ({
  onClose,
  toggleContrast,
  toggleLetterSpacing,
  isHighContrast,
  isLetterSpacing,
}) => {
  return (
    <div className="fixed right-0 top-[200px] w-full sm:w-1/2 lg:w-2/5 h-[500px] bg-blue flex flex-col text-white rounded-xl">
      <div className="flex justify-between m-3">
        <Image src={Logo} alt="logo" width={180} height={30} />

        <IoMdClose
          size={40}
          onClick={onClose}
          className="hover:cursor-pointer"
        />
      </div>
      <div className="mx-3 mt-3">
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
          {!isHighContrast ? (
            <div>
              <p>High Contrast</p> <p className="text-2xl font-bold">On</p>
            </div>
          ) : (
            <div>
              <p>High Contrast</p>{' '}
              <p className="text-2xl font-bold text-red">Off</p>
            </div>
          )}
        </button>
        <button
          onClick={toggleLetterSpacing}
          className="bg-white w-[200px] h-[100px] text-black font-semibold"
        >
          {!isLetterSpacing ? (
            <div>
              <p>Wider Spacing</p> <p className="text-2xl font-bold">On</p>
            </div>
          ) : (
            <div>
              <p>Wider Spacing</p>{' '}
              <p className="text-2xl font-bold text-red">Off</p>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default AccessibilityModal;
