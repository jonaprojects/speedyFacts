import Card from "../card/Card";
import A from "../typography/A";
import CopyButton from "../buttons/copy_button/CopyButton";
import CardAlt from "../card/CardAlt";
export default function Article(props) {
  return (
    <CardAlt className="relative max-w-md">
      <div>
        <A className="" href={props.href}>
          &quot;{props.title}&quot;
        </A>
        <p className="font-bold text-sm mt-3">{props.source}</p>
        <CopyButton className="absolute right-1 bottom-1" text={props.href} />
      </div>
    </CardAlt>
  );
}
