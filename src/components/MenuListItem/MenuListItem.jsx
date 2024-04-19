import React from "react";
import style from "./style.module.css";

export function MenuListItem(props) {
  return <div className={style.container}>Set to : {props.difficulty}</div>;
}
