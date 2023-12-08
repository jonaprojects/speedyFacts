import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SearchSuggestion(props) {
  const router = useRouter();
  const onClickHandler = (event) => {
    router.push(props.href);
  };
  const fontSize = props?.fontSize ?? "text-sm sm:text-base";
  return (
    <li
      className={`${fontSize} border-b p-1 md:p-2 hover:bg-slate-200 cursor-pointer`}
      onClick={onClickHandler}
    >
      <Link href={props.href ?? "/"}>{props.text}</Link>
    </li>
  );
}
