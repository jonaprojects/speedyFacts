import Card from "../card/Card";
import A from "../typography/A";
import CardAlt from "../card/CardAlt";
import CopyTextButton from "../buttons/copy_button/CopyTextButton";
export default function Article(props) {
  return (
    <CardAlt className={`relative max-w-md ${props.className}`}>
      <div>
        <A className="" href={props.href}>
          &quot;{props.title}&quot;
        </A>
        <p className="font-bold text-sm mt-3">{props.source}</p>
        <CopyTextButton
          className="absolute right-1 bottom-1"
          text={props.href}
        />
      </div>
    </CardAlt>
  );
}
