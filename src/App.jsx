import React from "react";
import { Greatings } from "./Greatings";

export function App() {
  return (
    <>
      <h1>Hello to the React world</h1>
      <Greatings
        firstName={"Rachel"}
        age={30}
        car={{ color: "red", vitesse: 300 }}
      />
    </>
  );
}
