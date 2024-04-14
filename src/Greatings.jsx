import React from "react";

export function Greatings(props) {
  console.log("***", props);
  return (
    <ul>
      <li>Hello {props.firstName}</li>
      <li>you are {props.age} years old </li>
      <li>{props.children}</li>
      <li>{props.isSunny && <ItsSunny />}</li>
    </ul>
  );
}

function ItsSunny() {
  return <h2>Il fait beau</h2>;
}

function ItsRainy() {
  return <h2>Il pleut</h2>;
}
