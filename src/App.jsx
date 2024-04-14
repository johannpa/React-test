import React from "react";
// import { AgeCounter } from "./AgeCounter";
// import { Greatings } from "./Greatings";

export function App() {
  const a = false;
  return (
    <>
      <div
        style={{
          backgroundColor: "red",
          height: a ? 100 : 200,
          width: 100,
          border: "3px solid blue",
        }}
      ></div>
      {/* <AgeCounter /> */}
    </>
  );
}
