import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import EmbedYoutube from "@/components/embed_youtube/EmbedYoutube";

export default function PalestineHistory(props) {
  return (
    <Template>
      <H1 className="mt-6">Palestine History</H1>
      <P className="mb-5">
        The palestinian narrative is that they are the natives and their country
        was occupied by the Jewish European colonizers. This narrative falls
        apart quickly when challenged with real facts and history.
      </P>
      <Fact className="mb-2" content="Historical fact / Debunking a lie" />
      <EmbedYoutube embedId="O7ByJb7QQ9U" className="mb-3" />
    </Template>
  );
}
