import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import SubHeader from "@/components/typography/SubHeader";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import { Tweet } from "react-twitter-widgets";
import H2 from "@/components/typography/H2";
import Video from "@/components/video/Video";
import Article from "@/components/article/Article";

export default function HamasPropaganda(props) {
  return (
    <Template>
      <H1 className="mt-6">Hamas Propaganda</H1>
      <SubHeader className="mb-5">Exposing Hamas Propaganda</SubHeader>
      <H2 className="mt-6 mb-3">Videos</H2>
      <H2 className="mb-3 mt-6">Tweets</H2>
      <Tweet tweetId="1712902786461913333" />
      <Tweet tweetId="1728723979450327204" />
      <Tweet tweetId="1729614130145874222" />
      <H2 className="mt-7 mb-3">Articles</H2>
      <Article
        title="Human Rights Watch says rocket misfire likely cause of deadly Gaza hospital blast"
        href="https://www.reuters.com/world/middle-east/human-rights-watch-says-rocket-misfire-likely-cause-deadly-gaza-hospital-blast-2023-11-26/"
        source="Reuters"
      />
    </Template>
  );
}
