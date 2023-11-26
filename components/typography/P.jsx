import React from "react";

export default function P(props) {
  return (
    <p
      className={`text-slate-500 md:text-base lg:text-lg text-sm  ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </p>
  );
}
