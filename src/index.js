import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const message = "Hello React";
let count = 10;
let title = <h1>{count}</h1>;
root.render(<div>{title}</div>);
