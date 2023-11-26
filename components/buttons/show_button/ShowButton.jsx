import React, { useState } from "react";
import Image from "next/image";

export default function ShowButton(props) {
  const iconPath = props.show ? "/eye.svg" : "/closedEye.svg";
  return (
    <button onClick={props.onClick} className={props.className ?? ""}>
      <Image
        src={iconPath}
        alt=""
        className={`cursor-pointer p-1 box-content rounded-full hover:bg-slate-200`}
        width={24}
        height={24}
        priority
      />
    </button>
  );
}
