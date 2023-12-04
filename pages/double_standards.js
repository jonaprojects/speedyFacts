import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import SubHeader from "@/components/typography/SubHeader";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import { Tweet } from "react-twitter-widgets";
import H2 from "@/components/typography/H2";
import Video from "@/components/video/Video";

export default function DoubleStandards(props) {
  return (
    <Template>
      <H1 className="mt-6">Double Standards Against Israel</H1>
      <SubHeader className="mb-5">
        There seem to be double standard when it comes to Israel. Millions of
        Muslim and Arab civilians were killed in bloody wars in the last decade
        and it didn&apos;t trigger a fraction of the international outrage.
      </SubHeader>
      <H2 className="mb-3 mt-6">Tweets</H2>
      <Tweet tweetId="1726662067351081021" />
      <Tweet tweetId="1725637716082032658" />
      <Tweet tweetId="1725278300560327081" />
      <Tweet tweetId="1725908928414802037" />
      <Tweet tweetId="1726653958431916079" />
      <Tweet tweetId="1731337674017952189" />
    </Template>
  );
}
