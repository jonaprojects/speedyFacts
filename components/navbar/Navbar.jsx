import React from "react";
import Image from "next/image";
import { Inter, Open_Sans } from "next/font/google";
import Link from "next/link";
// Custom components

const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

export default function Navbar(props) {
  return (
    <nav
      className={`w-full ${openSans.className} bg-sky-500 text-white py-3 px-2`}
    >
      <ul className="flex gap-2">
        <li className="font-bold">
          <Link href="/">Speedy Facts</Link>
        </li>
        <Image
          src="/swords.svg"
          alt=""
          className=""
          width={24}
          height={24}
          priority
        />
      </ul>
    </nav>
  );
}
