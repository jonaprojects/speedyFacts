import React from "react";

// UI
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import A from "@/components/typography/A";
import H3 from "@/components/typography/H3";

import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import EmbedYoutube from "@/components/embed_youtube/EmbedYoutube";
import { Tweet } from "react-twitter-widgets";
import Card from "@/components/card/Card";
import Image from "next/image";

import SubHeader from "@/components/typography/SubHeader";
import PersonCard from "@/components/person_card/PersonCard";
export default function Influencers(props) {
  return (
    <Template>
      <H1 className="mt-6">Influencers</H1>
      <SubHeader className="mb-5">
        Notable influencers who help spread the truth in social media. They are
        the spearhead of the war against misinformation online.
      </SubHeader>

      <PersonCard src="/yosephHadad.jpg">
        <H3 className="">Yoseph Hadad</H3>
        <P>
          Yoseph Hadad is an Arab Israeli social activist. He served in the IDF
          and was injured during the 2006 Israeli-Lebanon war. He later founded
          &quot;Together, Vouch For Each Other&quot;, an initiative to build
          bridges between Jews and Arabs in Israel. During operation &quot;Iron
          Swords&quot; Yoseph has conducted a massive campaign in favor of
          Israel and he even spoke on big media outlets such as CNN and Sky
          News.
        </P>
        <A href="https://twitter.com/YosephHaddad">Yoseph Hadad On Twitter</A>
      </PersonCard>
    </Template>
  );
}
// <EmbedYoutube embedId="O7ByJb7QQ9U" className="mb-3" />
