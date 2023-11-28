import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import SubHeader from "@/components/typography/SubHeader";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import EmbedYoutube from "@/components/embed_youtube/EmbedYoutube";
import { Tweet } from "react-twitter-widgets";
import H2 from "@/components/typography/H2";
import ArticleLink from "@/components/typography/ArticleLink";
import Video from "@/components/video/Video";
import ResponsiveVideoGrid from "@/components/responsive_grids/ResponsiveVideoGrid";

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
      <H2 className="mt-6 mb-3">Videos</H2>
      <ResponsiveVideoGrid>
        <Video embedId="ugFcvOLj88A" />
        <Video embedId="jbU8FwatYs4" />
      </ResponsiveVideoGrid>
      <H2 className="mb-3 mt-6">Tweets</H2>
      <Tweet tweetId="1726621899822968983" />
      <Tweet tweetId="1723797001530175821" />
      <Tweet tweetId="1719658660836610245" />
      <Tweet tweetId="1710574629838881199" />
      <Tweet tweetId="1726342185568657610" />
      <Tweet tweetId="1729183341113455020" />
      <H2 className="mt-7 mb-3">Articles</H2>
      <ArticleLink
        href="https://www.i24news.tv/en/news/middle-east/palestinian-territories/1700158968-survey-finds-majority-in-the-west-bank-justify-the-oct-7-massacre"
        title="Survey finds majority in the West Bank support the Oct 7 massacre"
        source="i24 News"
      />
    </Template>
  );
}
// <EmbedYoutube embedId="O7ByJb7QQ9U" className="mb-3" />
