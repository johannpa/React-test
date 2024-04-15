import React from "react";

export function Car(props) {
  const onClick = () => {
    props.onCarClick(2);
  };
  return (
    <div>
      Je suis {"<Car/>"}
      <button onClick={onClick}>click</button>
    </div>
  );
}
