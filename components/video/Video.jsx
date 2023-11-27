import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import SVGButton from "../buttons/copy_button/CopyButton";
import EmbedYoutube from "../embed_youtube/EmbedYoutube";
import Image from "next/image";
import ShareButton from "../buttons/share_button/ShareButton";
import CopyTextButton from "../buttons/copy_button/CopyTextButton";
export default function Video(props) {
  const URL = `https://youtu.be/${props.embedId}`;
  return (
    <div
      className={`bg-white border ${props.className ?? ""}`}
    >
      <EmbedYoutube embedId={props.embedId} />
      <div className="flex gap-1 py-1">
        <CopyTextButton text={URL} />
        <ShareButton text="Share this video!" url={URL} title="Video" />
      </div>
    </div>
  );
}
