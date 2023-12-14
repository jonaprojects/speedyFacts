import React from "react";
import Card from "../card/Card";

import { Inter, Open_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

export default function Topic(props) {
  return (
    <div
      className="px-3 py-7 flex justify-center items-center md:py-10 lg:py-12 bg-white transition duration-300 ease-in-out hover:cursor-pointer shadow-lg rounded-lg hover:bg-sky-500 hover:ring-sky-500 hover:text-white"
      onClick={props?.onClick}
    >
      <div
        className={`w-full flex justify-center items-center text-center ${inter.className} text-lg md:text-2xl`}
      >
        {props.name}
      </div>
    </div>
  );
}
