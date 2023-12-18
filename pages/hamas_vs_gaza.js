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
import ResponsiveVideoGrid from "@/components/responsive_grids/ResponsiveVideoGrid";

export default function HamasVSGaza(props) {
  return (
    <Template>
      <H1 className="mt-6">Hamas VS Gaza</H1>
      <SubHeader className="mb-5">
        People often ignore the vast amount of crimes Hamas has committed on the
        people of Gaza. From throwing people off rooftops to torture and murder,
        and using them as human shields Hamas has done it all.
      </SubHeader>
      <Fact
        content="Hamas fights from residential areas and operates from schools, mosques,
      and hospitals and by that it uses them as human shields. Hamas terrorists
      hide in underground tunnels and steal humanitarian aid while their civilians
      are starving."
        className="mb-2"
      />
      <Fact
        content="Dutch reporter Jan Franke has been in Al-Shifa hospital in several times
      in 2014 and afterwards. He says he has personally seen saw Hamas fighters there.
      He asserts that everyone in Gaza, including UN staff, knows about the 'dual use' of these facilities by Hamas."
        className="mb-2"
      />
      <Fact
        content="It is estimated that Hamas has spent at least dozens or hundreds of millions of dollars 
        for its underground tunnel system for its fighters, and much more on other military sites and activities.
        However, it hasn't invested in civilian shelters or warning networks, even though it has bases in 
        proximity of residential and humanitarian areas."
      />
      <H2 className="mt-6 mb-3">Videos</H2>
      <ResponsiveVideoGrid>
        <Video embedId="Kvc2T5d40ag" className="mb-2" />
        <Video embedId="nNCzb8w2LjM" className="mb-2" />
        <Video embedId="kaK4muqkRBE" className="mb-2" />
        <Video embedId="iHeb9weNAfs" className="mb-2" />
        <Video embedId="v2gg00cmdU0" className="mb-2" />
        <Video embedId="rRra0hvjAL0" className="mb-2" />
        <Video embedId="PgAq-9_4Rzs" className="mb-2" />
        <Video embedId="D1a0GoC107k" className="mb-2" />
        <Video embedId="BkeKl2_-cBg" className="mb-2" />
        <Video embedId="cx7aRObDIzE" className="mb-2" />
        <Video embedId="lOFwqAMG4rc" className="mb-2" />
        <Video embedId="qo36HKG7mt8" className="mb-2" />
        <Video embedId="ot5Dx6qAHNw" className="mb-2" />
        <Video embedId="BYAucy7yBSI" className="mb-2" />
        <Video embedId="iRUSJx-OsRM" className="mb-2" />
        <Video embedId="vKVNAB9eOdI" className="mb-2" />
      </ResponsiveVideoGrid>
      <H2 className="mt-6 mb-3">Tweets</H2>
      <Tweet tweetId="1720425819305070821" />
      <Tweet tweetId="1723784623828676945" />
      <Tweet tweetId="1725180475080163835" />
      <Tweet tweetId="1725908411210973326" />
      <Tweet tweetId="1724058426932621764" />
      <Tweet tweetId="1732539753227051327" />
      <Tweet tweetId="1725037285249306726" />
      <Tweet tweetId="1734630492853453158" />
      <Tweet tweetId="1734324110048514500" />
      <Tweet tweetId="1724840159726686274" />
      <Tweet tweetId="1732685090050785471" />
      <Tweet tweetId="1723450736577564759" />
      <Tweet tweetId="1732023554575565120" />
      <Tweet tweetId="1734349472619217131" />
      <Tweet tweetId="1733512673910821067" />
      <Tweet tweetId="1734538374428459344" />
      <Tweet tweetId="1732458327664168988" />
      <Tweet tweetId="1732842445191229937" />
      <Tweet tweetId="1732544165748064451" />
      <Tweet tweetId="1730965932447613082" />
      <Tweet tweetId="1733102642275004583" />
      <Tweet tweetId="1732087435683660147" />
      <Tweet tweetId="1733455624975901058" />
    </Template>
  );
}
