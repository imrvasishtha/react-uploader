import React from "react";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/uppy/dist/uppy.css";
import { render } from "react-dom";
import Menu from "./Menu";

const App = () => (
  <div>
    <h2>Uppy Uploader</h2>
    <Menu />
  </div>
);

console.clear();

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
