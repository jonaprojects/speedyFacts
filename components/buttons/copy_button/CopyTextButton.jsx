import React from "react";
import CopyButton from "./CopyButton";

export default function CopyTextButton(props) {
  return <CopyButton onClick={() => copyText(props.text)} className={props.className} />;
}

export const copyText = (text) => {
  try {
    navigator.clipboard.writeText(text);
  } catch {
    //TODO: Handle this later
  }
};
