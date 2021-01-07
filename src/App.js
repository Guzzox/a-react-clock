import React from "react";
import "./style.css";

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

export default function App() {
  return (
    <h1>
      {addZero(new Date().getHours())}:
      {addZero(new Date().getMinutes().toFixed())}:
      {addZero(new Date().getSeconds())}
    </h1>
  );
}
