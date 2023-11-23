import React, { useState } from "react";
import SearchSuggestion from "./SearchSuggestion";

export default function SuggestionsList(props) {
  return (
    <div
      className={`bg-white break-words p-2 border absolute w-full overflow-y-scroll max-h-48 
      ${props.isOpen ? "" : "hidden"}`}
    >
      <ul>
        <SearchSuggestion text="suggestion" />
        <SearchSuggestion text="suggestion" />
        <SearchSuggestion text="suggestion" />
        <SearchSuggestion text="suggestion" />
        <SearchSuggestion text="suggestion" />

      </ul>
    </div>
  );
}
