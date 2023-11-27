import React, { useState } from "react";
import Image from "next/image";
import classes from "./SVGButton.module.css";

export default function CopyButton(props) {
  const [active, setActive] = useState(false);

  const onClickHandler = () => {
    setActive(true);
    props.onClick();
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
