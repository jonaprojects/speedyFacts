import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Container from "../container/Container";

import { Inter, Open_Sans } from "next/font/google";
import Footer from "../footer/Footer";
import SidebarContext from "@/store/sidebarContext";
import Sidebar from "../sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

export default function Template(props) {
  const [sidebarCtx, setSidebarCtx] = useState(false);
  return (
    <SidebarContext.Provider value={{ sidebarCtx, setSidebarCtx }}>
      <>
        <Sidebar show={sidebarCtx} />
        <div className={` ${inter.className} pb-10`}>
          <Navbar />
          <Container>{props.children}</Container>
          <div className="mb-3"></div>
          <Footer />
        </div>
      </>
    </SidebarContext.Provider>
  );
}
