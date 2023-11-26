import React, { useState } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import Image from "next/image";
import SuggestionsList from "./SuggestionList";
import rankSearchResult from "./rank_categories";
import { CATEGORIES_AND_PATHS } from "@/data/categories";
import { useRouter } from "next/router";
import P from "../typography/P";

export default function SearchBar(props) {
  const router = useRouter();
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState(null);
  const [showNoResults, setShowNoResults] = useState(false);
  var top_categories = null;

  const handleKeyDown = (event) => {
    if (isFocused && event.key === "Enter") {
      onSearchHandler();
    }
  };

  const handleOnFocus = (event) => {
    setIsFocused(true);
  };

  const handleOnBlur = (event) => {
    setIsFocused(false);
    setTimeout(() => setShowSuggestions(false), 150);
    // The timeout is in the case of clicking on a suggestion
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
    setSuggestions(rankSearchResult(event.target.value));
    setShowSuggestions(true);
    setShowNoResults(false);
  };

  const onSearchHandler = () => {
    setShowSuggestions(false);
    if (suggestions && suggestions.length > 0) {
      let best_suggestion = suggestions[0].toLowerCase();
      let path = CATEGORIES_AND_PATHS[best_suggestion];
      router.push(path);
    } else {
      setShowNoResults(true);
    }
  };
  return (
    <>
      <div className={props?.className}>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search for a category"
            className="text-sm p-3 sm:p-3 sm:text-base w-full box-border"
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onKeyDown={handleKeyDown}
            onChange={handleOnChange}
          />
          <PrimaryButton onClick={onSearchHandler}>
            <Image
              src="/search.svg"
              alt=""
              className=""
              width={30}
              height={30}
              priority
            />
          </PrimaryButton>
        </div>
      </div>
      {suggestions && (
        <SuggestionsList isOpen={showSuggestions} suggestions={suggestions} />
      )}
      {showNoResults && <P className="mt-2">Sorry, could not find a result!</P>}
    </>
  );
}
