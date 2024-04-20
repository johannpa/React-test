import React from "react";
import style from "./style.module.css";
import { MenuListItem } from "../MenuListItem/MenuListItem";

export function MenuList({ difficulty, onItemClick }) {
  return (
    <div className={style.container}>
      <MenuListItem
        onClick={onItemClick}
        difficulty="Low"
        isSelected={difficulty === "Low"}
      />
      <MenuListItem
        onClick={onItemClick}
        difficulty="Medium"
        isSelected={difficulty === "Medium"}
      />
      <MenuListItem
        onClick={onItemClick}
        difficulty="High"
        isSelected={difficulty === "High"}
      />
      <MenuListItem
        onClick={onItemClick}
        difficulty="Insane"
        isSelected={difficulty === "Insane"}
      />
    </div>
  );
}
