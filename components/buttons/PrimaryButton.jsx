import React from "react";

export default function PrimaryButton(props) {
  return <button className="bg-sky-500 text-white p-2 rounded-sm hover:bg-sky-600" onClick={props.onClick}>{props.children}</button>;
}
