import React from "react";
import { Car } from "./components/Car/Car";
import { Greatings } from "./components/Greatings/Greatings";
import "./global.css";
// import { AgeCounter } from "./AgeCounter";
// import { Greatings } from "./Greatings";

export function App() {
  return (
    <>
      <div>
        <Car />
        <Greatings />
      </div>
    </>
  );
}
