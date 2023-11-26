import React from "react";
import CopyButton from "../buttons/copy_button/CopyButton";
import SVGButton from "../buttons/copy_button/CopyButton";
export default function MediaWrapper(props) {
  return (
    <div className={`bg-white border ${props.className ?? ""}`}>
      <div>{props.children}</div>
      <div className="flex gap-1 py-1">
        <CopyButton text={`not supported yet`} />
        <SVGButton iconPath="/shareIcon.svg" />
      </div>
    </div>
  );
}
