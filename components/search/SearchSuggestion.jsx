import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SearchSuggestion(props) {
  const router = useRouter();
  const onClickHandler = (event) => {
    console.log("hello");
    router.push(props.href);
  };
  return (
    <li
      className="text-sm sm:text-base border-b p-1 md:p-2 hover:bg-slate-200 cursor-pointer"
      onClick={onClickHandler}
    >
      <Link href={props.href ?? "/"}>{props.text}</Link>
    </li>
  );
}
