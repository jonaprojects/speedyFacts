import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import SubHeader from "@/components/typography/SubHeader";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import { Tweet } from "react-twitter-widgets";
import H2 from "@/components/typography/H2";
import Video from "@/components/video/Video";

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
      <H2 className="mt-6 mb-3">Videos</H2>
      <Video embedId="OGri58wrMBk" className="mb-2" />
      <Video embedId="-_3j_WNQKXw" className="mb-2" />
      <Video embedId="O9UXvI4eEgQ" className="mb-2" />
      <Video embedId="svnCrECZt7k" className="mb-2" />
      <H2 className="mb-3 mt-6">Tweets</H2>
      <Tweet tweetId="1723690677190500798" />
      <Tweet tweetId="" />
      <Tweet tweetId="" />
      <Tweet tweetId="" />
    </Template>
  );
}
