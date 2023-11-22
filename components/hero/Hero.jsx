import React from "react";
import H1 from "../typography/H1";

export default function Hero() {
  return (
    <section
      className="flex justify-center py-6 px-3 text-center
       xl:pt-7 xl:pb-12 "
    >
      <div>
        <H1 className="font-extrabold">What Fact Are You Looking For?</H1>
        <p className="text-slate-500 md:text-xl">
          Choose a topic and get argument-winning facts and evidence! 
          We're here to provide you with reliable and accurate information.
        </p>
      </div>
    </section>
  );
}
