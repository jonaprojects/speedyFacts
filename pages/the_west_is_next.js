import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import SubHeader from "@/components/typography/SubHeader";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import EmbedYoutube from "@/components/embed_youtube/EmbedYoutube";
import { Tweet } from "react-twitter-widgets";
import H2 from "@/components/typography/H2";

export default function TheWestIsNext(props) {
  return (
    <Template>
      <H1 className="mt-6">The West Is Next</H1>
      <SubHeader className="mb-5">
        Hamas and many other radical Muslim groups and countries have expressed
        their global ambitions on many occasions. Eventually, Radical Islam
        wishes to destroy the western society and to dominate the world.
      </SubHeader>
      <H2 className="mt-6 mb-3">Videos</H2>
      <EmbedYoutube embedId="UiZKNygXl2E" className="mb-2" />
      <EmbedYoutube embedId="UXLZ_iT3RmE" className="mb-2" />
      <H2 className="mb-3 mt-6">Tweets</H2>
      <Tweet tweetId="1724279167439544787" />
      <Tweet tweetId="1136881942375346176" />
      <Tweet tweetId="" />
      <Tweet tweetId="" />
    </Template>
  );
}
