import React from "react";
import H1 from "../typography/H1";
import SearchBar from "../search/SearchBar";
import SearchSuggestionsList from "../search/SuggestionList";

export default function Hero() {
  return (
    <section
      className="flex justify-center py-6 px-3 text-center
       xl:pt-7 xl:pb-12 "
    >
      <div>
        <H1 className="font-extrabold">What Fact Are You Looking For?</H1>
        <p className="text-slate-500 md:text-xl">
          Choose a topic and get argument-winning facts and evidence! We&apos;re
          here to provide you with reliable and accurate information.
        </p>
        <div className="w-full flex justify-center">
          <div className="w-full md:w-10/12 lg:w-9/12 relative">
            <SearchBar className="mt-4 w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
