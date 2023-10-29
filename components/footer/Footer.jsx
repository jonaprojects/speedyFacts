import React from "react";
import Image from "next/image";
import { Inter, Open_Sans } from "next/font/google";
// Custom components

const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

export default function Footer(props) {
  return (
    <footer
      className={`w-full ${openSans.className} bg-slate-600 text-white py-3 px-2 fixed bottom-0`}
    >
      <ul className="flex">
        <li className="">  © All rights reserved to Jonathan S.  </li>
      </ul>
    </footer>
  );
}
