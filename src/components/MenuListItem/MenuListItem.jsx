import React, { useState } from "react";
import style from "./style.module.css";

export function MenuListItem(props) {
  const [isHovered, setIsHovered] = useState(false);
  console.log("***", isHovered);
  return (
    <div
      style={{ backgroundColor: isHovered ? "#a5e9ff" : "#eff0ef" }}
      className={style.container}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Set to : {props.difficulty}
    </div>
  );
}
