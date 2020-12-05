import React from "react";
import ReactDOM from "react-dom";

const name = "Luis";
const lastName = "Nunez";
const age = 27;

ReactDOM.render(
  <div>
    <h1>Hello {name + " " + lastName}</h1>
    <p> You are {age}</p>
  </div>,
  document.getElementById("root")
);
