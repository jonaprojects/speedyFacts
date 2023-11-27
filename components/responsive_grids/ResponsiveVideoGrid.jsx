import React from "react";

export default function ResponsiveVideoGrid(props) {
  return (
    <div className="md:grid md:grid-cols-2 content-stretch justify-stretch">
      {props.children}
    </div>
  );
}
