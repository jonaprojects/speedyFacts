import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import SubHeader from "@/components/typography/SubHeader";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import { Tweet } from "react-twitter-widgets";
import H2 from "@/components/typography/H2";
import Video from "@/components/video/Video";
import Article from "@/components/article/Article";
import PdfViewer from "@/components/pdf_viewer/PDFViewer";
import SensitiveMedia from "@/components/sensitive_media/SensitiveMedia";

export default function Rape(props) {
  return (
    <Template>
      <H1 className="mt-6">Sexual Violence And Rape In October 7th</H1>
      <SubHeader className="mb-5">
        During the October 7th Massacre Israeli women were raped and sexually
        assaulted by Hamas Terrorists. Israeli first responders teams found
        their bodies at the scene with signs of extreme torture and sexual
        violence.
      </SubHeader>
      <H2 className="mt-7 mb-3">Images</H2>
      <SensitiveMedia
        src="/naamalevy.png"
        alt="Naama Levy violently kidnapped, blood on her crotch and all over her."
      />
      <SensitiveMedia
        src="/shaniLouk1.png"
        alt="Shani Louk dragged by terrorists"
      />
      <H2 className="mb-3 mt-6">Tweets</H2>
      <Tweet tweetId="1728729212285293047" />
      <Tweet tweetId="1723834745815978229" />
      <Tweet tweetId="1731770689340719289" />
      <Tweet tweetId="1725304302627885483" />
      <Tweet tweetId="1731434646959739077" />
      <Tweet tweetId="1729151643021615352" />
      <Tweet tweetId="1729557493527761170" />
      <Tweet tweetId="1731007578451165622" />
      <Tweet tweetId="1730780305085149304" />
      <Tweet tweetId="1730743164787405011" />
      <Tweet tweetId="1730572779592814740" />
      <Tweet tweetId="1731768493031256526" />
      <H2 className="mt-7 mb-3">Articles</H2>
      <ul>
        <li>
          <Article
            title="Israel investigates an elusive, horrific enemy: Rape as a weapon of war"
            href="https://www.washingtonpost.com/world/2023/11/25/israel-hamas-rape-sexual-violence/"
            source="The Washington Post"
          />
        </li>
        <li>
          <li>
            <Article
              title="Horrific new stories of Hamas attacks in Israel surface, including rape of ‘beautiful woman with face of angel’ who screamed to be killed"
              href="https://nypost.com/2023/12/03/news/horrific-new-stories-of-hamas-rapes-in-israel-surface-including-attack-on-woman-with-face-of-an-angel-who-screamed-to-be-killed/?utm_source=twitter&utm_campaign=nypost&utm_medium=social"
              source="The New York Post"
            />
          </li>
          <li></li>
          <Article
            title="Residents of Israel
Gender-Based Violence as a Weapon of War during the October 7 Hamas Attacks | Position Paper"
            href="https://www.phr.org.il/en/gender-based-violence-eng/"
            source="Physicians For Human Rights"
          />
        </li>
        <li>
          <Article
            title="srael Police Presents New Evidence of Sexual Assault by Hamas Terrorists on October 7"
            href="https://www.haaretz.com/israel-news/2023-11-28/ty-article/.premium/israel-police-presents-further-evidence-of-sexual-assault-by-hamas-members-on-october-7/0000018c-169e-dd03-a7ff-bebe1bdb0000"
            source="Haaretz"
          />
        </li>
        <li>
          <Article
            title="Israeli Police Collect Eyewitness Testimony of Gang Rape During Hamas Attack"
            href="https://www.haaretz.com/israel-news/2023-11-08/ty-article/israeli-police-collect-eyewitness-testimony-of-gang-rape-during-hamas-attack/0000018b-b025-d3c1-a39b-bee5ef400000"
            source="Haaretz"
          />
        </li>
        <li>
          <Article
            title="Report: Police receive witness testimony of gang rape, murder of a woman during Oct. 7 onslaught"
            href="https://www.timesofisrael.com/liveblog_entry/report-police-receive-witness-testimony-of-gang-rape-murder-of-a-woman-during-oct-7-onslaught/"
            source="Times Of Israel"
          />
        </li>
        <li>
          <Article
            title="עדות אחר עדות, מתברר ההיקף המבעית של מעשי האונס ב-7 באוקטובר"
            href="https://www.haaretz.co.il/magazine/2023-11-30/ty-article-magazine/.highlight/0000018c-1ab8-d3b6-adef-bbfc5f440000"
            source="Haaretz"
          />
        </li>
        <li>
          <Article
            title="המשטרה גבתה עדויות נוספות על פגיעות מיניות ב–7 באוקטובר"
            href=""
            source="Haaretz"
          />
        </li>
      </ul>
      <H2 className="mt-7 mb-3">Documents</H2>
      <PdfViewer pdfPath="/sexualViolenceReport.pdf" />
    </Template>
  );
}
