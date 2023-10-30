import React from "react";

export default function H3(props) {
  return (
    <h1
      className={`font-bold text-lg xl:text-xl mb-2 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </h1>
  );
}
