import React from "react";
import Image from "next/image";
import { Inter, Open_Sans } from "next/font/google";
// Custom components

const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

export default function Navbar(props) {
  return (
    <nav
      className={`w-full ${openSans.className} bg-sky-500 text-white py-3 px-2`}
    >
      <ul className="flex gap-2">
        <li className="">Speedy Facts</li>
        <Image
          src="/swords.svg"
          alt=""
          className="dark:invert"
          width={24}
          height={24}
          priority
        />
      </ul>
    </nav>
  );
}
