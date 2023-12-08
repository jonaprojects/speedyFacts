import React, { useState } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import Image from "next/image";
import SuggestionsList from "./SuggestionList";
import rankSearchResult from "./rank_categories";
import { CATEGORIES_AND_PATHS } from "@/data/categories";
import { useRouter } from "next/router";
import P from "../typography/P";
import SecondaryButtonAlt from "../buttons/SecondaryButtonAlt";
import Modal from "../modal/Modal";
import H1 from "../typography/H1";

export default function SearchBar(props) {
  const router = useRouter();
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState(null);
  const [showNoResults, setShowNoResults] = useState(false);

  const [noResultsModalOpen, setNoResultsModalOpen] = useState(false);
  var top_categories = null;

  const handleKeyDown = (event) => {
    if (isFocused && event.key === "Enter") {
      onSearchHandler();
    } else if (event.key === "ArrowUp") {
      //TODO: implement scrolling results functionality
    } else if (event.key === "ArrowDown") {
      //TODO: implement scrolling results functionality
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
      if (props.notFound && props.notFound === "modal") {
        setNoResultsModalOpen(true);
      }
    }
  };

  const goHome = () => {
    setNoResultsModalOpen(false);
    setShowNoResults(false);
    router.push("/");
  };

  const fontSizeClass = props?.fontSize ?? "text-sm sm:text-base";
  const paddingClass = props?.padding ?? "p-3";
  const buttonType = props?.buttonType ?? "primary";
  const notFound = props?.notFound ?? "text";
  var searchButton = (
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
  );
  if (buttonType == "secondary") {
    searchButton = (
      <SecondaryButtonAlt onClick={onSearchHandler}>
        <Image
          src="/search.svg"
          alt=""
          className=""
          width={30}
          height={30}
          priority
        />
      </SecondaryButtonAlt>
    );
  }
  return (
    <>
      <div className={` ${props?.className}`}>
        <div className="flex justify-center relative">
          <input
            type="text"
            placeholder="Search for a category"
            className={`text-slate-500 ${paddingClass} ${fontSizeClass}  w-full box-border`}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onKeyDown={handleKeyDown}
            onChange={handleOnChange}
          />
          {searchButton}
        </div>
        {suggestions && (
          <SuggestionsList
            isOpen={showSuggestions}
            suggestions={suggestions}
            className={props?.suggestions}
            fontSize={props?.suggestionFontSize}
          />
        )}
      </div>

      {showNoResults && notFound === "text" && (
        <P className="mt-2">Sorry, could not find a result!</P>
      )}
      {showNoResults && notFound === "modal" && (
        <Modal
          isOpen={noResultsModalOpen}
          primaryText="Close"
          secondaryText="Home"
          primaryAction={() => setNoResultsModalOpen(false)}
          secondaryAction={goHome}
          closeModal={() => setNoResultsModalOpen(false)}
        >
          <H1>No Results!</H1>
          <P>Oops! We weren&apos;t able to find the desired result!</P>
        </Modal>
      )}
    </>
  );
}
