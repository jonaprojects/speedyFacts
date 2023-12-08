import React, { useState } from "react";
import SearchSuggestion from "./SearchSuggestion";
import { CATEGORIES_AND_PATHS } from "@/data/categories";
export default function SuggestionsList(props) {
  if (!props.suggestions) {
    return <></>;
  }

  return (
    <div
      className={`bg-white z-40 text-black break-words p-2 border block absolute w-full overflow-y-scroll max-h-48 
      ${props.isOpen ? "" : "hidden"} ${props.className}`}
    >
      <ul>
        {props.suggestions.map((suggestion, index) => {
          return (
            <SearchSuggestion
              text={suggestion}
              key={index}
              href={CATEGORIES_AND_PATHS[suggestion.toLowerCase()]}
              fontSize={props?.fontSize}
            />
          );
        })}
      </ul>
    </div>
  );
}
