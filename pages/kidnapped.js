import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";

export default function Kidnapped(props) {
    return (
      <Template>
        <H1 className="mt-6">The Kidnapped</H1>
        <P className="mb-5">
            In October 7th, at least 240 Israeli civilians were kidnapped to Gaza by 
            the terror organization Hamas. Among the kidnapped are babies, children, women and the elderly.
        </P>
        <Fact
          className="mb-2"
          content="Some statistics about the kidnapped people. Personal stories about the kidnapped
          "
        />
      </Template>
    );
  }