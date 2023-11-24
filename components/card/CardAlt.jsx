export default function CardAlt(props) {
  return (
    <div
      className={`border border-slate-200 bg-white rounded-lg p-3 ${
        props.className ?? ""
      }`}
    >
      {props.children}
    </div>
  );
}
