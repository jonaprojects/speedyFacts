import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import SubHeader from "@/components/typography/SubHeader";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import EmbedYoutube from "@/components/embed_youtube/EmbedYoutube";
import { Tweet } from "react-twitter-widgets";
import H2 from "@/components/typography/H2";

export default function NoApartheid(props) {
  return (
    <Template>
      <H1 className="mt-6">No Apartheid</H1>
      <SubHeader className="mb-5">
        One of the most common accusations against Israel is that it is an
        Apartheid state. While it might be trendy to say so, it is not true.
        Israel is a diverse country with many minorities that get equal rights and coexist together.
      </SubHeader>
      <H2 className="mt-6 mb-3">Videos</H2>
      <EmbedYoutube embedId="IxLtaPo-wfw" />
      <H2 className="mb-3 mt-6">Tweets</H2>
      <Tweet tweetId="1724486686971723992" />
      <Tweet tweetId="1725468560766468358" />
      <H2 className="mt-7 mb-3">Articles</H2>
    </Template>
  );
}
