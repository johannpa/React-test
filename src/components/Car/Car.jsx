import React from "react";

export function Car(props) {
  function onClick() {
    props.onCarClick(2);
  }
  return (
    <div>
      Je suis {"<Car/>"}
      <button onClick={() => props.onCarClick(2)}>click</button>
    </div>
  );
}
