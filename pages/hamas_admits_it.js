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
