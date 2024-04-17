import React from "react";
import style from "./style.module.css";

export function DisplayDifficulty(props) {
  return (
    <div className={style.container}>
      Difficulty set to : {props.difficulty}
    </div>
  );
}
