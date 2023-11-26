import React, { useState } from "react";
import Image from "next/image";
import classes from "./SVGButton.module.css";

export default function SVGButton(props) {
  const [active, setActive] = useState(false);

  const copyContent = () => {
    navigator.clipboard.writeText(props.text);
  };

  const onClickHandler = () => {
    setActive(true);
    try {
      copyContent();
    } catch {
      //TODO: Handle this later
    }
    setTimeout(() => setActive(false), 300);
  };
  return (
    <button onClick={onClickHandler} className={props.className ?? ""}>
      <Image
        src={"/copy.svg"}
        alt=""
        className={`cursor-pointer p-1 box-content rounded-full hover:bg-slate-200 ${
          active && classes.active
        }
        }`}
        width={24}
        height={24}
        priority
      />
    </button>
  );
}
