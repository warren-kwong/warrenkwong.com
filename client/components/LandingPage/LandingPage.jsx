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
              <img
                src="https://s3-us-west-1.amazonaws.com/warrenkwong.com-assets/code.png"
                width="30"
              />
              <span>Developer</span>
            </div>
            <div className="icon">
              <img
                src="https://s3-us-west-1.amazonaws.com/warrenkwong.com-assets/photo-camera.png"
                width="30"
              />
              <span>Photographer</span>
            </div>
            <div className="icon">
              <img
                src="https://s3-us-west-1.amazonaws.com/warrenkwong.com-assets/headphones.png"
                width="30"
              />
              <span>Music Enthusiast</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
