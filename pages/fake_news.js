import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import SubHeader from "@/components/typography/SubHeader";

export default function FakeNews(props) {
    return (
      <Template>
        <H1 className="mt-6">Fake News</H1>
        <SubHeader className="mb-5">
            Following Hamas&rsquo;s attack, a powerful misinformation campaign has been targeted
            to sway the public opinion in favor of the terrorist group. An insufficient and even 
            opposite response by social media companies and media outlets has hindered the
            efforts to remedy the situation. 
        </SubHeader>
        <Fact
          className="mb-2"
          content="Debunking fake reports"
        />
      </Template>
    );
  }