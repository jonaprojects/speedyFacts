import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import SubHeader from "@/components/typography/SubHeader";
import H2 from "@/components/typography/H2";
import A from "@/components/typography/A";
import { Tweet } from "react-twitter-widgets";
import ArticleLink from "@/components/typography/ArticleLink";
import Video from "@/components/video/Video";
import Article from "@/components/article/Article";
import ResponsiveVideoGrid from "@/components/responsive_grids/ResponsiveVideoGrid";
import H3 from "@/components/typography/H3";
import MyImage from "@/components/image/MyImage";
import ImageDescription from "@/components/typography/ImageDescription";

export default function HamasEducation(props) {
  return (
    <Template>
      <H1 className="mt-6">Hamas Education</H1>
      <SubHeader className="mb-5">
        Hamas and the Palestinian Authority have been indoctrinating kids openly
        for a long time. Children are being taught from a young age to hate the
        Jews and to commit Jihad.
      </SubHeader>
      <Fact
        content={`
      In an episode of the "Pioneers of Tomorrow" children's show broadcast from Gaza by Hamas, giant bee Nahoul encourages a boy from Jenin to beat up his Jewish neighbors.
       "If his neighbors are Jewish or Zionist, that goes without saying," says Rawan, the girl host.
        She also pledges to shoot all Jews when she will grow up to be a policewoman.  
       The show aired on Al-Aqsa TV on May 2, 2014.`}
        className="mb-2"
      />
      <Fact
        content={` In addition to ideological and religious indoctrination, young children
        and teens also receive intensive military training as preparation for
        joining Hamas' military wing or one of the other terror organizations as
        adults. This training takes place in Hamas' schools, but especially in the
        organization's vast network of summer camps. Attended by hundreds of
        thousands of participants every year, the camps cultivate a "spirit of
        resistance" and instill a commitment to uncompromising armed struggle
        against Israel, while also teaching a wide range of combat skills. Many of
        them are named after terrorists who carried armed operations and suicide
        attacks against Israeli civilians.`}
        className="mb-2"
      />
      <Fact
        content={` A major platform for indoctrination is Hamas' media. Its television
        channels, for example, air programs, some aimed at preschoolers, that
        inculcate values of jihad and martyrdom and glorify terrorists through
        cartoons, songs, poems and puppet shows. Many of the shows, as well as
        Hamas rallies and conferences, feature children who articulate the
        movement's ideology. Programs aired on Hamas' television channels have
        shown kindergarten children, dressed in uniforms and armed with mock
        weapons, staging plays that simulate military attacks and hostage taking.`}
        className="mb-2"
      />
      <H2 className="mt-6 mb-3">Videos</H2>
      <ResponsiveVideoGrid>
        <Video embedId="u4TVOXHt_PA" className="mb-2" />
        <Video embedId="vCWMBvxWKL0" className="mb-2" />
        <Video embedId="1sDZlo_hllI" className="mb-2" />
        <Video embedId="9Pw8SO0GOJU" className="mb-2" />
        <Video embedId="yfj6Pf6aNqg" className="mb-2" />
        <Video embedId="gsZtBu5yiHY" className="mb-2" />
      </ResponsiveVideoGrid>
      <H3 className="mt-4 mb-2">Fatah Education</H3>
      <ResponsiveVideoGrid>
        <Video embedId="sSRy4WMqrh8" />
        <Video embedId="MKvN-PEO5QI" />
        <Video embedId="Hcyg55vOviQ" />
      </ResponsiveVideoGrid>
      <H2 className="mt-6 mb-3">Images</H2>
      <div className="max-w-xl">
        <MyImage
          src="/sinwarchild.png"
          className="max-w-lg"
          alt="Yahya Sinwar, the leader of Hamas in Gaza, holding a child with military
        uniform and a gun in Gaza."
        />
        <ImageDescription>
          Yahya Sinwar, the leader of Hamas in Gaza, holding a child with
          military uniform and a gun in Gaza.
        </ImageDescription>
        <MyImage src="/kidsPlayTerrorists2.png" className="max-w-lg mb-2" />
        <br />
        <MyImage
          src="/jihadCamp1.png"
          alt="  Graduation Ceremony of Youth Military Camp of Islamic Palestinian Jihad
        on Aug 18, 2015"
        />
        <ImageDescription>
          Graduation Ceremony of Youth Military Camp of Islamic Palestinian
          Jihad on Aug 18, 2015
        </ImageDescription>
        <br />
        <MyImage
          src="/naziTextbookGaza.png"
          alt='A Textbook found in a school in Gaza: "The Big lie, burning of 6
        Million Jews in Gas Chambers"'
        />
        <ImageDescription>
          A Textbook found in a school in Gaza: &quot;The Big lie, burning of 6
          Million Jews in Gas Chambers&quot;
        </ImageDescription>
        <MyImage
          src="/childrenJihad1.png"
          alt="Children and teenagers in Palestinian Islamic Jihad camp"
        />
        <ImageDescription>
          Children and teenagers in Palestinian Islamic Jihad camp
        </ImageDescription>
        <MyImage
          src="/childrenJihad2.png"
          alt="Gazan Child dressed up as a suicide bomber in Hamas."
        />
        <ImageDescription>
          Gazan Child dressed up as a suicide bomber in Hamas.
        </ImageDescription>
        <MyImage src="/childrenJihad4.png" alt="" />
        <ImageDescription>
          Gazan child with a rifle in a Hamas training camp.
        </ImageDescription>

        <MyImage src="/childrenJihad3.png" alt="" />
      </div>

      <small className="bg-slate-500"></small>
      <H2 className="mt-7 mb-3">Tweets</H2>
      <Tweet tweetId="1727328947455553733" />
      <Tweet tweetId="1722919232315228447" />
      <Tweet tweetId="1729551371983028423" />
      <Tweet tweetId="1727331089486938481" />
      <Tweet tweetId="1663621350290751489" />
      <H2 className="mt-6 mb-3">Articles</H2>
      <ul>
        <li className="mb-1">
          <Article
            href="https://www.memri.org/tv/hamas-tv-childrens-show-encourages-killing-jews"
            title="Hamas TV Children's Show Encourages Killing Jews"
            source="MEMRI TV"
          />
        </li>
        <li className="mb-1">
          <Article
            href="https://www.memri.org/tv/children-hamas-summer-camps-undergo-military-training-handle-weapons-simulate-conquering-jerusalem"
            title="At Hamas Summer Camps, Children Undergo Military Training, Learn To Handle Weapons, Simulate Raiding Israeli Military Posts, Conquering Jerusalem"
            source="MEMRI TV"
          />
        </li>
        <li className="mb-1">
          <Article
            title="Palestinian Teenage Terror - Inherently Illegal, But Does Anyone Care?"
            href="https://www.jewishpress.com/indepth/opinions/palestinian-teenage-terror-inherently-illegal-but-does-anyone-care/2023/03/15/"
            source="Jewish Press"
          />
        </li>
        <li className="mb-1">
          <Article
            title="Editorial: Reform UNRWA, a renegade agency committed to hate"
            href="https://jewishjournal.org/2017/05/04/editorial-reform-unrwa-a-renegade-agency-committed-to-hate/"
            source="Jewish Jorunal"
          />
        </li>
      </ul>
    </Template>
  );
}
