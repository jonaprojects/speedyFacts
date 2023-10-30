import React from "react";
import Card from "@/components/card/Card";
import A from "@/components/typography/A";
import H3 from "@/components/typography/H3";
import P from "@/components/typography/P";

export default function PersonCard(props) {
  return (
    <Card>
      <div className="md:flex gap-3">
        <div class="md:basis-3/4">{props.children}</div>
        <div className="md:basis-1/4 md:relative mt-5 md:mt-0">
          <img src={props.src} alt={props.alt} className="object-fit" />
        </div>
      </div>
    </Card>
  );
}
