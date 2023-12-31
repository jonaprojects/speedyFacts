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
import ArticleLink from "@/components/typography/ArticleLink";
import A from "@/components/typography/A";
import Video from "@/components/video/Video";
import Article from "@/components/article/Article";
import MyImage from "@/components/image/MyImage";
import SensitiveMedia from "@/components/sensitive_media/SensitiveMedia";
import ResponsiveVideoGrid from "@/components/responsive_grids/ResponsiveVideoGrid";
import WarningModal from "@/components/modal/WarningModal";

export default function Kidnapped(props) {
  return (
    <Template>
      <H1 className="mt-6">The Hostages</H1>
      <SubHeader className="mb-5">
        In October 7th, at least 240 people were kidnapped to Gaza by the terror
        organization Hamas. Among the kidnapped are babies, children, women and
        the elderly.
      </SubHeader>
      <Fact
        className="mb-2"
        content={`In October 7th, at least 240 people were kidnapped to Gaza by the terror organization Hamas,
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
        content={`
        Some hostages had severe injuries as they were shot or thrown grenades at
      by the terrorists. However, they were not granted adequate medical
      attention. Other hostages reported being treated by veterinarians and
      operated on without anesthesia. For example, Mia Regev (21) was shot by Hamas in the
      leg. She was operated on in Gaza and her leg was connected “the wrong way”
      according to Israeli physicians.
      `}
        className="mb-2"
      />
      <Fact
        content={`
        Many hostages described conditions of malnutrition and even
      near-starvation conditions. Philippine citizen Jimmy Pacheco testified
      that, for some time, he and the other hostages only got briny water and
      half a pita a day. To survive, he collected pieces of toilet paper and
      moistened them with humidity that accumulated on the tunnel's walls,
      before eating them.
      `}
        className="mb-2"
      />
      <Fact
        content={`
         Hamas reportedly drugged some hostages so they appear happier and
      more exuberant, according to Israeli physicians. They also threatened them
      to wave and smile at them, which was also recorded on camera. It’s also
      important to note that many if not all of the hostages had family members
      and friends that were still in the hands of Hamas, when they were
      released.
      `}
        className="mb-2"
      />

      <H2 className="mb-3 mt-6">Videos</H2>
      <ResponsiveVideoGrid>
        <Video embedId="YtBBY1supYk" />
        <Video embedId="ICR5ml2YPkI" />
        <Video embedId="QJuL__lXAjA" />
        <Video embedId="-73WHGrOVsY" />
        <Video embedId="7Y9fHUOhTMY" />
        <Video embedId="pbez-juyHbQ" />
        <Video embedId="40LZFCIKoBc" />
        <Video embedId="-wMld0BmVDk" />
        <Video embedId="XGub-s4Jr6w" />
        <Video embedId="IWrzlX2FnzI" />
        <Video embedId="P0EBhKtI5zU" />
        <Video embedId="y_9LyHu01Oo" />
      </ResponsiveVideoGrid>
      <H2 className="mt-6 mb-3">Images</H2>
      <SensitiveMedia
        src="/naamalevy.png"
        alt="Naama Levy violently kidnapped, blood on her crotch and all over her."
      />
      <SensitiveMedia
        src="/shaniLouk1.png"
        alt="Shani Louk dragged by terrorists"
      />
      <SensitiveMedia
        src="/hamasBabies1.png"
        alt="Hamas kidnapped Babies"
        className="max-w-lg"
      />
      <H2 className="mt-6 mb-3">Tweets</H2>
      <Tweet tweetId="1711524024226845039" />
      <Tweet tweetId="1712902786461913333" />
      <Tweet tweetId="1728723979450327204" />
      <Tweet tweetId="1729516785227972892" />
      <Tweet tweetId="1735273157609533639" />
      <Tweet tweetId="1732642867993006254" />
      <Tweet tweetId="1729974179145888015" />
      <Tweet tweetId="1726626412365484513" />
      <Tweet tweetId="1731566416707432748" />
      <Tweet tweetId="1732754038393905165" />
      <Tweet tweetId="1733562832589848717" />
      <H2 className="mt-6">Exhibitions</H2>
      <P className="mb-2">
        People all around the world have created touching exhibitions to raise
        awareness to the status of the kidnapped civilians - including little
        kids and babies.
      </P>
      <H3 className="mt-6">Los Angeles</H3>
      <div className="md:flex md:gap-3">
        <MyImage
          src="/TeddyBearsLA.png"
          alt="Teddy Bears for the kidnapped kids, LA."
          className="md:w-1/3 h-full"
        />
        <MyImage
          src="/DollsLA.png"
          alt="Teddy Bears for the kidnapped kids, LA."
          className="md:w-1/3 h-full"
        />
      </div>
      <H2 className="mt-6 mb-3">Sources</H2>
      <H3>Hostages lists</H3>
      <ul>
        <li className="mb-1">
          <Article
            title="List of the hostages"
            href="https://kan.org.il/lobby/kidnapped/"
            source="Kan 11"
          />
        </li>
        <li className="mb-1">
          <Article
            title="Bring Them Home - Full List of the hostages"
            href="https://stories.bringthemhomenow.net/"
            source="Hostages And Missing Families Forum"
          />
        </li>
        <li className="mb-1">
          <Article
            title="We're Waiting For You!"
            href="https://bringthemhome.mako.co.il/"
            source="Mako.co.il"
          />
        </li>
      </ul>
      <H2 className="mt-6 mb-3">Articles</H2>
      <ul>
        <li className="mb-1">
          <Article
            title="Video shows apparent death of Israeli hostages in Hamas custody"
            href="https://www.washingtonpost.com/investigations/2023/10/09/israel-hamas-hostage-death/"
            source="The Washington Post"
          />
        </li>
        <li className="mb-1">
          <Article
            title="Hamas drugged hostages before releasing them"
            href="https://jewishinsider.com/2023/12/hamas-hostages-klonopin-israel-gaza-release/"
            source="Jewish Insider"
          />
        </li>
        <li className="mb-1">
          <Article
            title="Starvation, whispering and psychological terror: Life of captives in Gaza"
            href="https://www.ynetnews.com/article/h13wxhlba"
            source="Ynet"
          />
        </li>
        <li className="mb-1">
          <Article
            title={`Itai was operated on without anesthesia, Mia's leg was joined upside down: the Regev brothers with hard testimonies about what they went through in captivity`}
            href="https://www.mako.co.il/news-military/6361323ddea5a810/Article-afbda4f43d54c81027.htm"
            source="N12"
          />
        </li>
        <li className="mb-1">
          <Article
            title={`Hamas forced hostage kids to watch videos of Oct. 7 atrocities, family member says`}
            href="https://www.timesofisrael.com/hamas-forced-hostage-kids-to-watch-videos-of-oct-7-atrocities-family-member-says/"
            source="Times Of Israel"
          />
        </li>
        <li className="mb-1">
          <Article
            title="Horrors Of Captivity Revealed: Maya’s Foot Attached Wrongly, Itai Operated On Without Anasthesia"
            href="https://vinnews.com/2023/12/10/horrors-of-captivity-revealed-mayas-foot-attached-wrongly-itai-operated-without-anasthesia/"
            source="VIN News"
          />
        </li>
        <li className="mb-1">
          <Article
            title={`Hamas forced hostage kids to watch videos of Oct. 7 atrocities, family member says`}
            href="https://www.timesofisrael.com/hamas-forced-hostage-kids-to-watch-videos-of-oct-7-atrocities-family-member-says/"
            source="Times Of Israel"
          />
        </li>
      </ul>
      <WarningModal />
    </Template>
  );
}
