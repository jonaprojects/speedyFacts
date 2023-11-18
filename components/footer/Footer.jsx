import React from "react";
import Image from "next/image";
import { Inter, Open_Sans } from "next/font/google";
// Custom components

const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

export default function Footer(props) {
  return (
    <footer
      className={`w-full ${openSans.className} bg-blue-700 text-white py-1 px-2 fixed bottom-0`}
    >
      <ul className="flex">
        <li className="hover:bg-blue-800 p-2">
          <a href="https://www.fidf.org/" className="font-bold">
            <div className="flex gap-3">
              <p> ISRAEL AT WAR: Donate to FIDF Here</p>
              <Image
                src="/israel_flag.svg"
                alt=""
                className=""
                width={24}
                height={24}
                priority
              />
            </div>
          </a>
        </li>
      </ul>
    </footer>
  );
}
