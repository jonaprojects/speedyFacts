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

export default function PalestineAndLGBT(props) {
  return (
    <Template>
      <H1 className="mt-6">Palestine & LGBT</H1>
      <SubHeader className="mb-5">
        Gay people are persecuted and killed in Gaza and in the West Bank.
      </SubHeader>
      <H2 className="mt-6 mb-3">Facts</H2>
      <Fact
        content={`In August 2019, the Palestinian Authority announced that LGBT groups were
      forbidden to meet in the West Bank on the grounds that they are "harmful
      to the higher values and ideals of Palestinian society". This was in
      response to a planned conference in Nablus by Al-Qaws, a Palestinian LGBT
      group.`}
        className="mb-2"
      />
      <Fact
        content={`In 2022, Ahmad Abu Murkhiyeh,A gay Palestinian man living under asylum in
      Israel was murdered and beheaded Wednesday in the West Bank city of
      Hebron. The unnamed suspect, who was arrested by Palestinian Authority
      police near the scene of the crime soon after committing it, recorded the
      act in a video that he uploaded to social media before his capture.`}
        className="mb-2"
      />

      <H2 className="mt-6 mb-3">Videos</H2>
      <ResponsiveVideoGrid>
        <Video embedId="wxNX0wSA87w" />
        <Video embedId="8u52vzoFpP0" />
      </ResponsiveVideoGrid>
      <H2 className="mb-3 mt-6">Articles</H2>
      <Article
        title="Exclusive: Gay man who fled Gaza speaks about Hamas repression"
        href="https://www.i24news.tv/en/news/middle-east/palestinian-territories/1660138495-exclusive-gay-man-who-fled-gaza-speaks-about-experience-with-hamas"
        source="i24 News"
      />
      <Article
        title="Gay Palestinian living under asylum in Israel murdered, beheaded in Hebron"
        href="https://www.timesofisrael.com/gay-palestinian-living-under-asylum-in-israel-murdered-beheaded-in-hebron/"
        source="Times Of Israel"
      />
      <Article
        title="Gay Palestinian living in Israel under asylum beheaded in West Bank"
        href="https://www.i24news.tv/en/news/middle-east/palestinian-territories/1665158540-gay-palestinian-asylum-seeker-beheaded-in-west-bank"
        source="i24 News"
      />
      <Article
        title="Israel: LGBT Palestinians granted asylum to be given work permits"
        href="https://www.i24news.tv/en/news/israel/society/1655746158-israel-lgbt-palestinians-granted-asylum-to-be-given-work-permits"
        source="i24 News"
      />
      <Article
        title="Nowhere to Run: Gay Palestinian Asylum-Seekers in Israel"
        href="https://genderandsecurity.org/projects-resources/research/nowhere-run-gay-palestinian-asylum-seekers-israel"
        source="Consortium On Gender, Security & Human Rights"
      />
    </Template>
  );
}
