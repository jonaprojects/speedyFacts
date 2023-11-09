
import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import SubHeader from "@/components/typography/SubHeader";
import H2 from "@/components/typography/H2";
import A from "@/components/typography/A";
import { Tweet } from "react-twitter-widgets";
import EmbedYoutube from "@/components/embed_youtube/EmbedYoutube";
import ArticleLink from "@/components/typography/ArticleLink";

export default function IsraeliHeroes(props) {
  return (
    <Template>
      <H1 className="mt-6">Israeli Heroes</H1>
      <SubHeader className="mb-5">
       There are many touching and heartbreaking stories of heroism from the October 7th Massacre.
       Here are a few of them.
      </SubHeader>

      <H2 className="mt-6 mb-3">Videos</H2>
      <EmbedYoutube embedId="_zXT-jtNnO4" className="mb-2" />
      <EmbedYoutube embedId="ICFiHMY48KY" className="mb-2" />
      <EmbedYoutube embedId="AjQ6T6y93yo" className="mb-2" />
    </Template>
  );
}

