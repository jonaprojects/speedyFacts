import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import SubHeader from "@/components/typography/SubHeader";
import H2 from "@/components/typography/H2";
import A from "@/components/typography/A";
import { Tweet } from "react-twitter-widgets";
import ArticleLink from "@/components/typography/ArticleLink";
import Video from "@/components/video/Video";
import ResponsiveVideoGrid from "@/components/responsive_grids/ResponsiveVideoGrid";
import WarningModal from "@/components/modal/WarningModal";

export default function IsraeliHeroes(props) {
  return (
    <Template>
      <H1 className="mt-6">Israeli Heroes</H1>
      <SubHeader className="mb-5">
        There are many touching and heartbreaking stories of heroism from the
        October 7th Massacre. Here are a few of them.
      </SubHeader>
      <H2 className="mt-6 mb-3">Videos</H2>
      <ResponsiveVideoGrid>
        <Video embedId="_zXT-jtNnO4" className="mb-2" />
        <Video embedId="ICFiHMY48KY" className="mb-2" />
        <Video embedId="AjQ6T6y93yo" className="mb-2" />
        <Video embedId="Dzwj2uR76Uo" className="mb-2" />
      </ResponsiveVideoGrid>
      <H2 className="mt-6 mb-3">Tweets</H2>
      <Tweet tweetId="1724434268376420549" />
      <WarningModal />
    </Template>
  );
}
