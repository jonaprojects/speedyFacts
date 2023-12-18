import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import SubHeader from "@/components/typography/SubHeader";
import H2 from "@/components/typography/H2";
import A from "@/components/typography/A";
import { Tweet } from "react-twitter-widgets";
import ArticleLink from "@/components/typography/ArticleLink";
import Video from "@/components/video/Video";
import ResponsiveVideoGrid from "@/components/responsive_grids/ResponsiveVideoGrid";
import Article from "@/components/article/Article";
import MyImage from "@/components/image/MyImage";

export default function InternationalLaw(props) {
  return (
    <Template>
      <H1 className="mt-6">International Law</H1>
      <SubHeader className="mb-5">
        Pro-Palestinians often make the claim that Israel violates international
        law. These claims are often either absolutely false, or debatable.
        Let&apos;s find out what International Law actually says.
      </SubHeader>
      <Fact
        content="Under international humanitarian law, intentionally directing attacks
      against hospitals and places where the sick and wounded are collected is
      prohibited, but only provided they are not military objectives (according to
      Article 19 in the Geneva Conventions)."
        className="mb-2"
      />
      <Fact
        content="Article 51 of the UN charter, which governs the use of force, gives states
      the right of self-defense, provided the force they use is necessary and
      proportionate. Proportionality is not about inflicting symmetrical harm.
      It means the defending state cannot use more force than is needed to
      respond to a threat. Legal experts argue that Israel has considerable
      scope to respond to Hamas’ October 7 attack and that its stated aim to
      “destroy” Hamas can be justified under international law."
        className="mb-2"
      />
      <H2 className="mt-6 mb-3">Images</H2>
      <div className="max-w-xl">
        <MyImage src="/article19.png" />
      </div>
      <H2 className="mt-6 mb-3">Articles</H2>
      <Article
        title="Article 51, Charter of the United Nations"
        href="https://legal.un.org/repertory/art51.shtml"
        source="The United Nations"
        className="mb-2"
      />
      <Article
        title="Article 19 - Wounded and sick IV. Discontinuance of protection of hospitals"
        href="https://ihl-databases.icrc.org/en/ihl-treaties/gciv-1949/article-19"
        source="The United Nations"
        className="mb-2"
      />
    </Template>
  );
}
