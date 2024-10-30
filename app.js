/*
 *
 *   <div id="parent">
 *       <div id="child1">
 *           <h1>I am h1 tag</h1>
 *           <h2>I am h1 tag</h2>
 *       </div>
 *       <div id="child2">
 *           <h1>I am h1 tag</h1>
 *           <h2>I am h1 tag</h2>
 *       </div>
 *   </div>
 *
 *
 */

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am a H1 tag"),
    React.createElement("h2", {}, "I am a H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am a H1 tag"),
    React.createElement("h2", {}, "I am a H2 tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { className: "abc", id: "heading" },
  "Hello world from react!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
