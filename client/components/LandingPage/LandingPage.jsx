import React, { Component } from "react";

import "./LandingPage.css";

export default class Main extends Component {
  render() {
    return (
      <div className="landing-page">
        <div>
          <h1>WARREN KWONG</h1>
          <div className="subheader">
            <div className="icon">
              <img src="../../assets/code.png" width="40" />
              <span>Developer</span>
            </div>
            <div className="icon">
              <img src="../../assets/photo-camera.png" width="40" />
              <span>Photographer</span>
            </div>
            <div className="icon">
              <img src="../../assets/headphones.png" width="40" />
              <span>Music Enthusiast</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
