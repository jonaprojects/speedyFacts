import React from "react";
import ShareButton from "../buttons/share_button/ShareButton";
import CopyTextButton from "../buttons/copy_button/CopyTextButton";
import CopyImageButton from "../buttons/copy_button/CopyImageButton";
export default function MediaWrapper(props) {
  return (
    <div className={`bg-white border ${props.className ?? ""}`}>
      <div>{props.children}</div>
      <div className="flex gap-1 py-1 items-center">
        {props.type === "text" ? (
          <CopyTextButton text={props.text} />
        ) : (
          <CopyImageButton imagePath={props.src} />
        )}
        <ShareButton />
      </div>
    </div>
  );
}
