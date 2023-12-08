import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import SubHeader from "@/components/typography/SubHeader";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import { Tweet } from "react-twitter-widgets";
import H2 from "@/components/typography/H2";
import Video from "@/components/video/Video";
import Article from "@/components/article/Article";
import SensitiveMedia from "@/components/sensitive_media/SensitiveMedia";
import ResponsiveVideoGrid from "@/components/responsive_grids/ResponsiveVideoGrid";

export default function HamasPropaganda(props) {
  return (
    <Template>
      <H1 className="mt-6">Hamas Propaganda</H1>
      <SubHeader className="mb-5">Exposing Hamas Propaganda</SubHeader>
      <Fact
        content="Hamas official Hashem Qasem claimed that the Thai workers were kidnapped
      for their own safety due to Israeli shellings. This claim was debunked with
      raw graphic footage from the attack that showed the violent murder and
      kidnap of Thai workers by Hamas. In one of the videos, A Hamas terrorist
      attempts to behead a Thai worker with a shovel. In others, Thai workers
      are choked and dragged to Gaza. According to Thailand's foreign ministry, 
      39 were killed in the Oct. 7 attacks."
        className="mb-2"
      />
      <Fact
        content="In a video spread by Hamas, a Palestinian teen named Mohammed Nazal that
      was released from Israeli prison is seen wearing casts on both his arms.
      Palestinians are alleging he had both his arms broken and smashed with
      hammers by prison officers while in prison. However, he was filmed leaving
      the prison with his arms perfectly intact and functional and appearing in
      good health."
      />
      <H2 className="mt-6 mb-3">Videos</H2>
      <ResponsiveVideoGrid>
        <Video embedId="VAva9VM38uA" />
        <Video embedId="bh-M33hKqrU" />
        <Video embedId="-73WHGrOVsY" />
      </ResponsiveVideoGrid>
      <H2 className="mt-6 mb-3">Images</H2>
      <SensitiveMedia
        src="/hamasKongSalao.png"
        alt="Hamas lied about the kidnapped"
        className="max-w-lg"
      />
      <SensitiveMedia
        src="/hamasBabies1.png"
        alt="Hamas kidnapped Babies"
        className="max-w-lg"
      />
      <H2 className="mb-3 mt-6">Tweets</H2>
      <Tweet tweetId="1712902786461913333" />
      <Tweet tweetId="1728723979450327204" />
      <Tweet tweetId="1729614130145874222" />
      <Tweet tweetId="1730023036902916519" />
      <Tweet tweetId="1729277662118457436" />
      <Tweet tweetId="1732499063499579570" />
      <Tweet tweetId="1732754038393905165" />
      <H2 className="mt-7 mb-3">Articles</H2>
      <Article
        title="Human Rights Watch says rocket misfire likely cause of deadly Gaza hospital blast"
        href="https://www.reuters.com/world/middle-east/human-rights-watch-says-rocket-misfire-likely-cause-deadly-gaza-hospital-blast-2023-11-26/"
        source="Reuters"
      />
      <Article
        title="Hamas Official Hisham Qasem Explains The Abduction Of Thai Nationals To Gaza: We Detained Them For Their Own Safety Due To Indiscriminate Israeli Shelling Of The Area"
        href="https://www.memri.org/tv/hamas-official-hisham-qasem-detained-thailand-indiscriminate-shelling-israel"
        source="MEMRI TV"
      />
      <Article
        title="Hamas drugged hostages before releasing them"
        href="https://jewishinsider.com/2023/12/hamas-hostages-klonopin-israel-gaza-release/"
        source="Jewish Insider"
      />
    </Template>
  );
}
