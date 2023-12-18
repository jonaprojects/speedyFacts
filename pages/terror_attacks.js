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
import Article from "@/components/article/Article";
import MyImage from "@/components/image/MyImage";
import ImageDescription from "@/components/typography/ImageDescription";

export default function TerrorAttacks(props) {
  return (
    <Template>
      <H1 className="mt-6">Terror Attacks In Israel</H1>
      <SubHeader className="mb-5">
        Palestinians have committed many terror attacks against Israelis
        throughout the years. From suicide bombings to mass shootings and
        stabbings, Palestinian civilians have done it all.
      </SubHeader>
      <Fact
        content="9 people - 4 Israelis and five foreign nationals - were killed and
        85 injured, 14 of them seriously, when a bomb exploded in the crowded
        Frank Sinatra cafeteria on the Hebrew University Mt. Scopus campus shortly
        after 13:30. Hamas claimed responsibility for the attack."
        className="mb-2"
      />
      <Fact
        content="In August 4th, 2002, A Palestinian suicide bomber named Jihad Hamadeh
        exploded Bus No.361 that was on its way from Haifa to Safed. 9 People were
        killed, 38 were injured. Among the dead two were Philipine women."
        className="mb-2"
      />
      <Fact
        content="The Ma'alot massacre was a Palestinian terrorist attack that occurred on
      14-15 May 1974 and involved the hostage-taking of 115 Israelis, mainly
      school children, which ended in the murder of 25 hostages and six other
      civilians. It began when three armed members of the Democratic Front for
      the Liberation of Palestine (DFLP) infiltrated Israel from Lebanon."
        className="mb-2"
      />
      <Fact
        content="On August 9, 2001, 15 people were killed, including 7 children, and about
      130 were injured in a suicide bombing at the Sbarro pizzeria at the corner
      of King George Street and Jaffa Road in downtown Jerusalem. Hamas and
      Palestinian Islamic Jihad claimed responsibilty for the attack."
        className="mb-2"
      />
      <Fact
        content="March 6, 2008 - Eight students of the Mercaz Harav Yeshiva in Jerusalem were
      killed when a terrorist armed with a Kalashnikov assault rifle infiltrated
      the yeshiva and opened fire in the library where about 80 people were
      gathered, mostly teenagers. Eleven others were wounded, three critically.
      The terrorist, a resident of East Jerusalem, was killed by an IDF officer."
        className="mb-2"
      />
      <Fact
        content="Dec 5, 2005 - Five people were killed and over 50 wounded in a suicide
      bombing at the entrance to the Sharon shopping mall in Netanya. The
      terrorist detonated the bomb when he was stopped by security guards, one
      of whom was killed. The Islamic Jihad claimed responsibility for the
      attack."
        className="mb-2"
      />
      <Fact
        content="On 1 June 2001, a Hamas-affiliated Islamist terrorist blew himself up
      outside the Dolphinarium discotheque on the beachfront in Tel Aviv,
      Israel, killing 21 Israelis, 16 of whom were teenagers. The majority of
      the victims were Israeli teenage girls whose families had recently
      immigrated from the former Soviet Union."
        className="mb-2"
      />
      <Fact
        content="On October 4, 2003, Hanadi Jaradat, a law student, entered the Maxim
      restaurant located near the beach in Haifa and sat down to have a meal. At
      that point, no one knew that she was wearing an explosive belt. After she
      finished eating, she detonated the device, killing 21 people and wounding
      four. The Palestinian Islamic Jihad proclaimed her the “Bride of Haifa” to
      honor her “marriage to the soil of the homeland.”"
        className="mb-2"
      />

      <H2 className="mt-6 mb-3">Videos</H2>
      <ResponsiveVideoGrid>
        <Video embedId="jbEQhRB0LqY" />
        <Video embedId="2gp-0b3oGR4" />
        <Video embedId="EoX-hUj5fVs" />
      </ResponsiveVideoGrid>
      <H2 className="mt-6 mb-3">Images</H2>
      <div className="max-w-xl">
        <MyImage src="terrorAttack1.png" />
        <ImageDescription>
          Dizengoff Bus Bombing, 1994 (source: IDF).
        </ImageDescription>
        <MyImage src="terrorAttack2.png" />
        <ImageDescription>
          Dolphinarium Nightclub Massacre, 2001 (source: IDF).
        </ImageDescription>

        <MyImage src="terrorAttack3.png" />
        <ImageDescription>
          Megiddo Junction bus bombing, 2002 (Source: IDF)
        </ImageDescription>

        <MyImage src="terrorAttack4.png" />
        <ImageDescription>
          Passover Massacre, 2002 (source: IDF).
        </ImageDescription>
      </div>
      <H2 className="mb-3 mt-7">Articles</H2>
      <Article
        title="List of Palestinian suicide attacks"
        href="https://en.wikipedia.org/wiki/List_of_Palestinian_suicide_attacks"
        source="Wikipedia"
        className="mb-1"
      />
      <Article
        title="Ma'alot Massacre"
        href="https://en.wikipedia.org/wiki/Ma%27alot_massacre"
        source="Wikipedia"
        className="mb-1"
      />
      <Article
        title="Suicide and Other Bombing Attacks in Israel Since the Declaration of Principles (Sept 1993)"
        href="https://embassies.gov.il/MFA/FOREIGNPOLICY/Terrorism/Palestinian/Pages/Suicide%20and%20Other%20Bombing%20Attacks%20in%20Israel%20Since.aspx"
        source="Israeli Missions Around The World"
      />
      <Article
        title="Passover massacre"
        href="https://en.wikipedia.org/wiki/Passover_massacre"
        source="Wikipedia"
        className="mb-1"
      />
      <Article
        title="Palestinian Terrorism"
        href="https://www.jewishvirtuallibrary.org/palestinian-terrorism"
        source="Jewish Virtual Library"
        className="mb-1"
      />
      <Article
        title="Terrorism Against Israel"
        href="https://www.jewishvirtuallibrary.org/terrorism-against-israel"
        source="Jewish Virtual Library"
        className="mb-1"
      />
      <Article
        title="8 Terror Attacks You Should Know About"
        href="https://www.idf.il/en/mini-sites/palestinian-terrorism/8-terror-attacks-you-should-know-about/"
        source="IDF"
        className="mb-1"
      />
      <Article
        title="Dolphinarium Discotheque Massacre"
        href="https://en.wikipedia.org/wiki/Dolphinarium_discotheque_massacre"
        source="Wikipedia"
        className="mb-1"
      />
    </Template>
  );
}
