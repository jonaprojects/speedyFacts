import { useState } from "react";
import Card from "../card/Card";
import Image from "next/image";
import classes from "./Fact.module.css";

export default function Fact(props) {
  const [copied, setCopied] = useState(false);

  async function resetCopiedState() {
    setCopied(false);
  }
  const copyToClipboard = () => {
    navigator.clipboard.writeText(props.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 300);
  };
  return (
    <Card padding="none" className={props.className}>
      <Image
        src="/copy.svg"
        alt=""
        className={`absolute top-1 right-1 md:top-2 md:right-2 cursor-pointer 
             p-1 box-content rounded-full hover:bg-slate-200 ${copied && classes.copied}
        }`}
        width={24}
        height={24}
        priority
        onClick={copyToClipboard}
      />
      <div className=" px-3 py-10 text-slate-500 text-sm md:text-base">
        {props.content}
      </div>
    </Card>
  );
}
