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
        doSomething={() => console.log("Hello")}
        image={<img src="https://via.placeholder.com/150" alt="placeholder" />}
      />
    </>
  );
}
