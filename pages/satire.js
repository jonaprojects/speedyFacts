import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import SubHeader from "@/components/typography/SubHeader";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import { Tweet } from "react-twitter-widgets";
import H2 from "@/components/typography/H2";
import Video from "@/components/video/Video";
import H3 from "@/components/typography/H3";
import Image from "next/image";
import SensitiveMedia from "@/components/sensitive_media/SensitiveMedia";
import ResponsiveVideoGrid from "@/components/responsive_grids/ResponsiveVideoGrid";
import Article from "@/components/article/Article";

export default function Satire(props) {
  return (
    <Template>
      <H1 className="mt-6">Satire</H1>
      <SubHeader className="mb-5">
        Satiric comments and skits following Hamas&apos; attack and the rise of
        Antisemitism in the world.
      </SubHeader>
      <H2 className="mt-6 mb-3">Videos</H2>
      <ResponsiveVideoGrid>
        <Video embedId="yVcwKsd_kiQ" />
        <Video embedId="gHTNuBKtzHc" />
        <Video embedId="rbfccVBo9tE" />
        <Video embedId="VYUL1R4pupU" />
        <Video embedId="cB98QWIWoDs" />
        <Video embedId="3AgOmk7ue04" />
      </ResponsiveVideoGrid>
      <H2 className="mb-3 mt-6">Tweets</H2>
      <Tweet tweetId="1731789101815246953" />
      <H2 className="mb-3 mt-6">Articles</H2>
      <Article
        title="Bill Cosby Joins Hamas So Feminists Will Stop Condemning Him For Rape"
        href="https://babylonbee.com/news/bill-cosby-joins-hamas-so-feminists-will-stop-condemning-him-for-rape"
        source="The Babylon Bee"
        className="mb-1"
      />
      <Article
        title="Ousted UPenn President Liz Magill Lands New Gig At Hamas Institute Of Technology"
        href="https://babylonbee.com/news/ousted-penn-president-liz-magill-lands-new-job-leading-hamas-institute-of-technology"
        source="The Babylon Bee"
      />
    </Template>
  );
}
