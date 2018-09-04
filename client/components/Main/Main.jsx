import React, { Component } from "react";
import NavBar from "../NavBar/NavBar.jsx";
import About from "../About/About.jsx";
import LandingPage from "../LandingPage/LandingPage.jsx";

import "./Main.css";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="main-container">
        <NavBar />
        <About />
        {/* <LandingPage /> */}
      </div>
    );
  }
}

// {/* Nav Hamburger should go here */}
// {/* conditional page rendering */}
