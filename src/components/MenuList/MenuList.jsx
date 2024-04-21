import React from "react";
import style from "./style.module.css";
import { MenuListItem } from "../MenuListItem/MenuListItem";
import { DIFFICULTIES } from "./constant";

export function MenuList({ difficulty, onItemClick }) {
  return (
    <div className={style.container}>
      {DIFFICULTIES.map((diff) => (
        <MenuListItem
          onClick={onItemClick}
          difficulty={diff}
          isSelected={difficulty === diff}
        />
      ))}
    </div>
  );
}
