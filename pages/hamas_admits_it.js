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

export default function HamasAdmitsIt(props) {
  return (
    <Template>
      <H1 className="mt-6">Hamas Admits it</H1>
      <SubHeader className="mb-5">
        Hamas doesn&apos;t bother to hide its genocidal intentions towards the
        Jews and its crimes against the people of Gaza.
      </SubHeader>

      <Fact
        content=" According to Hamas' charter, Article 13, there will not be any negotiated
      settlements with Israel, and Jihad  is the only solution. Qoute: 'There is no solution for the Palestinian question except through Jihad.
    Initiatives, proposals and international conferences are all a waste of time and vain endeavors'"
        className="mb-2"
      />
      <Fact
        content="Article 7 in Hamas' Charter calls for the killing of Muslims by Jews and cites the following hadith: 
        'The Day of Judgement will not come about until Moslems fight the Jews (killing the Jews), when the Jew will hide behind stones and trees. The stones and trees will say O Moslems, O Abdulla, there is a Jew behind me, come and kill him'
        "
        className="mb-2"
      />
      <H2 className="mt-6 mb-3">Videos</H2>
      <ResponsiveVideoGrid>
        <Video embedId="zSgBFPnQiho" />
        <Video embedId="Rz5VoUXEFYI" />
        <Video embedId="7FjmyqYKBEU" />
        <Video embedId="bh-M33hKqrU" />
        <Video embedId="NTbGCxwYOmM" />
        <Video embedId="Yg4VqiW0dyo" />
      </ResponsiveVideoGrid>
      <H2 className="mb-3 mt-6">Tweets</H2>
    </Template>
  );
}
