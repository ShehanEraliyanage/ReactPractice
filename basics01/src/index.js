import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css";

import Header from "./components/header";

const App = () => (
  <>
    <Header />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
