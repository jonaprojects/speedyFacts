import { useState } from "react";
import Card from "../card/Card";
import Image from "next/image";

export default function Fact(props) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(props.content);
    setCopied(true);
  };
  return (
    <Card padding="none" className={props.className}>
      <Image
        src="/clipboard.svg"
        alt=""
        className={`absolute top-1 right-1 md:top-2 md:right-2 cursor-pointer 
            transition duration-300 ease-in-out hover:bg-slate-200 p-1 box-content rounded-full
        }`}
        width={24}
        height={24}
        priority
        onClick={copyToClipboard}
      />
      <div className=" px-3 py-7 text-slate-500 text-sm md:text-base">
        {props.content}
      </div>
    </Card>
  );
}
