import React, { Component } from "react";
import LandingPage from "../LandingPage/LandingPage.jsx";

import "./Main.css";

export default class Main extends Component {
  render() {
    return (
      <div>
        {/* Nav Hamburger should go here */}
        {/* conditional page rendering */}
        <LandingPage />
      </div>
    );
  }
}
