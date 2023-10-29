import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";

export default function UN(props) {
  return (
    <Template>
      <H1 className="mt-6">The UN</H1>
      <P className="mb-5">
        The UN is known for its biased approach to Israel and the dark regimes
        who have hijacked the organization. However, Many people still
        mistakenly consider it to be reliable.
      </P>
      <Fact
        className="mb-2"
        content="In the years 2015-2022 The UN has passed 140 resolutions against Israel and only 68 resolutions to all the countries in the world
            together, Including North Korea, Syria, Russia, China, etc."
      />
      <Fact
        className="mb-2"
        content="In the years 2015-2022 The UN has passed 140 resolutions against Israel and only 68 resolutions to all the countries in the world
            together, Including North Korea, Syria, Russia, China, etc."
      />
      <Fact
        className="mb-2"
        content="In the years 2015-2022 The UN has passed 140 resolutions against Israel and only 68 resolutions to all the countries in the world
            together, Including North Korea, Syria, Russia, China, etc."
      />
    </Template>
  );
}