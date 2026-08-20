import React from "react";
import ReactDOM from "react-dom/client";

// nested tags
// <div id="parentDiv">
//     <div id="childDiv">
//         <h1> h1 from a childDiv inside a parentDiv </h1>
//         <h2> Siblings </h2> 

// TO create multiple elements or child,
// we should pass an array of children**

//     </div>
// </div>

const parentDiv = React.createElement(
    "div",
    {id:"parentDiv"},
    React.createElement(
        "div",
        {id:"childDiv"},[ 
        // array of children in parent Div
        React.createElement("h1", {key:"child1"}, "h1 from a childDiv inside a parentDiv"),
        React.createElement("h2", {key:"child2"}, "Sibling tag of h1")
        ])
    );


// single element
const newHead =  React.createElement("h1", {class: "newHead"}, "Hello World! - React");
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(newHead);
root.render(parentDiv);