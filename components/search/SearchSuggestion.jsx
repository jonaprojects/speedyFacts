import React, { useState } from "react";
import Link from "next/link";

export default function SearchSuggestion(props) {
  return (
    <li className="text-sm sm:text-base border-b p-1 md:p-2 hover:bg-slate-200 cursor-pointer">
      <Link href={props.href ?? "/"}
      
      >{props.text}</Link>
    </li>
  );
}
