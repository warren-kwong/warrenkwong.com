import React, { Component } from "react";
import LandingPage from "../LandingPage/LandingPage.jsx";
import NavBar from "../NavBar/NavBar.jsx";

import "./Main.css";

export default class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <NavBar />
        <LandingPage />
      </div>
    );
  }
}

// {/* Nav Hamburger should go here */}
// {/* conditional page rendering */}
