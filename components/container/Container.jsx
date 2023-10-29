import React from "react";

export default function Container(props) {
  return (
    <div className="flex justify-center">
      <div className="w-10/12 xl:w-9/12 xl:max-w-5xl">{props.children}</div>
    </div>
  );
}
