import SVGButton from "./svg_button/SVGButton";

export default function CopyButton(props) {
  const copyContent = () => {
    navigator.clipboard.writeText(props.text);
  };
  return <SVGButton iconPath="/copy.svg" onClick={copyContent} />;
}
