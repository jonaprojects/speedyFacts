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
      <H2>Pro-Israeli Protests</H2>
      <p className="font-bold">Iranians Stand With Israel</p>
      <div className="md:flex md:gap-3">
        <img
          src="/IraniansStandWithIsrael1.jpg"
          alt="Teddy Bears for the kidnapped kids, LA."
          className="object-fit md:w-1/3 md:mb-0 mb-3"
        />
        <img
          src="/IraniansStandWithIsrael3.jpg"
          alt="Teddy Bears for the kidnapped kids, LA."
          className="object-fit md:w-1/3"
        />
      </div>
      <H2 className="mt-6 mb-3">Videos</H2>
      <EmbedYoutube embedId="5BeIhKVWawk" />
      <H2 className="mb-3 mt-6">Tweets</H2>
      <Tweet tweetId="1714895569334735124" />
      <Tweet tweetId="1714728191040815130" />
      <Tweet tweetId="1716836960268898586" />
    </Template>
  );
}
// <EmbedYoutube embedId="O7ByJb7QQ9U" className="mb-3" />
