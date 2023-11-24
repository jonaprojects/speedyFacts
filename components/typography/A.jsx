import React from "react";
import Link from "next/link";
export default function A(props) {
  return (
    <Link
      className={`md:text-base text-sm text-blue-600 hover:text-blue-800 visited:text-purple-600  ${
        props.className ? props.className : ""
      }`}
      href={props.href}
    >
      {props.children}
    </Link>
  );
}
