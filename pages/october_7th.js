import React, { useState, useEffect, useCallback } from "react";
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
import Modal, { ModalLink } from "@/components/modal/Modal";
import { useRouter } from "next/router";
import Video from "@/components/video/Video";
import Article from "@/components/article/Article";
export default function PalestineHistory(props) {
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
  }, []);

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
      <Video embedId="HnLq0DjErIA" className="mb-2" />
      <Video embedId="fqW8madte_I" className="mb-2" />
      <Video embedId="cnnnyejCL6c" className="mb-2" />
      <Video embedId="OSdQL2ze6Gc" className="mb-2" />
      <Video embedId="wAFDI63yvNQ" className="mb-2" />
      <Video embedId="T4XiTRkg9s8" className="mb-2" />
      <Video embedId="QT22MMb1sW8" className="mb-2" />
      <Video embedId="Taab_3a3124" className="mb-2" />
      <Video embedId="15_1D860Frg" className="mb-2" />
      <Video embedId="bH74lnxHMiU" className="mb-2" />
      <Video embedId="q74wXfhgUbw" className="mb-2" />
      <Video embedId="DWOqNnLsjN8" className="mb-2" />
      <Video embedId="yPK4DUNDlQ0" className="mb-2" />
      <Video embedId="HVlfElxoutE" className="mb-2" />
      <Video embedId="Dcm57pszXKw" className="" />
      <Video embedId="lNMtik3DRSg" className="" />
      <H2 className="mt-6 lg:mt-8 mb-3">Tweets</H2>
      <Tweet tweetId="1716477619061887235" />
      <Tweet tweetId="1723777827030315213" />
      <Tweet tweetId="1725304302627885483" />
      <Tweet tweetId="1723834745815978229" />
      <Tweet tweetId="1721273206202327307" />
      <Tweet tweetId="1726601684703387869" />
      <Tweet tweetId="1727260800522358979" />
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
      <ul>
        <li className="mb-1">
          <Article
            title="In Rahat, a Bedouin community mourns its October 7 losses
              away from the public eye"
            href="https://www.timesofisrael.com/in-rahat-a-bedouin-community-mourns-its-october-7-losses-away-from-the-public-eye/"
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
        <li className="mb-1">
          <Article
            title={`Bedouins once sympathetic to Palestinian cause seek
              "vengeance" after being targeted during Hamas's
              assault on Israel, member says"`}
            href="https://nypost.com/2023/10/13/hamas-targeted-bedouins-during-weekend-attack-community-member-says/"
            source="New York Times"
          />
        </li>
      </ul>
      <Modal
        isOpen={warningModalOpen}
        openModal={openModal}
        closeModal={closeModal}
        primaryText="I understand"
        secondaryText="Go Back"
        primaryAction={closeModal}
        secondaryAction={() => router.push("/")}
      >
        <h1 className="text-3xl md:text-5xl font-bold">Warning!</h1>
        <p className="md:text-xl text-slate-500 mt-4">
          This page contains Graphic description and imagery, including extreme
          violance and death. Viewer discresion advised.
        </p>
      </Modal>
    </Template>
  );
}
// <EmbedYoutube embedId="O7ByJb7QQ9U" className="mb-3" />
