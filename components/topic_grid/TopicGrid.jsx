import React from "react";
import Topic from "../topic/Topic";
import { useRouter } from "next/router";

export default function TopicGrid() {
  const router = useRouter();
  return (
    <section className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      <Topic name="UN Bias" onClick={() => router.push("/un")}></Topic>
      <Topic
        name="October 7th"
        onClick={() => router.push("/october_7th")}
      ></Topic>
      <Topic
        name="Hamas Leaders"
        onClick={() => router.push("/hamasLeaders")}
      ></Topic>
      <Topic
        name={`Palestine History`}
        onClick={() => router.push("/palestine_history")}
      ></Topic>

      <Topic name="Kidnapped" onClick={() => router.push("/kidnapped")}></Topic>
      <Topic
        name="Hamas VS Gaza"
        onClick={() => router.push("/hamas_vs_gaza")}
      ></Topic>
      <Topic
        name="Muslim Victims & Heroes"
        onClick={() => router.push("/muslim_victims")}
      ></Topic>
      <Topic
        name="Hamas Education"
        onClick={() => router.push("/hamas_education")}
      ></Topic>
      <Topic
        name="Antisemitism"
        onClick={() => router.push("/antisemitism")}
      ></Topic>
      <Topic
        name="IDF Humanity"
        onClick={() => router.push("/idf_humanity")}
      ></Topic>
      <Topic
        name="No Apartheid"
        onClick={() => router.push("/no_apartheid")}
      ></Topic>
      <Topic
        name="The West Is Next"
        onClick={() => router.push("/the_west_is_next")}
      ></Topic>
      <Topic
        name="Not Innocent"
        onClick={() => router.push("/not_innocent")}
      ></Topic>
      <Topic
        name="West Bank Terrorism"
        onClick={() => router.push("/west_bank_terror")}
      ></Topic>
      <Topic
        name="Hospital Blast"
        onClick={() => router.push("/hospital_blast")}
      ></Topic>
      <Topic
        name="Animal Abuse"
        onClick={() => router.push("/palestine_animal_abuse")}
      ></Topic>
      <Topic name="Fake news" onClick={() => router.push("/fake_news")}></Topic>
      <Topic
        name="International Support"
        onClick={() => router.push("/international_support")}
      ></Topic>
      <Topic
        name="Jews In Muslim Countries"
        onClick={() => router.push("/jews_in_muslim_countries")}
      ></Topic>
      <Topic
        name="Double Standards"
        onClick={() => router.push("/double_standards")}
      ></Topic>
      <Topic
        name="Influencers"
        onClick={() => router.push("/influencers")}
      ></Topic>
      <Topic
        name="Israeli Heroes"
        onClick={() => router.push("/israeli_heroes")}
      ></Topic>
    </section>
  );
}
