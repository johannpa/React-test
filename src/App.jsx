import React from "react";
import { Car } from "./components/Car/Car";
import { Greatings } from "./components/Greatings/Greatings";
import "./global.css";
// import { AgeCounter } from "./AgeCounter";
// import { Greatings } from "./Greatings";

export function App() {
  function hello() {
    alert("Hello de <App/>");
  }
  return (
    <>
      <div>
        Je suis {"<App/>"}
        <button onClick={hello}>click</button>
        <Car />
      </div>
    </>
  );
}
