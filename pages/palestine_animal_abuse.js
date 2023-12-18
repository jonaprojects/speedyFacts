import React, { useState, useEffect, useCallback } from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import SubHeader from "@/components/typography/SubHeader";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import EmbedYoutube from "@/components/embed_youtube/EmbedYoutube";
import { Tweet } from "react-twitter-widgets";
import H2 from "@/components/typography/H2";
import Article from "@/components/article/Article";
import WarningModal from "@/components/modal/WarningModal";
import Video from "@/components/video/Video";

export default function PalestineAnimalAbuse(props) {
  return (
    <Template>
      <H1 className="mt-6">Palestine Animal Abuse</H1>
      <SubHeader className="mb-5">
        Palestinians are known for brutally abusing animals, and especially
        dogs. This attests to the level of violence and cruelty in their
        society.
      </SubHeader>
      <Fact
        content="In 2022, the Palestinian mayor of Hebron, Tayseer Abu Sneineh, offered 5$
      to whoever kills a stray dog and delivers its dead body."
      />

      <H2 className="mt-6 mb-3">Videos</H2>
      <div className="max-w-xl">
        <Video embedId="r3NKEdqdvdM" />
      </div>
      <H2 className="mb-3 mt-6">Tweets</H2>
      <Tweet tweetId="1726053887323292060" />
      <Tweet tweetId="1726044133347754329" />
      <Tweet tweetId="1735120466413597165" />
      <H2 className="mt-7 mb-3">Articles</H2>
      <Article
        title="Palestinian mayor offers bounty to residents who kill stray dogs"
        href="https://nypost.com/2022/11/05/palestinian-mayor-offers-bounty-to-residents-who-kill-stray-dogs/"
        source="New York Post"
      />
      <Article
        title="Gaza Cattle Torture 'Worst Case of Animal Cruelty' in History, Australian Group Says"
        href="https://www.haaretz.com/2013-12-12/ty-article/gaza-cattle-torture-worst-ever/0000017f-e913-df2c-a1ff-ff53d92f0000"
        source="Haaretz"
      />
      <WarningModal />
    </Template>
  );
}
