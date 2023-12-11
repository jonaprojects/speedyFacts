import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import SubHeader from "@/components/typography/SubHeader";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import { Tweet } from "react-twitter-widgets";
import H2 from "@/components/typography/H2";
import Video from "@/components/video/Video";
import ResponsiveVideoGrid from "@/components/responsive_grids/ResponsiveVideoGrid";
import MyImage from "@/components/image/MyImage";
import Article from "@/components/article/Article";

export default function HamasAdmitsIt(props) {
  return (
    <Template>
      <H1 className="mt-6">Hamas Admits it</H1>
      <SubHeader className="mb-5">
        Hamas doesnt bother to hide its genocidal intentions towards the Jews
        and its crimes against the people of Gaza.
      </SubHeader>
      <Fact
        content=" According to Hamas' charter, Article 13, there will not be any negotiated
      settlements with Israel, and Jihad  is the only solution. Qoute: 'There is no solution for the Palestinian question except through Jihad.
    Initiatives, proposals and international conferences are all a waste of time and vain endeavors'"
        className="mb-2"
      />
      <Fact
        content="Article 7 in Hamas' Charter calls for the killing of Muslims by Jews and cites the following hadith: 
        'The Day of Judgement will not come about until Moslems fight the Jews (killing the Jews), when the Jew will hide behind stones and trees. The stones and trees will say O Moslems, O Abdulla, there is a Jew behind me, come and kill him'
        "
        className="mb-2"
      />
      <H2 className="mt-6 mb-3">Videos</H2>
      <ResponsiveVideoGrid>
        <Video embedId="zSgBFPnQiho" />
        <Video embedId="Rz5VoUXEFYI" />
        <Video embedId="7FjmyqYKBEU" />
        <Video embedId="bh-M33hKqrU" />
        <Video embedId="NTbGCxwYOmM" />
        <Video embedId="Yg4VqiW0dyo" />
        <Video embedId="mPWOvwG4_x4" />
        <Video embedId="LJ0mJo2ybkk" />
        <Video embedId="4xNuQP0U4bE" />
      </ResponsiveVideoGrid>
      <H2 className="mt-7 mb-3">Images</H2>
      <MyImage src="hamasCharter1.png" />
      <MyImage src="hamasCharter2.png" className="max-w-md" />
      <H2 className="mb-3 mt-7">Tweets</H2>
      <Tweet tweetId="1393862073008934918" />
      <Tweet tweetId="1718117018799333611" />
      <Tweet tweetId="1731999238689579254" />
      <Tweet tweetId="1734174597124071867" />
      <Tweet tweetId="1734189254526558457" />
      <Tweet tweetId="1730479462234439765" />
      <H2 className="mt-7 mb-3">Further Reading</H2>
      <Article
        title="Covenant of Hamas terror"
        href="https://embassies.gov.il/NEW-YORK/ABOUTISRAEL/Pages/Hamas-Covenant.aspx"
        source="Consulate General of Israel in New York"
      />
      <Article
        title="Hamas Covenant 1988"
        href="https://avalon.law.yale.edu/20th_century/hamas.asp"
        source="Yale Law School - The Avalon Project"
      />
      <Article
        title="Hamas Sermon from the Gaza Strip: Our Doctrine Entails Exterminating the Jews"
        href="https://www.memri.org/tv/hamas-sermon-gaza-strip-our-doctrine-entails-exterminating-jews"
        source="Memri TV"
      />
    </Template>
  );
}
