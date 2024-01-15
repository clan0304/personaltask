'use client';

import React, { useState } from 'react';
import AccessibilityModal from './AccessibilityModal';
import { IoAccessibility } from 'react-icons/io5';

const Accessibility = ({ toggleContrast, toggleSpacing }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div
        onClick={() => setIsModalOpen(!isModalOpen)}
        className="bg-white relative flex group"
      >
        <button className="hidden hover:pointer-cursor group-hover:block bg-white p-4 rounded shadow-lg font-semibold">
          Discover your personalisation options
        </button>
        <button className="p-2 bg-white rounded-full hover:cursor-pointer">
          <IoAccessibility size={40} />
        </button>
      </div>
      {isModalOpen && (
        <AccessibilityModal
          onClose={closeModal}
          toggleContrast={toggleContrast}
          toggleSpacing={toggleSpacing}
        />
      )}
    </div>
  );
};

export default Accessibility;
