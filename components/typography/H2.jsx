import React from "react";

export default function H2(props) {
  return (
    <h1
      className={`text-3xl xl:text-4xl font-bold mb-2 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </h1>
  );
}
