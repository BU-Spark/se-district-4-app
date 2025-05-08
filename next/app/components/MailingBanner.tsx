"use client";

import { useState } from "react";

export function MailingListBanner() {
  return (
    <div className="flex justify-center mt-12 mb-12 bg-white">
      <div className="bg-gray-100 rounded-lg shadow-md p-8 flex flex-col md:flex-row items-center w-[90%] md:w-[70%] max-w-4xl">
        {/* Left side: text */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 lora">
            <span className="italic text-center">Join our Mailing List</span> 
          </h2>
          <p className="text-gray-600">
            Subscribe to our mailing list to receive the latest news and updates every week.
          </p>
        </div>

        {/* Right side: subscribe button */}
        <div className="md:w-1/3 flex justify-center md:justify-end mt-6 md:mt-0">
          <a
            href="https://lp.constantcontactpages.com/su/6umkRa8"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1A2C56] text-white font-semibold py-3 px-8 rounded-md hover:bg-[#D22D23] text-center"
          >
            SUBSCRIBE
          </a>
        </div>
      </div>
    </div>
  );
}
