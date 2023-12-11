import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import SubHeader from "@/components/typography/SubHeader";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import { Tweet } from "react-twitter-widgets";
import H2 from "@/components/typography/H2";
import Video from "@/components/video/Video";
import ResponsiveVideoGrid from "@/components/responsive_grids/ResponsiveVideoGrid";
import Article from "@/components/article/Article";

export default function PalestinianAuthority(props) {
  return (
    <Template>
      <H1 className="mt-6">The Palestinian Authority</H1>
      <SubHeader className="mb-5">
        Contrary to common belief, the Palestinian Authority actively harbors
        and supports terrorism and it has hindered the peace process for
        decades. The PLO and primarily Fatah have committed a large number of
        terror attacks against Israel for decades.
      </SubHeader>
      <Fact
        content="According to the PLO charter, 'armed struggle is the only way to liberate Palestine' - not peace."
        className="mb-3"
      />
      <H2 className="mt-6 mb-3">Videos</H2>
      <ResponsiveVideoGrid>
        <Video embedId="YFXgGOZOfIo" />
        <Video embedId="g6cNlXhygSY" />
        <Video embedId="_T3sS7b6w88" />
        <Video embedId="rll0mnXARzo" />
        <Video embedId="b7Eaxl4jqnA" />
        <Video embedId="JksVPwqxh_o" />
        <Video embedId="14bYSGh0TgY" />
        <Video embedId="_1qsrhBRqlw" />
        <Video embedId="sSRy4WMqrh8" />
        <Video embedId="MKvN-PEO5QI" />
        <Video embedId="Ad03Cl-IX7Y" />
      </ResponsiveVideoGrid>
      <H2 className="mt-7 mb-3">Articles</H2>
      <Article
        title="Outrage over Abbas's antisemitic speech on Jews and Holocaust"
        href="https://www.bbc.com/news/world-middle-east-66741336"
        source="The BBC"
        className="mb-1"
      />
      <Article
        title="Fatah Brags in Video That It Took Part in October 7 Slaughter: ‘We Killed [Them] … and Stepped on Their Heads’"
        href="https://www.algemeiner.com/2023/11/03/fatah-brags-in-video-that-it-took-part-in-october-7-slaughter-we-killed-them-and-stepped-on-their-heads/"
        source="The Algemeiner"
        className="mb-1"
      />
      <Article
        title="PA official: Nazi-collaborator Mufti is leader and ‘role model’"
        href="https://www.jpost.com/middle-east/pa-official-nazi-collaborator-mufti-is-leader-and-role-model-595511"
        source="The Jerusalem Post"
      />
    </Template>
  );
}
