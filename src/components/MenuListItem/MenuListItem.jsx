import React, { useState } from "react";
import style from "./style.module.css";

export function MenuListItem(props) {
  const [isHovered, setIsHovered] = useState(false);
  console.log("***", isHovered);
  return (
    <div
      className={style.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Set to : {props.difficulty}
    </div>
  );
}
