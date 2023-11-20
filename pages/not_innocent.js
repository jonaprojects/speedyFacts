import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import SubHeader from "@/components/typography/SubHeader";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import EmbedYoutube from "@/components/embed_youtube/EmbedYoutube";
import { Tweet } from "react-twitter-widgets";
import H2 from "@/components/typography/H2";

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
      <Fact className="mb-2" content="" />

      <H2 className="mt-6 mb-3">Videos</H2>
      <EmbedYoutube embedId="WoM6fi9AvNY" />
      <Tweet tweetId="" />
      <Tweet tweetId="" />
      <Tweet tweetId="" />
      <Tweet tweetId="" />

      <H2 className="mb-3 mt-6">Tweets</H2>
    </Template>
  );
}
// <EmbedYoutube embedId="O7ByJb7QQ9U" className="mb-3" />
