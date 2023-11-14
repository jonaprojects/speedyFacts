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
import ArticleLink from "@/components/typography/ArticleLink";

export default function Antisemitism(props) {
  return (
    <Template>
      <H1 className="mt-6">Antisemitism</H1>
      <SubHeader className="mb-5">
        Following the October 7th Attack and Israel&apos;s retaliation of Gaza,
        antisemitism has become extremely prevalent in Europe. Many racist and
        violent protests have took place around the world, with explicit and
        implicit calls to kill the Jews and to destroy the state of Israel.
        Violent antisemitic incidents have also risen dramatically, most notably
        in campuses in the US and in Europe.
      </SubHeader>
      <img
        src="/CleanJews.jpg"
        alt="Teddy Bears for the kidnapped kids, LA."
        className="object-fit"
      />


      <H2 className="mt-6 mb-3">Tweets</H2>
      <Tweet tweetId="1723819227398779064" />
      <Tweet tweetId="1723470687384252659" />
      <Tweet tweetId="1723666457236562411" />
      <Tweet tweetId="1723445182597611908" />
      <Tweet tweetId="1723406016828580211" />

      
    </Template>
  );
}
