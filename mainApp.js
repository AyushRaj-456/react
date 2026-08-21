import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// core react
const heading = React.createElement("h1", {id:"heading1"}, "Rendered heading!");

// jsx syntax for react
const jsxHeading = <h1 id="heading2">Heading written using jsx syntax in js</h1>
root.render(jsxHeading)
