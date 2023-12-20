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
import Article from "@/components/article/Article";

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
        <Video embedId="Kvc2T5d40ag" />
        <Video embedId="nNCzb8w2LjM" />
        <Video embedId="kaK4muqkRBE" />
        <Video embedId="iHeb9weNAfs" />
        <Video embedId="v2gg00cmdU0" />
        <Video embedId="rRra0hvjAL0" />
        <Video embedId="PgAq-9_4Rzs" />
        <Video embedId="D1a0GoC107k" />
        <Video embedId="BkeKl2_-cBg" />
        <Video embedId="cx7aRObDIzE" />
        <Video embedId="lOFwqAMG4rc" />
        <Video embedId="qo36HKG7mt8" />
        <Video embedId="ot5Dx6qAHNw" />
        <Video embedId="BYAucy7yBSI" />
        <Video embedId="iRUSJx-OsRM" />
        <Video embedId="vKVNAB9eOdI" />
        <Video embedId="ZoAR2BAdH5c" />
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
      <H2 className="mt-6 mb-3">Articles</H2>
      <Article
        title="EU condemns Hamas for using 'hospitals as human shields', urges Israeli restraint"
        href="https://www.reuters.com/world/middle-east/eu-condemns-hamas-using-hospitals-human-shields-urges-israeli-restraint-2023-11-12/"
        source="Reuters"
        className="mb-1"
      />
      <Article
        title="UNRWA indicates Hamas stole supplies from its Gaza premises, then walks back claim"
        href="https://www.timesofisrael.com/un-refugee-agency-says-hamas-stole-fuel-and-medications-from-its-gaza-premises/"
        source="Times Of Israel"
        className="mb-1"
      />
      <Article
        title="Caught on camera: Hamas terrorists steal humanitarian aid, beat civilians"
        href="https://www.i24news.tv/en/news/middle-east/palestinian-territories/1702285314-caught-on-camera-hamas-terrorists-steal-humanitarian-aid-beat-civilians"
        source="i24 News"
        className="mb-1"
      />
      <Article
        title="UNRWA reports Hamas stole humanitarian aid: Hillel Neuer on i24 news"
        href="https://unwatch.org/unrwa-reports-hamas-stole-humanitarian-aid-hillel-neuer-on-i24-news/"
        source="UN Watch"
        className="mb-1"
      />
      <Article
        title="Hamas Official Mousa Abu Marzouk: The Tunnels In Gaza Were Built To Protect Hamas Fighters, Not Civilians; Protecting Gaza Civilians Is The Responsibility Of The U.N. And Israel"
        href="https://www.memri.org/tv/hamas-official-mousa-abu-marzouk-tunnels-gaza-protect-fighters-%20not-civilians"
        source="Memri TV"
        className="mb-1"
      />
    </Template>
  );
}
