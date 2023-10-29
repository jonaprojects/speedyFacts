import React from "react";
import Topic from "../topic/Topic";
import { useRouter } from 'next/router'

export default function TopicGrid() {
    const router = useRouter();
  return (
    <section className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      <Topic name="UN Bias" onClick={() => router.push('/un')}></Topic>
      <Topic name="October 7th"></Topic>
      <Topic name="Hamas Leaders"></Topic>
      <Topic name={`Palestine History`}></Topic>
      <Topic name="Hospital bombing"></Topic>
      <Topic name="Kidnapped"></Topic>
      <Topic name="Fake news"></Topic>
    </section>
  );
}