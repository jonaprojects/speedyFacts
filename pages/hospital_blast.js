import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import SubHeader from "@/components/typography/SubHeader";

export default function HospitalBombing(props) {
  return (
    <Template>
      <H1 className="mt-6">The Hospital Blast</H1>
      <SubHeader className="mb-5">
        On October 17th 2023 an explosion occurred in the Al-Ahli Hospital in Gaza. 
        Hamas immediately blamed Israel and claimed it was an airstrike from Israeli jets, 
        however further analysis found it was in fact a failed launch from Gaza.
      </SubHeader>
      <Fact
        className="mb-2"
        content="
        Evidence and facts about the incidence
        "
      />
    </Template>
  );
}
