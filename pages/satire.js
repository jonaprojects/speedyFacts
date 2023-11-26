import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import SubHeader from "@/components/typography/SubHeader";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import { Tweet } from "react-twitter-widgets";
import H2 from "@/components/typography/H2";
import Video from "@/components/video/Video";

export default function Satire(props) {
  return (
    <Template>
      <H1 className="mt-6">Satire</H1>
      <SubHeader className="mb-5">
        Satiric comments and skits following Hamas&apos; attack and the rise of
        Antisemitism in the world.
      </SubHeader>
      <H2 className="mt-6 mb-3">Videos</H2>
      <Video embedId="yVcwKsd_kiQ" className="mb-2" />
      <Video embedId="gHTNuBKtzHc" className="mb-2" />
      <Video embedId="rbfccVBo9tE" className="mb-2" />
      <Video embedId="VYUL1R4pupU" className="mb-2" />
      <H2 className="mb-3 mt-6">Tweets</H2>
    </Template>
  );
}
