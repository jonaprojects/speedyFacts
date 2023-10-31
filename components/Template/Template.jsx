import React from "react";
import Navbar from "../navbar/Navbar";
import Container from "../container/Container";

import { Inter, Open_Sans } from "next/font/google";
import Footer from "../footer/Footer";

const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

export default function Template(props) {
  return (
    <div className={` ${inter.className} pb-10`}>
      <Navbar />
      <Container>{props.children}</Container>
      <div className="mb-3"></div>
      <Footer />
    </div>
  );
}
