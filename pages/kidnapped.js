import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import SubHeader from "@/components/typography/SubHeader";
import H2 from "@/components/typography/H2";
import H3 from "@/components/typography/H3";

export default function Kidnapped(props) {
  return (
    <Template>
      <H1 className="mt-6">The Kidnapped</H1>
      <SubHeader className="mb-5">
        In October 7th, at least 240 Israeli civilians were kidnapped to Gaza by
        the terror organization Hamas. Among the kidnapped are babies, children,
        women and the elderly.
      </SubHeader>
      <Fact
        className="mb-2"
        content="Some statistics about the kidnapped people. Personal stories about the kidnapped
          "
      />
      <H2>Exhibitions</H2>
      <P className="mb-2">
        All around the world people have created touching exhibitions to raise
        awareness to the status of the kidnapped civilians - including little
        kids.
      </P>
      <H3 className="mt-6">Los Angeles</H3>
      <div className="md:flex md:gap-3">
        <img
          src="/TeddyBearsLA.jpeg"
          alt="Teddy Bears for the kidnapped kids, LA."
          className="object-fit md:w-1/3 md:mb-0 mb-3"
        />
        <img
          src="/DollsLA.jpeg"
          alt="Teddy Bears for the kidnapped kids, LA."
          className="object-fit md:w-1/3"
        />
      </div>
    </Template>
  );
}
