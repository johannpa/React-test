import React, { useState } from "react";

export function AgeCounter(props) {
  const [age, setAge] = useState(30);

  function increaseAge() {
    setAge(age + 1);
  }

  return (
    <>
      <button onClick={increaseAge}>Increase age</button>
      <div>Your are {age} years old</div>
    </>
  );
}
