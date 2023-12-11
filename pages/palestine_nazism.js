import React, { useState, useEffect, useCallback } from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import SubHeader from "@/components/typography/SubHeader";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import EmbedYoutube from "@/components/embed_youtube/EmbedYoutube";
import { Tweet } from "react-twitter-widgets";
import H2 from "@/components/typography/H2";
import Modal, { ModalLink } from "@/components/modal/Modal";
import { useRouter } from "next/router";
import ArticleLink from "@/components/typography/ArticleLink";
import Article from "@/components/article/Article";
import MyImage from "@/components/image/MyImage";

export default function PalestineAnimalAbuse(props) {
  const [warningModalOpen, setWarningModalOpen] = useState(false);
  const router = useRouter();

  const openModal = useCallback(() => {
    setWarningModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setWarningModalOpen(false);
  }, []);

  useEffect(() => {
    openModal();
  }, [openModal]);

  return (
    <Template>
      <H1 className="mt-6">Palestine & Nazism</H1>
      <SubHeader className="mb-5">
        In WW2, Arab Palestinian leader Amin al-Husseini met with Hitler and the
        two discussed about the final solution. In the Hamas-ruled Gaza, kids
        are often educated to glorify Hitler, and to deny the holocaust
        altogether.
      </SubHeader>
      <Fact
        content="In 1941 the Arab Palestinian leader Haj Amin al-Husseini met Hitler in
      Berlin to discuss their alliance and mutual desire to get rid of the Jews.
      He reportedly visited a Nazi concetration camp in 1942."
      />
      <H2 className="mt-6 mb-3">Videos</H2>
      <H2 className="mt-6 mb-3">Image</H2>
      <div className="max-w-xl">
        <MyImage
          src="/naziTextbookGaza.png"
          alt='A Textbook found in a school in Gaza: "The Big lie, burning of 6
        Million Jews in Gas Chambers"'
        />
        <small className="text-slate-500 block mb-6">
          A Textbook found in a school in Gaza: &quot;The Big lie, burning of 6
          Million Jews in Gas Chambers&quot;
        </small>
        <MyImage
          src="mufti1.png"
          alt="Amin al-Husseini, the mufti of Jerusalem, meets German Foreign Minister Joachim von Ribbentrop in Berlin, November 20, 1941."
        />
        <small className="text-slate-500 text-sm mb-6 mt-1 block">
          Amin al-Husseini, the mufti of Jerusalem, meets German Foreign
          Minister Joachim von Ribbentrop in Berlin, November 20, 1941. (photo
          credit: JEWISH AGENCY)
        </small>
        <MyImage
          src="mufti5.png"
          alt="Illustrative: Hitler hosts Grand Mufti of Jerusalem Haj Amin al-Husseini in 1941 in Germany. (Heinrich Hoffmann Collection/Wikipedia)"
        />
        <small className="text-slate-500 text-sm mb-6 mt-1 block">
          Illustrative: Hitler hosts Grand Mufti of Jerusalem Haj Amin
          al-Husseini in 1941 in Germany. (Heinrich Hoffmann
          Collection/Wikipedia)
        </small>
        <MyImage
          src="mufti2.png"
          alt="al-Hajj Amin al-Husseini visits the Trebbin concentration camp, 1942 (KEDEM AUCTION HOUSE)"
        />
        <small className="text-slate-500 text-sm mb-5 mt-1 block">
          al-Hajj Amin al-Husseini visits the Trebbin concentration camp, 1942
          (photo credit: KEDEM AUCTION HOUSE)
        </small>
        <MyImage
          src="mufti3.png"
          alt="al-Hajj Amin al-Husseini visits the Trebbin concentration camp, 1942 (KEDEM AUCTION HOUSE)"
        />
        <small className="text-slate-500 text-sm mb-6 mt-1 block">
          al-Hajj Amin al-Husseini visits the Trebbin concentration camp, 1942
          (photo credit: KEDEM AUCTION HOUSE)
        </small>
        <MyImage
          src="mufti4.png"
          alt="Bosnia and Herzegovina, Haj Amin al-Husseini, the Mufti of Jerusalem, reviewing a unit of Muslim Bosnians in the service of the Nazis"
        />
        <small className="text-slate-500 text-sm mb-6 mt-1 block">
          Bosnia and Herzegovina, Haj Amin al-Husseini, the Mufti of Jerusalem,
          reviewing a unit of Muslim Bosnians in the service of the Nazis (photo
          credit: Yad Vashem).
        </small>
      </div>
      <H2 className="mt-7 mb-3">Tweets</H2>
      <Tweet tweetId="1723470687384252659" />
      <H2 className="mt-7 mb-3">Articles</H2>
      <Article
        title="Full official record: What the mufti said to Hitler"
        href="https://www.timesofisrael.com/full-official-record-what-the-mufti-said-to-hitler/"
        source="The Times Of Israel"
      />
      <Article
        title="PA official: Nazi-collaborator Mufti is leader and ‘role model’"
        href="https://www.jpost.com/middle-east/pa-official-nazi-collaborator-mufti-is-leader-and-role-model-595511"
        source="The Jerusalem Post"
        className="mb-1"
      />
      <Article
        title="Relations between Nazi Germany and the Arab world"
        href="https://en.wikipedia.org/wiki/Relations_between_Nazi_Germany_and_the_Arab_world"
        source="Wikipedia"
        className="mb-1"
      />
      <Article
        title="Photographic Evidence Shows Palestinian Leader Amin al-Husseini at a Nazi Concentration Camp"
        href="https://www.tabletmag.com/sections/news/articles/amin-al-husseini-nazi-concentration-camp"
        source="Tablet"
        className="mb-1"
      />
    </Template>
  );
}
