import { assets } from "../assets/assets";
import Image from 'next/image';

export function HeroSection() {
  return (
    <div className="relative w-screen overflow-hidden ">
      <div className="relative w-screen h-[300px] shadow-md overflow-hidden">
        {/* Background Image */}
        <Image
          src={assets.welcome}
          alt="District Background"
          style={{ objectFit: 'cover' }}
          fill
          sizes="100vw"
          priority
          className="brightness-110 opacity-80"
        />

        {/* White overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-30"></div>

        {/* Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-center px-4">
          <h2 className="text-5xl md:text-6xl font-normal lora-light">Welcome to</h2>
          <h1 className="text-7xl md:text-8xl font-extrabold italic lora">District 4</h1>
        </div>
      </div>
    </div>
  );
}
