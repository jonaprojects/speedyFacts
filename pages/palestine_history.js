import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import H2 from "@/components/typography/H2";
import A from "@/components/typography/A";
import Video from "@/components/video/Video";
import ResponsiveVideoGrid from "@/components/responsive_grids/ResponsiveVideoGrid";
import { Tweet } from "react-twitter-widgets";
import Article from "@/components/article/Article";
import MyImage from "@/components/image/MyImage";

export default function PalestineHistory(props) {
  return (
    <Template>
      <H1 className="mt-6">Palestine History</H1>
      <P className="mb-5">
        The palestinian narrative is that they are the natives and their country
        was occupied by the Jewish European colonizers. This narrative falls
        apart quickly when challenged with real facts and history.
      </P>
      <Fact
        className="mb-2"
        content={`
      The English term "Palestine" itself derives from the Latin Palaestīna, which, in turn, derives from the Koine Greek Παλαιστῑ́νη, Palaistī́nē, used by the world's first known historian,
      Herodotus, in the 5th century BCE.
      In the 2nd century CE, the Romans crushed the revolt of Shimon Bar Kokhba (132 CE), during which Jerusalem and Judea were conquered, and the area of Judea was renamed Palaestina in an attempt to minimize
      Jewish identification with the land of Israel.
      `}
      />
      <Fact
        className="mb-2"
        content={`Abdul Rahman Hassan Azzam, the Secretary-General of the Arab League from
      1945 to 1952, declared in 1947 that were a war to take place
      with the proposed establishment of a Jewish state, it would lead to "a war
      of extermination and momentous massacre which will be spoken of like the
      Mongolian massacre and the Crusades."`}
      />
      <Fact
        className="mb-2"
        content={`During the 2,600 years those who lived in what the Roman Emperor Hadrian renamed Palestine were known as Palestinians, including Christians, Jews, Muslims, and people of any ethnic or religious affiliation. Accordingly, Palestinian did
         not describe any one ethnic or religious group. 
         Its definition applied to anyone living in the territory.
         In fact, leading up to Israel's independence in 1948, it was common for the international press to label Jews, not Arabs, living in the mandate as Palestinians.
      `}
      />
      <Fact
        className="mb-2"
        content={`
      Following the 1948 War, the Arab powers had no interest in creating a 
      Palestinian entity. Instead, the Syrians, Egyptians, and Jordanians seized control of the areas 
      they occupied. In 1950, what was then called Transjordan annexed areas in East Jerusalem and parts of Judea and Samaria it captured during the war,
      parts of which had been allocated for an Arab state.
      By 1959, the UN, without discussion, essentially endorsed the annexation and began referring to the areas as “Jordan.” 
      It was only after Israel reunited Jerusalem and captured Judea and Samaria
      in 1967 that the UN settled on the term “West Bank.”
      `}
      />
      <Fact
        className="mb-2"
        content={`
           According to a 2010 study by Behar et al. titled "The genome-wide
      structure of the Jewish people", Palestinians tested clustered genetically
      close to Bedouins, Jordanians and Saudi Arabians which was described as
      "consistent with a common origin in the Arabian Peninsula"
      `}
      />
      <Fact
        className="mb-2"
        content={`
          One DNA study by Nebel found substantial genetic overlap among
      Israeli/Palestinian Arabs and Jews.Nebel proposed that "part, or
      perhaps the majority" of Muslim Palestinians descend from "local
      inhabitants, mainly Christians and Jews, who had converted after the
      Islamic conquest in the seventh century AD".
      `}
      />

      <Fact
        content="Time magazine reported in a May 3, 1948 article that, “the mass
      evacuation, prompted partly by fear, partly by order of Arab leaders, left
      the Arab quarter of Haifa a ghost city... By withdrawing Arab workers
      their leaders hoped to paralyze Haifa.”"
        className="mb-2"
      />
      <Fact
        content="In the cities of Haifa and Tiberias, local Arab leaders chose to
      clear the town of its Arab inhabitants and did so with the assistance of
      the British. In Jaffa, following the withdrawal of Jewish militiamen from
      the city, local Arab leaders organized the evacuation of roughly 20,000
      residents that did not flee during or before the fighting. Similar
      scenarios occurred in dozens of Arab villages during the course of the
      war."
        className="mb-2"
      />
      <Fact
        content="Arab leaders thus encouraged Arabs living in Israel to get out of the way
      of the advancing Arab armies and promised them that they would be able to
      return after quickly winning the war. For instance, then-Iraqi prime
      minister Nuri Said was quoted saying, “We will smash the country with our
      guns and obliterate every place the Jews seek shelter in. The Arabs should
      conduct their wives and children to safe areas until the fighting has died
      down.”"
        className="mb-2"
      />
      <Fact
        content="Many Palestinian refugees admitted the Arab leaders told them to leave,
      such as Fuad Khader, a Palestinian refugee, who explained in an interview
      broadcast on official PA television on May 15, 2013, that, “the one who
      made us leave was the Jordanian army because there were going to be
      battles and we would be under their feet. They told us, ‘Leave. In two
      hours, we will liberate it and then you’ll return.’”"
        className="mb-2"
      />
      <H2 className="mt-6 mb-3">Videos</H2>
      <ResponsiveVideoGrid>
        <Video embedId="O7ByJb7QQ9U" />
        <Video embedId="pefEIwoTEnE" />
      </ResponsiveVideoGrid>
      <H2 className="mt-6 mb-3">Images</H2>
      <div className="max-w-xl">
        <MyImage
          src="/muftiHitler.png"
          alt="The Mufti Of Jerusalem meets Hitler"
          className=""
        />
        <small className="text-slate-500 block">
          Illustrative: Hitler hosts Grand Mufti of Jerusalem Haj Amin
          al-Husseini in 1941 in Germany. (Heinrich Hoffmann Collection)
        </small>
        <MyImage src="/ancientMap1.png" className="mt-6" />
        <small className="text-slate-500 block">
          An ancient map of the old kingdoms of Judea and Israel
        </small>
        <MyImage src="/palestinianMap.png" className="mt-6" />
      </div>
      <ResponsiveVideoGrid>
        <Video embedId="awLQNraky7A" />
        <Video embedId="P8bkqqvoGpc" />
      </ResponsiveVideoGrid>
      <H2 className="mt-6 mb-3">Tweets</H2>
      <Tweet tweetId="1726501630357520738" />
      <Tweet tweetId="1732015747063255380" />
      <Tweet tweetId="1732865627574894928" />
      <H2 className="mt-6 mb-3">Articles</H2>
      <Article
        title="Palestine"
        href="https://www.history.com/topics/middle-east/palestine"
        source="The History Channel"
      />
      <Article
        title="Azzan Pasha Quotation"
        href="https://en.wikipedia.org/wiki/Azzam_Pasha_quotation"
        source="Wikipedia"
      />
      <Article
        title="Actions and false promises are creating Palestinian refugees - opinion"
        href="https://www.jpost.com/opinion/article-743153"
        source="The Jerusalem Post"
        className="mb-1"
      />
      <Article
        title="Interactive Story Of The History Of The Land Of Israel"
        href="https://byebyecolonizer.com/"
        source="ByeByeColonizer.com"
        className="mb-1"
      />
      <Article
        title="Origins Of Palestine"
        href="https://www.jewishvirtuallibrary.org/origin-of-quot-palestine-quot"
        source="Jewish Virtual Library"
        className="mb-2"
      />
      <Article
        title="Archaeology in Israel: Ancient Jewish Coins"
        href="https://www.jewishvirtuallibrary.org/ancient-jewish-coins"
        source="Jewish Virtual Library"
        className="mb-2"
      />
      <Article
        title="Myths & Facts - The Refugees"
        href="https://www.jewishvirtuallibrary.org/myths-and-facts-the-refugees"
        source="Jewish Virtual Library"
        className="mb-1"
      />
      <Article
        title="History of the Jews and Judaism in the Land of Israel"
        href="https://en.wikipedia.org/wiki/History_of_the_Jews_and_Judaism_in_the_Land_of_Israel"
        source="Wikipedia"
        className="mb-1"
      />
      <Article
        title="Maccabean Revolt"
        href="https://en.wikipedia.org/wiki/Maccabean_Revolt"
        source="Wikipedia"
        className="mb-1"
      />
    </Template>
  );
}
