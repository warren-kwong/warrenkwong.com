import React, { Component } from "react";

import "./LandingPage.css";

import codeIcon from "./assets/code.png";
import cameraIcon from "./assets/photo-camera.png";
import headphonesIcon from "./assets/headphones.png";

export default class Main extends Component {
  render() {
    return (
      <div className="landing-page">
        <div>
          <h1>WARREN KWONG</h1>
          <div className="subheader">
            <div className="icon">
              <img src={codeIcon} width="30" />
              <span>Developer</span>
            </div>
            <div className="icon">
              <img src={cameraIcon} width="30" />
              <span>Photographer</span>
            </div>
            <div className="icon">
              <img src={headphonesIcon} width="30" />
              <span>Music Enthusiast</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
