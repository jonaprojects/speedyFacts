import React, { useState } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import Image from "next/image";
import SuggestionsList from "./SuggestionList";
export default function SearchBar(props) {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleKeyDown = (event) => {
    if (isFocused && event.key === "Enter") {
    }
  };
  
  const handleOnFocus = (event) => {
    setIsFocused(true);
    setShowSuggestions(true);
  }

  const handleOnBlur = (event) => {
    setIsFocused(false);
    setShowSuggestions(false);
  }
  const handleOnChange = (event) => {
    setText(event.value);
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
          <PrimaryButton>
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
      <SuggestionsList isOpen={showSuggestions} />
    </>
  );
}
