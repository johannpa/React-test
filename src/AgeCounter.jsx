import React from "react";

export function AgeCounter(props) {
  let age = 30;

  function increaseAge() {
    age++;
    console.log(age);
  }

  return (
    <>
      <button onClick={increaseAge}>Increase age</button>
      <div>Your are {age} years old</div>
    </>
  );
}
