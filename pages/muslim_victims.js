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
        Suheib Abu Amer Al Razem, a Palestinian from East Jerusalem who worked as a bus driver
        at the Nova Festival on October 7 was captured by Hamas terrorists. The terrorists interrogated Abu Amer, 
        and asked for the whereabouts of the Israeli soldiers. In the documented footage, they realize he is a Palestinian and some even call to let him go. 
        However, he was found dead at the scene several days after the massacre by the Israeli security forces.
        Abed Razem, Suheib's brother, told Israeli press few days later verified that Hamas called their 
        family and announced they captured Suheib, and that he couldn't sleep since he saw the footage.
      `}
      />
      <H2 className="mt-6 mb-3">Videos</H2>
      <EmbedYoutube embedId="CrXtTYm_NB8" className="mb-2" />
      <EmbedYoutube embedId="HTlDhclRcIA" className="mb-2" />
      <EmbedYoutube embedId="7wDffjnBtec" className="mb-2" />
      <EmbedYoutube embedId="HxvQAFAY4fU" className="mb-2" />
      <EmbedYoutube embedId="pCK49QIVc9U" className="mb-2" />
      <EmbedYoutube embedId="9SvKJzdNY5Y" className="mb-2" />
      <EmbedYoutube embedId="YncV6G0j6i0" className="mb-2" />
      <EmbedYoutube embedId="bH5pCbtpY2U" className="mb-2" />
      <EmbedYoutube embedId="HTlDhclRcIA" className="mb-2" />
      <H2 className="mt-6 mb-3">Tweets</H2>
      <Tweet tweetId="1719639458092376171" />
      <Tweet tweetId="1726167612944478609" />
      <Tweet tweetId="1726172813785231749" />
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
