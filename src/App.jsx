import React from "react";
import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
// import { MenuListItem } from "./components/MenuListItem/MenuListItem";
import { MenuList } from "./components/MenuList/MenuList";

export function App() {
  return (
    <>
      <div>
        {/* <DisplayDifficulty difficulty="Low" /> */}
        <MenuList />
      </div>
    </>
  );
}
