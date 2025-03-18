"use client";

import Image from "next/image";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

// Header Component
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#0E1A2B] text-white py-8 px-6 flex items-center w-full justify-between relative">
      <Image
        src="/Logo.png"
        alt="District 4 Logo"
        width={70}
        height={70}
        className="mr-10"
      />
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FiMenu />
      </button>
      <nav
        className={`absolute top-full left-0 w-full bg-[#0E1A2B] text-center transition-all duration-300 ease-in-out md:static md:flex md:space-x-12 text-sm lora ${
          menuOpen ? "block pt-6 pb-6" : "hidden"
        }`}
      >
        {[
          "Help/311",
          "Home",
          "Guide",
          "Public Notice",
          "Events",
          "Social Media",
        ].map((item) => (
          <a
            key={item}
            href="#"
            className="block py-2 md:inline-block md:py-0 hover:underline"
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}
