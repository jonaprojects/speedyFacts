import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";

export default function HamasLeaders(props) {
  return (
    <Template>
      <H1 className="mt-6">Hamas leaders</H1>
      <P className="mb-5">
        The leaders of Hamas are known for their brutality and inhumanity. They
        starve and use their people as human shields while hiding in tunnels and
        luxury hotels abroad. It&apos;s time to expose the head of the snake.
      </P>
      <Fact
        className="mb-2"
        content="Yahya Sinwar is Hamas Chief in Gaza Strip. He's known as 'The Butcher Of Khan Yunis' 
         for torturing and murdering many palestinians that were suspected
        to be collaborating with Israel. In the aftermath it became clear that many of the victims weren't working with Israel.
        "
      />
    </Template>
  );
}
