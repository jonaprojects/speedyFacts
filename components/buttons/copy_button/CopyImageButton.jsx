import React from "react";
import CopyButton from "./CopyButton";

export default function CopyImageButton(props) {
  return (
    <CopyButton
      onClick={() => copyImage(props.imagePath)}
      className={props.className}
    />
  );
}

export const copyImage = (imagePath) => {
  fetch(imagePath)
    .then((response) => response.blob())
    .then((blob) => {
      // Now you have the image data as a blob object

      navigator.clipboard.write([
        new ClipboardItem({
          "image/png": blob,
        }),
      ]);
    })
    .catch((error) => console.error("Error fetching image:", error));
};
