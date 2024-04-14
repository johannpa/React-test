import React from "react";

export function Greatings(props) {
  console.log("***", props);
  return (
    <ul>
      <li>Hello {props.firstName}</li>
      <li>you are {props.age} years old </li>
      <li>{props.children}</li>
    </ul>
  );
}
