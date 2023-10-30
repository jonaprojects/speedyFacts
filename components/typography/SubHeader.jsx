import React from "react";

export default function SubHeader(props) {
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
