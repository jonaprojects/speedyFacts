import React from "react";
import classes from "./EmbedYoutube.module.css";
export default function EmbedYoutube(props) {
  return (
    <div
      className={`${props.adjustSize ? classes["video-container"] : ""} ${
        props.className ? props.className : ""
      }`}
    >
      <div className={classes["video-responsive"]}>
        <iframe
          className={classes["iframe-responsive"]}
          width="853"
          frameBorder="0"
          height="480"
          src={`https://www.youtube.com/embed/${props.embedId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </div>
  );
}
