import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import ImagesList from "./ImagesList";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={ImagesList} />
      </div>
    );
  }
}
