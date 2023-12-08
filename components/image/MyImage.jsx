import MediaWrapper from "../media_wrapper/MediaWrapper";

export default function MyImage(props) {
  return (
    <MediaWrapper src={props.src} className={`inline-block ${props.className}`}>
      <img
        src={props.src}
        alt={props.alt ?? "An image"}
        className={`object-fit max-h-[32rem]`}
      />
    </MediaWrapper>
  );
}
