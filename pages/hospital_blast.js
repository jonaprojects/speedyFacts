import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import SubHeader from "@/components/typography/SubHeader";
import H2 from "@/components/typography/H2";
import Video from "@/components/video/Video";
import ResponsiveVideoGrid from "@/components/responsive_grids/ResponsiveVideoGrid";
import Article from "@/components/article/Article";
export default function HospitalBombing(props) {
  return (
    <Template>
      <H1 className="mt-6">The Hospital Blast</H1>
      <SubHeader className="mb-5">
        On October 17th 2023 an explosion occurred in the Al-Ahli Hospital in
        Gaza. Hamas immediately blamed Israel and claimed it was an airstrike
        from Israeli jets, however further analysis found it was in fact a
        failed launch from Gaza.
      </SubHeader>
      <Fact
        className="mb-2"
        content={`"Eight weapons and explosive experts who reviewed CNN's 
        footage of the scene agreed that the small crater size and widespread
        surface damage were inconsistent with an aircraft bomb, which would have 
        destroyed most things at the point of impact. Many said that the evidence 
        pointed to the possibility that a rocket was responsible for the explosion." -CNN`}
      />
      <Fact
        className="mb-2"
        content={`"UK intelligence services have concluded that the deadly blast at al-Ahli Arab hospital in Gaza was caused by a rocket fired by a Palestinian militant group rather than by an
         Israeli airstrike, Rishi Sunak has told MPs." - The Guardian`}
      />
      <H2 className="mt-6 mb-3">Recordings & Proofs</H2>
      <ResponsiveVideoGrid>
        <Video embedId="3qy_RjHL7-8" />
        <Video embedId="THV_OuzC9jM" />
      </ResponsiveVideoGrid>

      <H2 className="mt-7 mb-3">Articles</H2>
      <Article
        title="Human Rights Watch says rocket misfire likely cause of deadly Gaza hospital blast"
        href="https://www.reuters.com/world/middle-east/human-rights-watch-says-rocket-misfire-likely-cause-deadly-gaza-hospital-blast-2023-11-26/"
        source="Reuters"
      />
    </Template>
  );
}
