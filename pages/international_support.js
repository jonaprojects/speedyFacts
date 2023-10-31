import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import SubHeader from "@/components/typography/SubHeader";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import EmbedYoutube from "@/components/embed_youtube/EmbedYoutube";
import { Tweet } from "react-twitter-widgets";
import H2 from "@/components/typography/H2";

export default function InternationalSupport(props) {
  return (
    <Template>
      <H1 className="mt-6">International Support</H1>
      <SubHeader className="mb-5">
        It&rsquo;s important to emphasize the unprecedented international
        support Israel has received from many Western democracies following the
        October 7th massacre. Among the countries are the US, Britain,
        Guatemala, France and Ukraine.
      </SubHeader>
      <Fact
        className="mb-2"
        content="Here there will be shows of support from world leaders around the free world."
      />
      <Tweet tweetId="1714895569334735124" />
      <Tweet tweetId="1714728191040815130" />

    </Template>
  );
}
// <EmbedYoutube embedId="O7ByJb7QQ9U" className="mb-3" />
