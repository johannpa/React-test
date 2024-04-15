import React from "react";

export function Car(props) {
  return (
    <div>
      Je suis {"<Car/>"}
      <button onClick={props.onCarClick}>click</button>
    </div>
  );
}
