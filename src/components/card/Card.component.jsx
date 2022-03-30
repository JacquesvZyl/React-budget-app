import React from "react";
import "./card.styles.scss";

function Card(props) {
  const classes = `card ${props.className}`;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
