import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/montserrat";
import "@fontsource/montserrat/100.css";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
