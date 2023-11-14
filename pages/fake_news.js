import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import SubHeader from "@/components/typography/SubHeader";
import H2 from "@/components/typography/H2";
import A from "@/components/typography/A";
import ArticleLink from "@/components/typography/ArticleLink";

export default function FakeNews(props) {
  return (
    <Template>
      <H1 className="mt-6">Fake News</H1>
      <SubHeader className="mb-5">
        Following Hamas&rsquo;s attack, a powerful misinformation campaign has
        been targeted to sway the public opinion in favor of the terrorist
        group. An insufficient and even opposite response by social media
        companies and media outlets has hindered the efforts to remedy the
        situation.
      </SubHeader>
      <Fact
        className="mb-2"
        content={`"According to CNBC: 
          "Thierry Breton, the European commissioner for the internal market, said in a letter addressed to Musk on Tuesday that his office has 'indications' that groups are spreading misinformation and
           'violent and terrorist' content on X, and urged the billionaire to respond within 
           a 24-hour period."`}
      />
      <Fact
        className="mb-2"
        content={`"Fake social media accounts are spreading false information about the
      Israel-Hamas conflict, with X and TikTok among the affected platforms,
      according to disinformation specialists. One in five social media accounts
      participating in online conversations about the Hamas attacks and their
      aftermath are fake, according to Cyabra, an Israeli analysis firm." -The Guardian`}
      />
      <H2 className="mt-6 mb-3">Sources</H2>
      <ul style={{ listStyle: "initial" }}>
        <li>
          <ArticleLink
            title="Europe gives Elon Musk 24 hours to respond about Israel-Hamas
      war misinformation and violence on X."
            href="https://www.cnbc.com/2023/10/10/elon-musk-warned-about-misinformation-violent-content-on-x-by-eu.html"
            source="CNBC"
          />
        </li>
        <li>
          <ArticleLink
            title="X criticised for enabling spread of Israel-Hamas
        disinformation"
            href="https://www.theguardian.com/technology/2023/oct/09/x-twitter-elon-musk-disinformation-israel-hamas"
            source="The Guardian"
          />
        </li>
        <li>
          <ArticleLink
            title="Fact Check: Fake audio added to CNN video of Israel-Hamas war coverage"
            href="https://www.reuters.com/fact-check/fake-audio-added-cnn-video-israel-hamas-war-coverage-2023-10-11/"
            source="Reuters"
          />
        </li>
      </ul>
    </Template>
  );
}
