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
        isSunny={null}
      >
        <img
          src="https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
          alt="meditation"
        />
      </Greatings>
    </>
  );
}
