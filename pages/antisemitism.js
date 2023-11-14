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
        className="object-fit mt-6 mb-3"
      />
      <H2 className="mt-8 mb-2">Facts</H2>
      <Fact
        className="mb-2 "
        content={`
            "The spike of antisemitic incidents across Europe has reached extraordinary
            levels in the last few days, reminiscent of some of the darkest times in
            history. European Jews today are again living in fear. We have seen a
            resurgence of antisemitic incidents and rhetoric in the European Union and
            worldwide: Molotov cocktails thrown on a synagogue in Germany, stars of
            David sprayed on residential buildings in France, a Jewish cemetery
            desecrated in Austria, Jewish stores and synagogues attacked in Spain,
            demonstrators chanting hate slogans against Jews". -European Commission, November 5th, 2023.
      `}
      />
      <Fact
        className="mb-2"
        content={`According to a CNN survey from 2018, 12% of young people in Austria, and 20% of
      people in ages 18-34 in France have never heard of the holocaust. 
      More than a quarter believe Jews have too much influence in business and finance. One in five believe anti-Semitism is a response to the everyday actions of Jews. 
    Across the seven countries in the survey, one in 10 people said they have an unfavorable attitude toward Jews.`}
      />
      <H2 className="mt-8 mb-3">Videos</H2>
      <EmbedYoutube embedId="norywOQStcY" />

      <H2 className="mt-8 mb-3">Tweets</H2>
      <Tweet tweetId="1723819227398779064" />
      <Tweet tweetId="1723470687384252659" />
      <Tweet tweetId="1723666457236562411" />
      <Tweet tweetId="1723445182597611908" />
      <Tweet tweetId="1723406016828580211" />
      <Tweet tweetId="1723789427137196260" />

      <H2 className="mt-6 mb-3">Sources</H2>
      <ul style={{ listStyle: "initial" }}>
        <li>
          <ArticleLink
            title="European Commission Statement on antisemitic incidents in Europe"
            href="https://ec.europa.eu/commission/presscorner/detail/en/statement_23_5527"
            source="European Commission"
          />
        </li>
        <li>
          <ArticleLink
            title="A shadow over Europe"
            href="https://edition.cnn.com/interactive/2018/11/europe/antisemitism-poll-2018-intl/"
            source="CNN"
          />
        </li>
        <li>
          <ArticleLink
            title="‘An existential threat: Antisemitic attacks soar across Europe amid Israel-Hamas war"
            href="https://edition.cnn.com/2023/11/04/world/an-existential-threat-antisemitic-attacks-soar-across-europe-amid-israel-hamas-war/index.html"
            source="CNN"
          />
        </li>
        <li>
          <ArticleLink
            title="For Europe's Jews, a World of Fear"
            href="https://www.nytimes.com/2023/10/31/world/europe/europe-antisemitism-israel-hamas.html"
            source="New York Times"
          />
        </li>
      </ul>

      <ArticleLink
        title="Wave of Antisemitism Has European Jews Wondering if They Will Ever Be Safe"
        href="https://www.wsj.com/world/europe/israel-hamas-war-sparks-wave-of-antisemitism-in-europe-fef6ee9d"
        source="Wall Street Jorunal"
      />
    </Template>
  );
}
