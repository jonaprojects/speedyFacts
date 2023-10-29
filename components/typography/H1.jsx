import React from "react";

export default function H1(props) {
  return (
    <h1
      className={`text-4xl xl:text-6xl font-bold mb-2 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </h1>
  );
}
