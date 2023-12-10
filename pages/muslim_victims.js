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
import Video from "@/components/video/Video";
import Article from "@/components/article/Article";
import ResponsiveVideoGrid from "@/components/responsive_grids/ResponsiveVideoGrid";
import MyImage from "@/components/image/MyImage";

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
      <Fact
        content={`Hamid Abu Ar'ar, a Muslim Bedouin said in an
      interview that at October 7th Hamas terrorists saw his wife Fatma with a
      hijab and still shot her. He told her in her last moments to pray for
      Allah. He added: "They killed a mother, a Muslim woman wearing a hijab. A mother of
      4 daughters who study the Quran. Which Islam are we talking about? Our
      Islam, my friends, does not preach this."`}
        className="mb-2"
      />
      <Fact
        content={`Aisha and Bilal Ziyadne, Bedouin siblings, were abducted by Hamas. Aisha is 17 years old, Bilal is 18,
         and Aisha wears a hijab. Despite being Muslims, 
         they were kidnapped and held hostage by Hamas for months.`}
        className="mb-2"
      />
      <Fact
        content="Amar Abu Sabeila, a Muslim Bedouin was killed while trying to save two Jewish little girls from Hamas
      in Sderot at October 7th. The little girls survived and he is considered an Israeli hero.
      "
        className="mb-2"
      />
      <Fact
        content="Masad Armilat, a Muslim Bedouin, bravely saved 14 people during a shooting by Hamas terrorists at a gas station near Sderot on October 7th. 
      He gathered victims, secured them in a bomb shelter, and cleverly used helium tanks to deter the attackers, 
      ultimately saving their lives.​"
      />
      <H2 className="mt-6 mb-3">Videos</H2>
      <ResponsiveVideoGrid>
        <Video embedId="CrXtTYm_NB8" className="mb-2" />
        <Video embedId="HTlDhclRcIA" className="mb-2" />
        <Video embedId="7wDffjnBtec" className="mb-2" />
        <Video embedId="HxvQAFAY4fU" className="mb-2" />
        <Video embedId="pCK49QIVc9U" className="mb-2" />
        <Video embedId="9SvKJzdNY5Y" className="mb-2" />
        <Video embedId="YncV6G0j6i0" className="mb-2" />
        <Video embedId="bH5pCbtpY2U" className="mb-2" />
        <Video embedId="VgNtsUkxF2g" className="mb-2" />
        <Video embedId="D2Fn69O6haY" className="mb-2" />
        <Video embedId="G2JRnk7HK48" className="mb-2" />
        <Video embedId="KJeV9BFnnGc" className="mb-2" />
      </ResponsiveVideoGrid>
      <H2 className="mt-7 mb-3">Images</H2>
      <MyImage src="/releasedBedouin1.png" />
      <br />
      <small className="text-slate-500">
        Aisha Al Ziadna released from Hamas captivity.
      </small>
      <H2 className="mt-6 mb-3">Tweets</H2>
      <Tweet tweetId="1719639458092376171" />
      <Tweet tweetId="1726167612944478609" />
      <Tweet tweetId="1726172813785231749" />
      <Tweet tweetId="1727327376223178939" />
      <Tweet tweetId="1727836684438397056" />
      <Tweet tweetId="1729083032861364241" />
      <Tweet tweetId="1730653911365587073" />
      <Tweet tweetId="1726355586583851512" />
      <Tweet tweetId="1731451253064966445" />
      <Tweet tweetId="1731313838606152177" />
      <H2 className="mt-6 mb-3">Articles</H2>
      <ul>
        <li className="mb-1">
          <Article
            href="https://www.timesofisrael.com/newly-released-footage-shows-palestinian-driver-in-hamas-hands-before-oct-7-slaying/"
            title="Newly released footage shows Palestinian driver in Hamas hands before
        Oct. 7 slaying"
            source="Times Of Israel"
          />
        </li>
        <li className="mb-1">
          <Article
            title="Arab Citizens of Israel Were Not Spared in the Hamas-Led
              Massacres"
            href="https://www.nytimes.com/2023/10/13/world/middleeast/arab-israeli-hamas-attacks.html"
            source="New York Times"
          />
        </li>
        <li>
          <Article
            title="Amer Abu Sabila, 25: killed trying to save two young girls in Sderot"
            href="https://www.timesofisrael.com/presumed-captive-amer-odeh-abu-sabila-on-guard-duty-in-sderot/"
            source="Times Of Israel"
          />
        </li>
      </ul>
    </Template>
  );
}
