import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import EmbedYoutube from "@/components/embed_youtube/EmbedYoutube";
import H2 from "@/components/typography/H2";
import A from "@/components/typography/A";

export default function PalestineHistory(props) {
  return (
    <Template>
      <H1 className="mt-6">Palestine History</H1>
      <P className="mb-5">
        The palestinian narrative is that they are the natives and their country
        was occupied by the Jewish European colonizers. This narrative falls
        apart quickly when challenged with real facts and history.
      </P>
      <Fact
        className="mb-2"
        content={`
      The English term "Palestine" itself derives from the Latin Palaestīna, which, in turn, derives from the Koine Greek Παλαιστῑ́νη, Palaistī́nē, used by the world's first known historian,
      Herodotus, in the 5th century BCE.
      In the 2nd century CE, the Romans crushed the revolt of Shimon Bar Kokhba (132 CE), during which Jerusalem and Judea were conquered, and the area of Judea was renamed Palaestina in an attempt to minimize
      Jewish identification with the land of Israel.
      `}
      />
      <Fact
        className="mb-2"
        content={`During the 2,600 years those who lived in what the Roman Emperor Hadrian renamed Palestine were known as Palestinians, including Christians, Jews, Muslims, and people of any ethnic or religious affiliation. Accordingly, Palestinian did
         not describe any one ethnic or religious group. 
         Its definition applied to anyone living in the territory.
         In fact, leading up to Israel's independence in 1948, it was common for the international press to label Jews, not Arabs, living in the mandate as Palestinians.
      `}
      />
      <Fact
        className="mb-2"
        content={`
      Following the 1948 War, the Arab powers had no interest in creating a 
      Palestinian entity. Instead, the Syrians, Egyptians, and Jordanians seized control of the areas 
      they occupied. In 1950, what was then called Transjordan annexed areas in East Jerusalem and parts of Judea and Samaria it captured during the war,
      parts of which had been allocated for an Arab state.
      By 1959, the UN, without discussion, essentially endorsed the annexation and began referring to the areas as “Jordan.” 
      It was only after Israel reunited Jerusalem and captured Judea and Samaria
      in 1967 that the UN settled on the term “West Bank.”
      `}
      />
      <H2 className="mt-6 mb-3">Videos</H2>
      <EmbedYoutube embedId="O7ByJb7QQ9U" className="mb-3" />
      <EmbedYoutube embedId="pefEIwoTEnE" />
      <H2 className="mt-6 mb-3">Further Reading</H2>
      <A href="https://www.jewishvirtuallibrary.org/origin-of-quot-palestine-quot">
        Origins Of Palestine - Jewish Virtual Library
      </A>
    </Template>
  );
}
