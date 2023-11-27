import React from "react";
import ShowButton from "../buttons/show_button/ShowButton";
import CopyTextButton from "../buttons/copy_button/CopyTextButton";
import CopyImageButton from "../buttons/copy_button/CopyImageButton";
export default function SensitiveMediaWrapper(props) {
  return (
    <div className={`bg-white inline-block border ${props.className ?? ""}`}>
      <div>{props.children}</div>
      <div className="flex gap-1 py-1">
        <CopyImageButton imagePath={props.src} />

        <ShowButton show={props.show} onClick={props.toggleShow} />
      </div>
    </div>
  );
}
