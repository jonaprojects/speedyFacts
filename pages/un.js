import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import H2 from "@/components/typography/H2";
import { Tweet } from "react-twitter-widgets";
import Image from "next/image";
import A from "@/components/typography/A";
import Video from "@/components/video/Video";
import Article from "@/components/article/Article";
import ResponsiveVideoGrid from "@/components/responsive_grids/ResponsiveVideoGrid";
import PdfViewer from "@/components/pdf_viewer/PDFViewer";
import MyImage from "@/components/image/MyImage";

export default function UN(props) {
  return (
    <Template>
      <div className="flex gap-3 md:gap-5 items-center ">
        <H1 className="mt-6">The UN</H1>
        {/*
             <div className="relative w-8 h-8 mt-4 xl:w-12 xl:h-12">
          <Image src="/share.svg" alt="" fill className="" priority />
        </div>
            */}
      </div>
      <P className="mb-5">
        The UN is known for its biased approach to Israel and the dark regimes
        who have hijacked the organization. However, Many people still
        mistakenly consider it to be reliable.
      </P>
      <Fact
        className="mb-2"
        content="In the years 2015-2022 The UN has passed 140 resolutions against Israel and only 68 resolutions on all the countries in the world
            together, including Afghanistan (The Taliban), North Korea, Syria, Russia, and China."
      />
      <Fact
        className="mb-2"
        content="Some of the worst women's rights violators are members of the 
        women's rights committee of the UN, such as Afghanistan (The Taliban), 
        Chad, Congo and Somalia. These countries have a say on the decisions regarding women's rights around the world. "
      />
      <H2 className="mt-6 mb-3">Videos</H2>
      <ResponsiveVideoGrid>
        <Video embedId="c2NaiX-hvVQ" />
        <Video embedId="35eEljsSQfc" />
        <Video embedId="9NogqQ4EPDs" />
        <Video embedId="pjOEJumoABg" />
        <Video embedId="GoFPJ-ekYfs" />
        <Video embedId="hIXCM_OKeBs" />
      </ResponsiveVideoGrid>
      <H2 className="mt-6 mb-3">Images</H2>
      <div className="max-w-xl">
        <MyImage
          src="unrwaRocket.png"
          alt="UNRWA Condemn placement of rockets in one of its schools, for the second time"
        />
      </div>

      <H2 className="mt-6 mb-3">Tweets</H2>
      <Tweet tweetId="1718012770367479870" />
      <Tweet tweetId="1726626835117805689" />
      <Tweet tweetId="1726662067351081021" />
      <Tweet tweetId="1730737053342548173" />
      <Tweet tweetId="1731710937214636178" />
      <Tweet tweetId="1542230202604027912" />
      <Tweet tweetId="1731626346260910443" />
      <H2 className="mt-6 mb-3">Documents</H2>
      <A href="https://unwatch.org/wp-content/uploads/2023/11/UNW_119___UNRWA_Report_2023_November__2023-11-05__web.pdf">
        UNRWA Officials Exposed, official report by UN-WATCH from November 2023.
      </A>
      <H2 className="mt-7 mb-3">Articles</H2>
      <Article
        title="Human Rights Watch under fire for allegedly accepting millions in Qatar funds"
        href="https://www.i24news.tv/en/news/middle-east/1700763578-human-rights-watch-under-fire-for-allegedly-accepting-millions-in-qatar-funds"
        source="i24 News"
      />
      <H2 className="mt-7 mb-3">Articles</H2>
      <Article
        title="Striking UNRWA Staff Protest Suspension of Teacher Who Incited Terrorism"
        href="https://unwatch.org/hamas-unrwa-staff-slam-suspension-of-teacher-who-promotes-terrorism/"
        source="UN Watch"
      />
      <Article
        title="Gaza headmaster was Islamic Jihad 'rocket-maker'"
        href="https://www.reuters.com/article/middleeastCrisis/idUSL05686115/"
        source="Reuters"
      />
      <Article
        title="UNRWA: Cradle of Killers"
        href="https://vimeo.com/856467890"
        source="Film by David Bedein"
      />
      <Article
        title="Released hostage says he was held by UNRWA teacher in Gaza - report"
        href="https://www.jpost.com/middle-east/article-775777"
        source="The Jerusalem Post"
      />
      <Article
        title="Report: U.N. Teachers Celebrated Hamas Massacre"
        href="https://unwatch.org/report-u-n-teachers-celebrated-hamas-massacre/"
        source="UN Watch"
      />
      <Article
        title="UNRWA CONDEMNS PLACEMENT OF ROCKETS, FOR A SECOND TIME, IN ONE OF ITS SCHOOLS"
        href="https://www.unrwa.org/newsroom/press-releases/unrwa-condemns-placement-rockets-second-time-one-its-schools"
        source="UNRWA"
      />
      <H2 className="mt-6 mb-3">Documents</H2>
      <PdfViewer pdfPath="/unrwaExposed.pdf" />
    </Template>
  );
}
