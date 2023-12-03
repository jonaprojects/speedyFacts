import React, { useState, useContext } from "react";
import Image from "next/image";
import { Inter, Open_Sans } from "next/font/google";
import Link from "next/link";
import SidebarContext from "@/store/sidebarContext";
// Custom components

const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

export default function Navbar(props) {
  const { sidebarCtx, setSidebarCtx } = useContext(SidebarContext);
  const toggleSidebar = () => {
    setSidebarCtx((prevCtx) => !prevCtx);
  };

  return (
    <nav
      className={`w-full flex justify-between ${openSans.className} bg-sky-500 text-white py-3 px-2`}
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
      <button onClick={toggleSidebar} className="m-0 p-0">
        <Image
          src="/menu.svg"
          alt=""
          className=""
          width={24}
          height={24}
          priority
        />
      </button>
    </nav>
  );
}
