import Image from "next/image";

// Custom components
import Navbar from "@/components/navbar/Navbar";
import Card from "@/components/card/Card";
import Topic from "@/components/topic/Topic";
import Container from "@/components/container/Container";
import Template from "@/components/Template/Template";
import TopicGrid from "@/components/topic_grid/TopicGrid";
import Hero from "@/components/hero/Hero";

/* 
 <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
*/
export default function Home() {
  return (
    <Template>
      <Hero />
      <TopicGrid />
    </Template>
  );
}
