import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 id="heading">Welcome to my page 🚀</h1>;

// React components
// Class Based Component - OLD
// Functional Component - NEW

const Title = () => {
  return (
    <div className="head">
      <h1>Namaste react using JSX 🚀</h1>
    </div>
  );
};

// Component Composition
const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <h1>Namaste React Functional Component!</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
