import CopyButton from "../buttons/CopyButton";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import SVGButton from "../buttons/svg_button/SVGButton";
import EmbedYoutube from "../embed_youtube/EmbedYoutube";
import Image from "next/image";
import classes from "./Video.module.css";

export default function Video(props) {
  return (
    <div
      className={`bg-white border ${props.className ?? ""} ${classes.video}`}
    >
      <EmbedYoutube embedId={props.embedId} />
      <div className="flex gap-1 py-1">
        <CopyButton text={`https://youtu.be/${props.embedId}`} />
        <SVGButton iconPath="/shareIcon.svg" />
      </div>
    </div>
  );
}
