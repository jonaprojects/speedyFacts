import React from "react";

export default function SecondaryButtonAlt(props) {
  return (
    <button
      className={`bg-slate-500 text-white p-2 rounded-sm hover:bg-slate-600`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
