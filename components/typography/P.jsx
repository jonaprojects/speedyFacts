import React from "react";

export default function P(props) {
  return (
    <p
      className={`text-slate-500 md:text-lg ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </p>
  );
}
