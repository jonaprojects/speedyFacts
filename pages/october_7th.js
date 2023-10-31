import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import EmbedYoutube from "@/components/embed_youtube/EmbedYoutube";
import { Tweet } from "react-twitter-widgets";

export default function PalestineHistory(props) {
  return (
    <Template>
      <H1 className="mt-6">October 7th</H1>
      <P className="mb-5">
        In October 7t, 2023, thousands of Hamas terrorists infiltrated Israel
        and murdered more than 1400 Israelis and kidnapped at least 240. During the attack
        they&apos;ve committed severe crimes against humanity, butchering
        everything that crosses their path. Despite overwhelming evidence, many
        prefer to deny these atrocities.
      </P>
      <Fact
        className="mb-2"
        content="Here there will be Personal stories / Statistical facts about the attack / 
        Quotes from terrorists' confessions"
      />
      <EmbedYoutube embedId="HnLq0DjErIA" />
    </Template>
  );
}
// <EmbedYoutube embedId="O7ByJb7QQ9U" className="mb-3" />
