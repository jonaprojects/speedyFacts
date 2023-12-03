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
import MyImage from "@/components/image/MyImage";

export default function NoApartheid(props) {
  return (
    <Template>
      <H1 className="mt-6">No Apartheid</H1>
      <SubHeader className="mb-5">
        One of the most common accusations against Israel is that it is an
        Apartheid state. While it might be trendy to say so, it is not true.
        Israel is a diverse country with many minorities that get equal rights
        and coexist together.
      </SubHeader>
      <Fact
        content="Apartheid refers to the implementation and maintenance of a system of
      legalized racial segregation in which one racial group is deprived of
      political and civil rights. Israel is not an Apartheid since everyone gets
      equal rights by law - Jews, Arabs, and many more minorities such as Druze
      and Bedouin."
        className="mb-2"
      />
      <Fact
        content="There is no segregation between Jews and Arabs in public spaces, such as public transportation, academia, schools, libraries, malls, etc. Arabs also vote in the election and they have representatives in the Knesset, the Israeli Parliament."
        className="mb-2"
      />
      <Fact
        content=" The Arab society also contributes significantly to the Israeli health
      system. A degree in medicine is considered to be the most prestigious and
      difficult to obtain in Israel, and according to a 2021 report by the
      Israeli Health Ministry, 46% of the new doctors in Israel are either Arab
      or Druze. And if that’s not enough, more than one-third of the pharmacists
      in Israel are Arab."
        className="mb-2"
      />
      <Fact
        content="Equality is rooted deep in the very document that dictates
      the essence of the Jewish country. According to Israel’s Declaration of
      Independence, each person is equal to the law and must not be
      discriminated against by race, religion, or sex."
        className="mb-2"
      />
      <H2 className="mt-6 mb-3">Videos</H2>
      <ResponsiveVideoGrid>
        <Video embedId="IxLtaPo-wfw" className="mb-2" />
        <Video embedId="yEm3OHMPp0g" className="mb-2" />
        <Video embedId="sksCvn6YZrs" className="mb-2" />
        <Video embedId="6o1-i_tn1AA" className="mb-2" />
        <Video embedId="i_MfnpuafBg" className="mb-2" />
        <Video embedId="wgD22J9mZ04" />
      </ResponsiveVideoGrid>
      <H2 className="mb-3 mt-6">Images</H2>
      <MyImage src="rahatCenter1.png" />

      <H2 className="mb-3 mt-6">Tweets</H2>
      <Tweet tweetId="1724486686971723992" />
      <Tweet tweetId="1725468560766468358" />
      <H2 className="mt-7 mb-3">Articles</H2>
    </Template>
  );
}
