import A from "./A";

export default function ArticleLink(props) {
  return (
    <A href={props.href}>
      <i>&quot;{props.title}&quot;</i>, {props.source}.
    </A>
  );
}
