import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import SubHeader from "@/components/typography/SubHeader";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import EmbedYoutube from "@/components/embed_youtube/EmbedYoutube";
import { Tweet } from "react-twitter-widgets";
import H2 from "@/components/typography/H2";

export default function PalestineAnimalAbuse(props) {
  return (
    <Template>
      <H1 className="mt-6">Palestine Animal Abuse</H1>
      <SubHeader className="mb-5">
        Palestinians are known for brutally abusing animals, and especially
        dogs. This attests to the level of violence and cruelty in their
        society.
      </SubHeader>
      <H2 className="mt-6 mb-3">Videos</H2>

      <H2 className="mb-3 mt-6">Tweets</H2>
      <Tweet tweetId="1726053887323292060" />
      <Tweet tweetId="1726044133347754329" />
      <Tweet tweetId="" />
      <Tweet tweetId="" />
    </Template>
  );
}
