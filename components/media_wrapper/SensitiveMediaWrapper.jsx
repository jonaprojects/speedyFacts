import React from "react";
import CopyButton from "../buttons/copy_button/CopyButton";
import ShowButton from "../buttons/show_button/ShowButton";
export default function SensitiveMediaWrapper(props) {
  return (
    <div className={`bg-white border ${props.className ?? ""}`}>
      <div>{props.children}</div>
      <div className="flex gap-1 py-1">
        <CopyButton text={`not supported yet`} />
        <ShowButton show={props.show} onClick={props.toggleShow} />
      </div>
    </div>
  );
}
