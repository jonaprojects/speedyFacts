import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import H2 from "@/components/typography/H2";
import EmbedYoutube from "@/components/embed_youtube/EmbedYoutube";
import { Tweet } from "react-twitter-widgets";
import Image from "next/image";
import { Document, Page, pdfjs } from "react-pdf";
import A from "@/components/typography/A";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
      <EmbedYoutube embedId="c2NaiX-hvVQ" className="mb-3" />
      <EmbedYoutube embedId="35eEljsSQfc" className="mb-3" />
      <EmbedYoutube embedId="9NogqQ4EPDs" className="mb-3" />
      <EmbedYoutube embedId="GoFPJ-ekYfs" className="mb-3" />
      <EmbedYoutube embedId="hIXCM_OKeBs" className="mb-3" />
      <H2 className="mt-6 mb-3">Tweets</H2>
      <Tweet tweetId="1718012770367479870" />
      <Tweet tweetId="1726626835117805689" />
      <H2 className="mt-6 mb-3">Documents</H2>
      <A href="https://unwatch.org/wp-content/uploads/2023/11/UNW_119___UNRWA_Report_2023_November__2023-11-05__web.pdf">
        UNRWA Officials Exposed, official report by UN-WATCH from November 2023.
      </A>
    </Template>
  );
}
