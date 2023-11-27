import React from "react";

export default function ResponsiveGrid(props) {
  return (
    <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-1">
      {props.children}
    </div>
  );
}
