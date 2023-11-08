import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import EmbedYoutube from "@/components/embed_youtube/EmbedYoutube";
import { Tweet } from "react-twitter-widgets";
import H2 from "@/components/typography/H2";
import A from "@/components/typography/A";
import Alert from "@/components/alerts/alert/Alert";
import H3 from "@/components/typography/H3";

export default function PalestineHistory(props) {
  return (
    <Template>
      <H1 className="mt-6">October 7th</H1>
      <P className="mb-5">
        In October 7th, 2023, thousands of Hamas terrorists infiltrated Israel
        and murdered more than 1400 Israelis and kidnapped at least 240. During
        the attack they&apos;ve committed severe crimes against humanity,
        butchering everything that crosses their path. Despite overwhelming
        evidence, many prefer to deny these atrocities.
      </P>
      <H2 className="mb-3 mt-6">The Massacres</H2>
      <Fact
        className="mb-2"
        content="The Nova Festival Massacre: At 6:30 am when rockets were spotted in the sky. By 7
        AM, armed terrorists surrounded the festival grounds, launching a rapid
        mass shooting and hostage-taking scenario on the civilians. As attendees
        attempted to escape, they were met with deadly gunfire from weapons
        including AK-47 assault rifles, RPGs, and hand grenades. Some wounded
        individuals were executed at point-blank range while crouched on the
        ground. The massacre resulted in over 270 fatalities, with a greater
        number injured and many taken hostage."
      />
      <Fact
        className="mb-2"
        content="The Be'eri Massacre: Be'eri, a small community near the Gaza Strip, 
        witnessed a horrendous attack by Hamas terrorists on its kibbutz. 
        The terrorists arrived before 6AM and executed civilians on a vehicle.
        Then they dispersed onto three motorbikes into the Be'eri neighborhoods, executing residents at gunpoint and throwing Molotov cocktails at homes to set them ablaze with the occupants trapped inside. 
        The chilling aftermath of the Be'eri massacre exposed a scene of merciless brutality,
        with approximately 80% of the recovered bodies showing signs of torture. Particularly harrowing were the accounts of a ZAKA official describing two piles of ten children each,
        with their hands bound together, burnt to death. This orchestrated onslaught resulted in the ruthless murder of over 130 community members, with some kidnapped to Gaza."
      />
      <Fact
        className="mb-2"
        content="The Kfar Aza Massacre: Kfar Aza, a kibbutz near the Gaza border, was barbarically attacked by
        over 70 Hamas terrorists, who mercilessly killed and mutilated residents
        including about 40 children. The horrific scenes, which included many
        beheadings, were such that journalists worldwide described unparalleled
        levels of brutality they only thought possible in old times of pogroms."
      />
      <Fact
        className="mb-2"
        content="The Nahal Oz Massacre: Roughly 100 Hamas terrorists invaded Kibbutz Nahal Oz,
         breaking into homes, massacring the residents of the kibbutz and wiping out entire families. Several kibbutz members were abducted and taken to Gaza. During the chaos, Shlomo Ron, an 85-year-old resident, cleverly acted as if he lived alone,
         successfully misleading the attackers and thereby safeguarding his wife, children, and grandchildren who were hidden in his home."
      />
      <H2 className="mb-3 mt-6 lg:mt-8">Terrorists Confessions</H2>
      <Fact
        className="mb-2"
        content={`"...Two (terrorists) entered a house. The front door was closed. We heard voices from the inside. Two more went in. One was lying near the door ... I don't know if he was dead, there was blood near him.
        I estimate there was an entire family (...) Dressed in regular clothes, the man was in underwear. A woman came out, she was wearing a dress (...) And a boy and a girl." 
        -Yaha Majad Subri Suidan, captured Hamas terrorist.`}
      />
      <Fact
        className="mb-2"
        content={`"The orders regarding civilians was... killing the men. Capturing the women, the elderly, and the children."
        -Jihad Fauzi Mohammad Hamayda, captured Hamas terrorist.`}
      />
      <Fact
        className="mb-2"
        content={`"In Gaza, whoever brings the kidnapped or captures gets a stipend. An apartment and thousand dollars (Per each kidnapped person)"
        -Shadi Mohammad Almajdalai, captured Hamas terrorist`}
      />
      <Fact
        className="mb-2"
        content={`"As soon as I entered the village (Be'eri), I saw two people on motorcycle. They took a woman about 60 or 65 years old on the motorcycle to Gaza (...) Saliman and Karam killed that woman from the village.
        They took out a young girl, about 15 or 16. The young girl stood and they took a selfie with her. Some said to shoot her. Others said kidnap her."
        -Shadi Mohammad Almajdalai, captured Hamas terrorist`}
      />
      <H2 className="mt-6 lg:mt-8 mb-3">Videos</H2>
      <EmbedYoutube embedId="HnLq0DjErIA" className="mb-2" />
      <EmbedYoutube embedId="fqW8madte_I" className="mb-2" />
      <EmbedYoutube embedId="cnnnyejCL6c" className="mb-2" />
      <EmbedYoutube embedId="OSdQL2ze6Gc" className="mb-2" />
      <EmbedYoutube embedId="T4XiTRkg9s8" className="mb-2" />
      <EmbedYoutube embedId="QT22MMb1sW8" className="mb-2" />
      <EmbedYoutube embedId="Taab_3a3124" className="mb-2" />
      <EmbedYoutube embedId="15_1D860Frg" className="mb-2" />
      <EmbedYoutube embedId="bH74lnxHMiU" className="" />

      
      
      <H2 className="mt-6 lg:mt-8 mb-3">Graphic Content</H2>

      <P className="mb-3">
        Many deny the atrocities that Hamas has committed in October 7th. They
        claim that there is absolutely no evidence for it. However, there is a
        vast amount of footage online, mostly on Telegram.
      </P>

      <Alert
        title="Warning!"
        content="The following links lead to you to raw graphic content."
      />
      <A href="https://hamasisisis.co/"> https://hamasisisis.co/ </A>
      <br />
      <A href="https://oct7map.com/"> https://oct7map.com/ </A>

      <H2 className="mt-6 mb-3">Articles</H2>
      <H3>Hamas Didn&rsquo;t Spare Muslims</H3>
      <ul style={{ listStyle: "initial" }}>
        <li>
          <A href="https://www.timesofisrael.com/in-rahat-a-bedouin-community-mourns-its-october-7-losses-away-from-the-public-eye/">
            <i>
              &quot;In Rahat, a Bedouin community mourns its October 7 losses
              away from the public eye&quot;
            </i>
            , Times Of Israel.
          </A>
        </li>
        <li>
          <A href="https://www.nytimes.com/2023/10/13/world/middleeast/arab-israeli-hamas-attacks.html">
            <i>
              &quot;Arab Citizens of Israel Were Not Spared in the Hamas-Led
              Massacres&quot;
            </i>
            , New York Times.
          </A>
        </li>
        <li>
          <A href="https://nypost.com/2023/10/13/hamas-targeted-bedouins-during-weekend-attack-community-member-says/">
            <i>
              &quot;Bedouins once sympathetic to Palestinian cause seek
              &rsquo;vengeance&rsquo; after being targeted during Hamas&rsquo;s
              assault on Israel, member says&quot;
            </i>
            , New York Times.
          </A>
        </li>
      </ul>
    </Template>
  );
}
// <EmbedYoutube embedId="O7ByJb7QQ9U" className="mb-3" />
