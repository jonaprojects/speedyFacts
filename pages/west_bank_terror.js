import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import SubHeader from "@/components/typography/SubHeader";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import EmbedYoutube from "@/components/embed_youtube/EmbedYoutube";
import { Tweet } from "react-twitter-widgets";
import H2 from "@/components/typography/H2";
import ArticleLink from "@/components/typography/ArticleLink";
import Video from "@/components/video/Video";
import MyImage from "@/components/image/MyImage";
import ResponsiveGrid from "@/components/responsive_grids/ResponsiveGrid";
import A from "@/components/typography/A";
import ResponsiveVideoGrid from "@/components/responsive_grids/ResponsiveVideoGrid";
export default function WestBankTerrorism(props) {
  return (
    <Template>
      <H1 className="mt-6">Hamas & Terrorism In The West Bank.</H1>
      <SubHeader className="mb-5">
        Some claim that Hamas and other terrorist groups are nonexistent in the
        West Bank and use that as an excuse to condemn Israeli settlements.
      </SubHeader>
      <H2 className="mt-6 mb-3">Facts</H2>
      <Fact
        content="An opinion poll conducted by Birzeit University's Arab World for
        Research & Development (AWRAD) during the fourth week of the 2O23 Gaza war revealed that a majority of surveyed
        Palestinians in the West Bank support the October 7 massacre carried out
        by Hamas, and an even wider majority have a positive view of the various
        terrorist factions."
        className="mb-2"
      />
      <Fact
        content="According to a poll by Birzeit University,
      76% support Hamas, 89% support its military wing, al-Qassam Brigades,
      84% support the Palestinian Islamic Jihad and 98% felt more proud to be Palestinian following 
      the October 7th Massacre. 668 Palestinians in the West Bank and Gaza Strip were surveyed, 
      during the 4th week of the 2023 Gaza war."
      />
      <H2 className="mt-7 mb-3">Images</H2>
      <ResponsiveGrid>
        <div>
          <MyImage
            src="/HamasRamalla.png"
            alt="Issam Rimawi Flash90 / Hamas supporters at a rally on the occasion of Student Council elections at Birzeit University in Ramallah."
          />
          <br />
          <small className="text-sm text-slate-500">
            Issam Rimawi Flash90 / Hamas supporters at a rally on the occasion
            of Student Council elections at Birzeit University in Ramallah.
          </small>
        </div>
        <div>
          <MyImage
            src="/HamasBirzeitUniversity.png"
            alt="Issam Rimawi Flash90 / Hamas supporters at a rally on the occasion of Student Council elections at Birzeit University in Ramallah."
          />
          <br />
          <small className="text-sm text-slate-500">
            Flash90 / Palestinian student supporters of Hamas in Gaza wave the
            movement&apos;s flag during a rally at Birzeit University, near the
            West Bank city of Ramallah.
          </small>
        </div>
        <div>
          <MyImage
            src="/HamasRamalla1.png"
            alt="Hamas flags in Ramalla celebrating prisoner release Nov 2023"
          />
          <br />
          <small className="text-sm text-slate-500">
            Hamas flags in Ramalla celebrating prisoner release Nov 2023
          </small>
        </div>
        <div>
          <MyImage
            src="/HamasRamalla2.png"
            alt="Hamas flags in Ramalla celebrating prisoner release Nov 2023"
          />
          <br />
          <small className="text-sm text-slate-500">
            Hamas flags in Ramalla celebrating prisoner release Nov 2023
          </small>
        </div>
      </ResponsiveGrid>
      <div>
        <MyImage
          src="/Tulkarem1.png"
          alt="Hamas executes two Palestinians in Tulkarem, West Bank [EXPLICIT]"
        />
        <br />
        <small className="text-sm text-slate-500">
          Hamas executes two Palestinians in Tulkarem, West Bank [EXPLICIT]
        </small>
      </div>
      <H2 className="mt-6 mb-3">Videos</H2>
      <ResponsiveVideoGrid>
        <Video embedId="Lqw2E9HesM8" />
        <Video embedId="JM3wJZdP3U0" />
        <Video embedId="ZO7tAs4x82g" />
        <Video embedId="EoX-hUj5fVs" />
      </ResponsiveVideoGrid>
      <H2 className="mb-3 mt-6">Tweets</H2>
      <Tweet tweetId="1725098802388881544" />
      <Tweet tweetId="1727679947475402829" />
      <Tweet tweetId="1728605809783808491" />
      <Tweet tweetId="1732131621589962870" />
      <Tweet tweetId="1730099569717920174" />
      <H2 className="mb-3 mt-6">Articles</H2>
      <ArticleLink
        href="https://www.i24news.tv/en/news/middle-east/palestinian-territories/1700158968-survey-finds-majority-in-the-west-bank-justify-the-oct-7-massacre"
        title="Survey finds majority in the West Bank support the Oct 7 massacre"
        source="i24 News"
      />
      <H2 className="mt-7 mb-3">Further Research</H2>
      <A href="https://www.fdd.org/analysis/2022/12/14/mapping-west-bank-insurgency/">
        Mapping Terrorism In The West Bank
      </A>
    </Template>
  );
}
