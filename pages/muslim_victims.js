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

export default function MuslimVictimsAndHeroes(props) {
  return (
    <Template>
      <H1 className="mt-6">Muslim Victims & Heroes</H1>
      <SubHeader className="mb-5">
        In October 7th, Hamas not only attacked Jews, it also murdered and
        kidnapped Muslims, many of whom were Bedouin and Druze. Like Jews, many
        Muslims lost their lives while trying to save others, some were killed
        in duty.
      </SubHeader>
      <Fact
        className="mb-2"
        content={`

      `}
      />
      <H2 className="mt-6 mb-3">Videos</H2>
      <EmbedYoutube embedId="CrXtTYm_NB8" className="mb-2" />
      <EmbedYoutube embedId="bH5pCbtpY2U" className="mb-2" />
      <EmbedYoutube embedId="HxvQAFAY4fU" className="mb-2" />
      <EmbedYoutube embedId="9SvKJzdNY5Y" className="mb-2" />

      <H2 className="mt-6 mb-3">Tweets</H2>
      <Tweet tweetId="1719639458092376171" />
      <H2 className="mt-6 mb-3">Sources</H2>
      <ArticleLink
        href="https://www.timesofisrael.com/newly-released-footage-shows-palestinian-driver-in-hamas-hands-before-oct-7-slaying/"
        title="Newly released footage shows Palestinian driver in Hamas hands before
        Oct. 7 slaying"
        source="Times Of Israel"
      />
    </Template>
  );
}
