import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import SubHeader from "@/components/typography/SubHeader";
import H2 from "@/components/typography/H2";
import A from "@/components/typography/A";
import { Tweet } from "react-twitter-widgets";
import EmbedYoutube from "@/components/embed_youtube/EmbedYoutube";

export default function FakeNews(props) {
  return (
    <Template>
      <H1 className="mt-6">Hamas VS Gaza</H1>
      <SubHeader className="mb-5">
        People often ignore the vast amount of crimes Hamas has committed on the
        people of Gaza. From throwing people off rooftops to torture and murder,
        Hamas has done it all.
      </SubHeader>
      <H2 className="mt-6 mb-3">Videos</H2>
      <EmbedYoutube embedId="Kvc2T5d40ag" className="mb-2" />
      <EmbedYoutube embedId="nNCzb8w2LjM" className="mb-2" />
      <EmbedYoutube embedId="kaK4muqkRBE" className="mb-2" />

      
      
      <H2 className="mt-6 mb-3">Tweets</H2>
      <Tweet tweetId="1720425819305070821" />
    </Template>
  );
}
