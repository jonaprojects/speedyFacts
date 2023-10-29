import React from "react";

export default function Card(props) {
  let paddingClass = "px-3 py-7 md:py-10 lg:py-12";
  if (props.padding === "none") {
    paddingClass = "";
  }
  return (
    <div
      className={` ${paddingClass} relative bg-white shadow-lg rounded-lg ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
}
