import React from "react";

export default function SecondaryButton(props) {
  return (
    <button
      className="py-2 px-4 rounded-sm border-2 border-sky-500 hover:bg-sky-500 hover:text-white"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
