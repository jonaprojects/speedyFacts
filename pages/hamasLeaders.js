import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import SubHeader from "@/components/typography/SubHeader";
import EmbedYoutube from "@/components/embed_youtube/EmbedYoutube";
import H2 from "@/components/typography/H2";
import A from "@/components/typography/A";
import Article from "@/components/article/Article";
import MyImage from "@/components/image/MyImage";
import Video from "@/components/video/Video";
import ResponsiveVideoGrid from "@/components/responsive_grids/ResponsiveVideoGrid";
import ResponsiveGrid from "@/components/responsive_grids/ResponsiveGrid";

export default function HamasLeaders(props) {
  return (
    <Template>
      <H1 className="mt-6">Hamas leaders</H1>
      <SubHeader className="mb-5">
        The leaders of Hamas are known for their brutality and inhumanity. They
        starve and use their people as human shields while hiding in tunnels and
        luxury hotels abroad. They have both Israeli and Gazan blood on their
        hands.
      </SubHeader>
      <Fact
        className="mb-2"
        content="Yahya Sinwar is Hamas Chief in Gaza Strip. He's known as 'The Butcher Of Khan Yunis' 
         for brutally torturing and executing many palestinians that were suspected
        to be collaborating with Israel. In the aftermath it became clear that many of his victims weren't working with Israel.
        "
      />
      <Fact
        className="mb-2"
        content="Ismail Haniyeh is a senior member of Hamas leadership. 
        During his long years as a senior Hamas official, Haniyeh, who was elected head of the organization's political bureau in 2017, 
        has accumulated an impressive fortune. He has lived in Qatar since 2019.
        His exact net worth is unknown, but today is estimated to be at least $5 million."
      />
      <Fact
        className="mb-2"
        content="More than half of the residents of Gaza live in severe poverty, but
        already in 2012, there were reports of some 600 millionaires living in
        Gaza, who made their fortunes thanks to the hundreds of underground
        tunnels along the border between the Gaza Strip and Egypt. Drugs and weapons are often smuggled in these tunnels."
      />
      <Fact
        className="mb-2"
        content={`
      While most of the residents in Gaza suffer from poverty, Hamas leader
      Khaled Mashal lives in luxury in Qatar.  His personal wealth was estimated to be in the billions of dollars a decade ago by publications in the Arab world. 
      It is currently estimated at about $5 billion.
      `}
      />
      <H2 className="mt-6 mb-3">Pictures</H2>
      <ResponsiveGrid>
        <div>
          <MyImage
            src="/HaladMashalQatar.png"
            alt="Teddy Bears for the kidnapped kids, LA."
            className="object-fit"
          />
          <p className="text-sm	mb-4 text-slate-500 inline-block">
            Khaled Mashal in a gym in Qatar
          </p>
        </div>
        <div>
          <MyImage
            src="/HaladMashalTennis.png"
            alt="Teddy Bears for the kidnapped kids, LA."
            className="object-fit"
          />
          <p className="text-sm	mb-4 text-slate-500">
            Khaled Mashal plays tennis in Qatar
          </p>
        </div>
        <div>
          <MyImage
            src="/HaniyehSonQatar.png"
            alt="Teddy Bears for the kidnapped kids, LA."
            className="object-fit  mb-2"
          />
          <p className="text-sm	mb-4 text-slate-500">
            One of Isamail Haniyeh&apos;s sons in a luxury hotel in Qatar.
          </p>
        </div>
      </ResponsiveGrid>

      <H2 className="mt-6 mb-3">Videos</H2>
      <ResponsiveVideoGrid>
        <Video embedId="Yg4VqiW0dyo" />
        <Video embedId="VAva9VM38uA" />
      </ResponsiveVideoGrid>

      <H2 className="mt-6 mb-3">Articles</H2>
      <ul>
        <li className="mb-1">
          <Article
            title="Poor Gaza, Rich Hamas"
            href="https://en.globes.co.il/en/article-poor-gaza-rich-hamas-1001461154"
            source="Globes"
          />
        </li>
        <li className="mb-1">
          <Article
            title="Hamas leaders worth staggering $11B revel in luxury — while Gaza’s people suffer"
            href="https://nypost.com/2023/11/07/news/hamas-leaders-worth-11bn-live-luxury-lives-in-qatar/"
            source="New York Post"
          />
        </li>
        <li className="mb-1">
          <Article
            title="Hamas leaders worth $11 billion revel in luxury in Qatar - while Gaza’s people suffer, prompting US lawmakers to consider stripping the emirate of its key ally status"
            href="https://www.skynews.com.au/world-news/hamas-leaders-worth-11-billion-revel-in-luxury-in-qatar-while-gazas-people-suffer-prompting-us-lawmakers-to-strip-the-emirate-of-its-key-ally-status/news-story/b657e03b51342b3659eb9f60e320169c"
            source="Sky News Australia"
          />
        </li>
        <li className="mb-1">
          <Article
            title="Hamas Leader Ismail Haniyeh: We Need The Blood Of Women, Children, And The Elderly Of Gaza – So It Awakens Our Revolutionary Spirit"
            href="https://www.memri.org/tv/hamas-leader-ismail-haniyeh-gaza-bombing-new-holocaust-need-blood-women-children-elderly-awakens-spirit-resolve"
            source="MEMRI TV"
          />
        </li>
      </ul>
    </Template>
  );
}
