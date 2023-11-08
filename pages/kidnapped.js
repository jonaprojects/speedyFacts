import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import SubHeader from "@/components/typography/SubHeader";
import H2 from "@/components/typography/H2";
import H3 from "@/components/typography/H3";
import { Tweet } from "react-twitter-widgets";
import EmbedYoutube from "@/components/embed_youtube/EmbedYoutube";

export default function Kidnapped(props) {
  return (
    <Template>
      <H1 className="mt-6">The Kidnapped</H1>
      <SubHeader className="mb-5">
        In October 7th, at least 240 people were kidnapped to Gaza by the terror
        organization Hamas. Among the kidnapped are babies, children, women and
        the elderly.
      </SubHeader>
      <Fact
        className="mb-2"
        content={`In October 7th, at leats 240 were kidnapped to Gaza by the terror organization Hamas,
        some were taken after they were already dead. It is estimated that more than 30 babies and children and 10-20 elderly were kidnapped.
        `}
      />
      <Fact
        className="mb-2"
        content={`
      Some of the hostages had foreign citizenship, some were foreign workers who acquired a job in Israel in order
      to provide for their families: 54 Thai citizens, 12 Germans, 10 Italians, 6 Russians, and many more from hostages around the world.
      `}
      />
      <Fact
        className="mb-2"
        content={`
        According to The Washington Post, at least 4 Israeli hostages (Civilians) 
        were executed by Hamas in Kibutz Be'eri.
        Link to the article:
        https://www.washingtonpost.com/investigations/2023/10/09/israel-hamas-hostage-death/
      `}
      />
      <H2 className="mb-3 mt-6">Videos</H2>
      <EmbedYoutube embedId="YtBBY1supYk" className="mb-2" />
      <EmbedYoutube embedId="ICR5ml2YPkI" className="mb-2" />
      <EmbedYoutube embedId="QJuL__lXAjA" className="mb-2" />
      <EmbedYoutube embedId="7Y9fHUOhTMY" className="mb-2" />
      <EmbedYoutube embedId="pbez-juyHbQ" className="mb-2" />
      <EmbedYoutube embedId="40LZFCIKoBc" className="mb-2" />

      <H2 className="mt-6 mb-3">Hostages</H2>
      <H2 className="mt-6 mb-3">Tweets</H2>
      <Tweet tweetId="1711524024226845039" />
      <H2 className="mt-6">Exhibitions</H2>
      <P className="mb-2">
        People all around the world have created touching exhibitions to raise
        awareness to the status of the kidnapped civilians - including little
        kids and babies.
      </P>
      <H3 className="mt-6">Los Angeles</H3>
      <div className="md:flex md:gap-3">
        <img
          src="/TeddyBearsLA.jpeg"
          alt="Teddy Bears for the kidnapped kids, LA."
          className="object-fit md:w-1/3 md:mb-0 mb-3"
        />
        <img
          src="/DollsLA.jpeg"
          alt="Teddy Bears for the kidnapped kids, LA."
          className="object-fit md:w-1/3"
        />
      </div>
    </Template>
  );
}
