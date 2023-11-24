import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import SubHeader from "@/components/typography/SubHeader";
import H2 from "@/components/typography/H2";
import A from "@/components/typography/A";
import { Tweet } from "react-twitter-widgets";
import Video from "@/components/video/Video";

export default function FakeNews(props) {
  return (
    <Template>
      <H1 className="mt-6">Hamas VS Gaza</H1>
      <SubHeader className="mb-5">
        People often ignore the vast amount of crimes Hamas has committed on the
        people of Gaza. From throwing people off rooftops to torture and murder,
        and using them as human shields Hamas has done it all.
      </SubHeader>
      <H2 className="mt-6 mb-3">Videos</H2>
      <Video embedId="Kvc2T5d40ag" className="mb-2" />
      <Video embedId="nNCzb8w2LjM" className="mb-2" />
      <Video embedId="kaK4muqkRBE" className="mb-2" />
      <Video embedId="iHeb9weNAfs" className="mb-2" />
      <Video embedId="v2gg00cmdU0" className="mb-2" />
      <Video embedId="rRra0hvjAL0" className="mb-2" />
      <Video embedId="PgAq-9_4Rzs" className="mb-2" />
      <Video embedId="BkeKl2_-cBg" className="mb-2" />

      <H2 className="mt-6 mb-3">Tweets</H2>
      <Tweet tweetId="1720425819305070821" />
      <Tweet tweetId="1723784623828676945" />
      <Tweet tweetId="1725180475080163835" />
      <Tweet tweetId="1725908411210973326" />
      <Tweet tweetId="1724058426932621764" />
      <Tweet tweetId="1725037285249306726" />
      <Tweet tweetId="1724840159726686274" />
    </Template>
  );
}
