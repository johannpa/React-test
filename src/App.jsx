import React from "react";
import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import { MenuListItem } from "./components/MenuListItem/MenuListItem";

export function App() {
  return (
    <>
      <div>
        {/* <DisplayDifficulty difficulty="Low" /> */}
        <MenuListItem difficulty="Low" />
      </div>
    </>
  );
}
