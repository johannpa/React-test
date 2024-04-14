import React from "react";

export function Greatings(props) {
  console.log("***", props);

  if (props.age > 100) {
    return <p>Tu n'es pas tout jeune</p>;
  } else {
    return (
      <ul>
        <li>Hello {props.firstName}</li>
        <li>you are {props.age} years old </li>
        <li>{props.children}</li>
      </ul>
    );
  }
}
