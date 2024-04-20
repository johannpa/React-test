import React, { useState } from "react";
import style from "./style.module.css";

export function MenuListItem({ onClick, difficulty, isSelected }) {
  const [isHovered, setIsHovered] = useState(false);

  function getBackgroundColor() {
    if (isHovered) {
      return "#a5e9ff";
    } else if (isSelected) {
      return "#26baea";
    } else {
      return "#eff0ef";
    }
  }
  return (
    <div
      onClick={() => onClick(difficulty)}
      style={{ backgroundColor: getBackgroundColor() }}
      className={style.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Set to : {difficulty}
    </div>
  );
}
