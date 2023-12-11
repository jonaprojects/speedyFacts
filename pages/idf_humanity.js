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
import MyImage from "@/components/image/MyImage";

export default function IDFHumanity(props) {
  return (
    <Template>
      <H1 className="mt-6">IDF Humanitarian Efforts</H1>
      <SubHeader className="mb-5">
        The IDF has done tremendous efforts in order to avoid civilian deaths in
        Gaza. Millions of text messages, calls and leaflets were sent in order
        to warn the civilians a month ahead to get to safety. Meanwhile, Hamas
        has prevented them from leaving and used them as human shields.
      </SubHeader>

      <H2 className="mt-7 mb-3">Videos</H2>
      <ResponsiveVideoGrid>
        <Video embedId="OGri58wrMBk" />
        <Video embedId="-_3j_WNQKXw" />
        <Video embedId="O9UXvI4eEgQ" />
        <Video embedId="svnCrECZt7k" />
        <Video embedId="4nntSi_P504" />
        <Video embedId="RDvtNPmleJg" />
      </ResponsiveVideoGrid>
      <H2 className="mt-7 mb-3">Images</H2>
      <MyImage
        src="/shifaAid2.png"
        alt="IDF Soldiers deliver humanitarian aid to Al-Shifa hospital in Gaza during the 2023 Gaza War."
        className="max-w-xl"
      ></MyImage>
      <small className="block text-slate-500">
        IDF Soldiers deliver humanitarian aid to Shifa hospital during the 2023
        Gaza War.
      </small>
      <MyImage
        src="/civilianDeathRatio.png"
        alt="Low civilian death ratio according to Hamas data"
        className="max-w-xl mt-3"
      ></MyImage>
      <H2 className="mb-3 mt-7">Tweets</H2>
      <Tweet tweetId="1723690677190500798" />
      <Tweet tweetId="1730532637125550267" />
      <Tweet tweetId="1734110713780809986" />
      <Tweet tweetId="1734173056128463166" />
      <Tweet tweetId="1734105548478410909" />
    </Template>
  );
}
