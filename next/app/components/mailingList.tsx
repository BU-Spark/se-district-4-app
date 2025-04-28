"use client";

import { FaEnvelope, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

export function MailingListBanner() {
  // State to control whether the banner is visible
  const [isVisible, setIsVisible] = useState(true);

  // Function to hide the banner
  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null; // Don't render the banner if not visible

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#dddddd] text-white py-4 flex justify-between items-center px-6 md:px-32 z-50">
      {/* Banner Content */}
      <span className="text-lg md:text-xl text-sm lora text-[#1A2C56]">
        Join Our Mailing List
      </span>

      <div className="flex items-center space-x-4">
        {/* Subscribe Button */}
        <a
          href="https://lp.constantcontactpages.com/su/6umkRa8"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-[#1A2C56] text-white py-2 px-4 rounded-md text-sm font-semibold hover:bg-[#e67e22] transition duration-300"
        >
          <FaEnvelope className="mr-2" size={20} />
          Subscribe
        </a>

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="text-[#1A2C56] bg-transparent hover:bg-[#363636] hover:text-white p-2 rounded-full"
        >
          <FaTimes size={20} />
        </button>
      </div>
    </div>
  );
}
