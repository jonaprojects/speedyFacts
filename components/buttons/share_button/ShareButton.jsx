import React, { useState } from "react";
import Image from "next/image";
import { RWebShare } from "react-web-share";

export default function ShareButton(props) {
  return (
      <RWebShare
        data={{
          text: props.text,
          url: props.url,
          title: props.title,
        }}
        onClick={() => console.log("shared successfully!")}
      >
        <button onClick={props.onClick} className={props.className ?? ""}>
          <Image
            src={"/shareIcon.svg"}
            alt=""
            className={`cursor-pointer p-1 box-content rounded-full hover:bg-slate-200`}
            width={24}
            height={24}
            priority
          />
        </button>
      </RWebShare>
  );
}
