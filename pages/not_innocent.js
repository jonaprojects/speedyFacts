import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import SubHeader from "@/components/typography/SubHeader";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import EmbedYoutube from "@/components/embed_youtube/EmbedYoutube";
import { Tweet } from "react-twitter-widgets";
import H2 from "@/components/typography/H2";
import Video from "@/components/video/Video";
import ResponsiveVideoGrid from "@/components/responsive_grids/ResponsiveVideoGrid";
import MyImage from "@/components/image/MyImage";
import Article from "@/components/article/Article";
import PdfViewer from "@/components/pdf_viewer/PDFViewer";

export default function NotInnocent(props) {
  return (
    <Template>
      <H1 className="mt-6">Palestinians Not Innocent</H1>
      <SubHeader className="mb-5">
        Palestinians in the West Bank and in the Gaza Strip widely support Hamas
        and the brutal massacres it has committed. Gazan civilians have
        participated in the massacre and the kidnapping. Following the massacre
        candy was distributed in Gaza and there were big celebrations, and even
        a public screening of the attack.
      </SubHeader>
      <Fact
        className="mb-2"
        content="Palestinians in the West Bank and in the Gaza Strip widely support Hamas
        and the brutal massacres it has committed. Gazan civilians have
        participated in the massacre and the kidnapping. Following the massacre
        candy was distributed in Gaza and there were big celebrations, and even
        a public screening of the attack."
      />
      <Fact
        className="mb-2"
        content="In a poll conducted by Birzeit University in the fourth week of the Gaza war found that a majority 
      in the West Bank and in Gaza support Hamas and the October 7th Massacre. 76% support Hamas,
      84% support Palestinian Islamic Jihad and 89% support al Qassem Brigades, the military wing of Hamas.
      98% felt more proud to be Palestinian following the October 7 attacks."
      />
      <H2 className="mt-6 mb-3">Videos</H2>
      <ResponsiveVideoGrid>
        <Video embedId="ugFcvOLj88A" />
        <Video embedId="jbU8FwatYs4" />
        <Video embedId="ZO7tAs4x82g" />
      </ResponsiveVideoGrid>
      <H2 className="mt-7 mb-3">Images</H2>
      <div className="max-w-xl">
        <MyImage src="/notinnocent1.png" className="mb-2" />
        <MyImage src="/poll1.png" className="mb-2" />
        <MyImage src="/poll2.png" className="mb-2" />
      </div>
      <H2 className="mb-3 mt-6">Tweets</H2>
      <Tweet tweetId="1726621899822968983" />
      <Tweet tweetId="1723797001530175821" />
      <Tweet tweetId="1719658660836610245" />
      <Tweet tweetId="1731289449940537487" />
      <Tweet tweetId="1710574629838881199" />
      <Tweet tweetId="1729519254477713519" />
      <Tweet tweetId="1726342185568657610" />
      <Tweet tweetId="1734969373188554945" />
      <Tweet tweetId="1729183341113455020" />
      <Tweet tweetId="1731090796672409662" />
      <Tweet tweetId="1719643171976605809" />
      <Tweet tweetId="1731313566244839509" />
      <Tweet tweetId="1731414246200676558" />
      <Tweet tweetId="1733515775967723692" />
      <H2 className="mt-7 mb-3">Articles</H2>
      <Article
        href="https://www.i24news.tv/en/news/middle-east/palestinian-territories/1700158968-survey-finds-majority-in-the-west-bank-justify-the-oct-7-massacre"
        title="Survey finds majority in the West Bank support the Oct 7 massacre"
        source="i24 News"
      />
      <Article
        title="Nearly 75% of Palestinians say Hamas was right to attack Israel on Oct. 7"
        href="https://www.jns.org/nearly-three-quarters-of-palestinians-say-hamas-was-right-on-oct-7/"
        source="JNS"
      />
      <Article
        title="Press Release: Public Opinion Poll No (90)"
        href="https://pcpsr.org/en/node/961"
        source="PCPSR"
      />
      <Article
        title="Wartime poll among Palestinians reveals support for Hamas, disapproval of Palestinian Authority"
        href="https://www.i24news.tv/en/news/israel-at-war/1702489813-wartime-poll-among-palestinians-reveals-support-for-hamas-disapproval-of-palestinian-authority"
        source="i24 News"
      />
      <PdfViewer pdfPath="/poll2.pdf" />
    </Template>
  );
}
// <EmbedYoutube embedId="O7ByJb7QQ9U" className="mb-3" />
