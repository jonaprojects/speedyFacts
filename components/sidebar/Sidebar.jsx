import React from "react";
import { CATEGORIES, CATEGORIES_AND_PATHS } from "@/data/categories";
import { useRouter } from "next/router";
import SidebarContext from "@/store/SidebarContext";
import { useContext } from "react";
import H3 from "../typography/H3";
import SearchBar from "../search/SearchBar";
import H2 from "../typography/H2";
import Modal from "../modal/Modal";
import Overlay from "../modal/Overlay";

export default function Sidebar(props) {
  const { sidebarCtx, setSidebarCtx } = useContext(SidebarContext);
  const router = useRouter();

  if (!sidebarCtx) {
    return null;
  }
  const closeSidebar = () => setSidebarCtx(false);
  const gotoCategory = (category) => {
    closeSidebar();
    router.push(CATEGORIES_AND_PATHS[category]);
  };

  return (
    <Overlay>
      <div className="bg-slate-100 fixed right-0 w-64 h-full md:w-80 z-40 overflow-x-hidden overflow-y-scroll ">
        <button
          onClick={closeSidebar}
          className="text-2xl font-bold text-slate-400 ml-2"
        >
          ×
        </button>
        <H2 className="mt-5 mb-3 ml-2">Categories</H2>
        <SearchBar className="mb-3" />
        <ul className="overflow-y-scroll mt-2">
          {CATEGORIES.map((category, index) => {
            return (
              <li
                key={index}
                className="text-center text-sm md:text-base p-2 capitalize border-b bg-white text-slate-500 cursor-pointer hover:bg-sky-500 hover:text-white"
                onClick={() => gotoCategory(category)}
              >
                {category}
              </li>
            );
          })}
        </ul>
      </div>
    </Overlay>
  );
}
