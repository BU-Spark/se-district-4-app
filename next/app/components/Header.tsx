"use client";

import Image from "next/image";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";


import { assets } from '@/app/assets/assets.js';

// Header Component
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Help/311", href: "#" },
    { label: "Home", href: "/" },
    { label: "Guide", href: "#" },
    { label: "Public Notice", href: "#" },
    { label: "Events", href: "#" },
    { label: "Social Media", href: "/media" }, // <-- now links to /media
  ];

  return (
    <header className="bg-[#0E1A2B] text-white py-8 px-6 flex items-center w-full justify-between relative">
      <Image

        src={assets.seal}
        alt="District 4 Logo"
        width={70}
        height={70}
        className="mr-10 bg-white rounded-full"

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

        className={`absolute top-full left-0 w-full bg-[#0E1A2B] text-center transition-all duration-300 ease-in-out md:static md:flex md:space-x-12 text-sm lora ${menuOpen ? "block pt-6 pb-6" : "hidden"
          }`}

        className={`absolute top-full left-0 w-full bg-[#0E1A2B] text-center transition-all duration-300 ease-in-out md:static md:flex md:space-x-12 text-sm lora ${
          menuOpen ? "block pt-6 pb-6" : "hidden"
        }`}

      >
        {navLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="block py-2 md:inline-block md:py-0 hover:underline"
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
