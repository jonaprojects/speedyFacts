import React, { useState, useContext } from "react";
import Image from "next/image";
import { Inter, Open_Sans } from "next/font/google";
import Link from "next/link";
import SidebarContext from "../../store/SidebarContext.js";
import SearchBar from "../search/SearchBar.jsx";
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
      className={`w-full flex items-center justify-between ${openSans.className} bg-sky-500 text-white py-3 px-2`}
    >
      <div className="flex items-center gap-4 w-full">
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
        <SearchBar
          className="hidden sm:inline w-full max-w-sm ml-3 lg:max-w-xl"
          fontSize="text-xs md:text-sm"
          padding="py-0 px-2"
          buttonType="secondary"
          notFound="modal"
          suggestions="max-w-sm lg:max-w-xl"
          suggestionFontSize="text-xs md:text-sm"
        />
      </div>
      <button onClick={toggleSidebar} className="m-0 p-0">
        <Image
          src="/menu.svg"
          alt=""
          className="sm:mr-2 mr-1"
          width={24}
          height={24}
          priority
        />
      </button>
    </nav>
  );
}
