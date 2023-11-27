import MediaWrapper from "../media_wrapper/MediaWrapper";

export default function MyImage(props) {
  return (
    <MediaWrapper src={props.src}>
      <img
        src={props.src}
        alt={props.alt ?? "An image"}
        className={`object-fit ${props.className ?? ""}`}
      />
    </MediaWrapper>
  );
}
