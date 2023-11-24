import React from "react";
import H1 from "@/components/typography/H1";
import P from "@/components/typography/P";
import SubHeader from "@/components/typography/SubHeader";
import Template from "@/components/Template/Template";
import Fact from "@/components/fact/Fact";
import EmbedYoutube from "@/components/embed_youtube/EmbedYoutube";
import { Tweet } from "react-twitter-widgets";
import H2 from "@/components/typography/H2";
import Video from "@/components/video/Video";

export default function JewsInMuslimCountries(props) {
  return (
    <Template>
      <H1 className="mt-6">Jews In Muslim Countries</H1>
      <SubHeader className="mb-5">
        Jews were considered second class citizens in Muslim countries and were
        often persecuted. Especially in the 20th century, Jews were massacred
        and systematically ethnically cleansed from Muslim countries. Many of
        them found shelter in the newly established state of Israel.
      </SubHeader>
      <Fact
        className="mb-2"
        content=" It is estimated that around 1 Million Jews used to live in Muslim
      countries prior to the establishment of the state of Israel. However, they
      were often persecuted and attacked in Pogroms, such as the Shiraz Pogrom
      (Iran, 1910), Farhud (Iraq, 1941), and the 1948 Cairo Bombings. Many Jews
      were forced to convert to Islam or hide their Jewish identity, and
      eventually, many of them fled to Israel. As a result, nowadays there are 0
      Jews in almost all Muslim countries."
      />
      <Fact
        className="mb-2"
        content="By World War 1 the Jews accounted for one-third of Iraq’s population, and
      it estimated that 120,000 Jews lived in Iraq by 1936. In addition to the
      Pogroms, the Iraqi government actively engaged in ethnic cleansing of
      Jews. In 1950, Iraqi Jews were permitted to leave the country within a
      year provided they forfeited their citizenship. A year later, however, the
      property of Jews who emigrated was frozen and economic restrictions were
      placed on Jews who chose to remain in the country."
      />
      <Fact
        className="mb-2"
        content="The Allahdad (Persian: الله داد, transl. 'God's Justice') was an 1839
      pogrom perpetrated by Muslims against the Mashhadi Jewish community in the
      city of Mashhad, Qajar Iran. It was characterized by the mass-killing and
      forced conversion of the Jews in the area to Islam."
      />
      <Fact
        className="mb-2"
        content="The 1934 Thrace pogroms refers to a series of violent attacks against
      Jewish citizens of Turkey in June and July 1934 in the Thrace region of
      Turkey. Over 15,000 Jewish citizens of Turkey had to flee from the region, according to Guttstadt, Corry (2013)"
      />
      <Fact
        className="mb-2"
        content="The 1066 Granada massacre took place on 30 December 1066 (9 Tevet 4827; 10
      Safar 459 AH) when a Muslim mob stormed the royal palace in Granada, in
      the Taifa of Granada, killed and crucified the Jewish vizier Joseph ibn
      Naghrela, and massacred much of the Jewish population of the city."
      />

      <Fact
        className="mb-2"
        content="The Muslim attitude toward Jews is reflected in various verses throughout
      the Koran, the holy book of the Islamic faith. They [the Children of
      Israel] were consigned to humiliation and wretchedness. 'They brought the
      wrath of God upon themselves, and this because they used to deny God's
      signs and kill His Prophets unjustly and because they disobeyed and were
      transgressors' (Sura 2:61). According to the Koran, the Jews try to
      introduce corruption (5:64), have always been disobedient (5:78), and are
      enemies of Allah, the Prophet and the angels (2:97­98)."
      />
      <H2 className="mt-6 mb-3">Videos</H2>
      <Video embedId="WoM6fi9AvNY" />
      <H2 className="mb-3 mt-6">Tweets</H2>
    </Template>
  );
}
// <EmbedYoutube embedId="O7ByJb7QQ9U" className="mb-3" />
