import React, { Component } from "react";

import "./LandingPage.css";

export default class Main extends Component {
  constructor() {
    super();
    this.onHoverHandler = this.onHoverHandler.bind(this);
    this.state = {
      icons: ["developer", "photographer", "music enthusiast"],
      hoverDeveloper: false,
      hoverPhotographer: false,
      hoverMusic: false
    };
  }

  onHoverHandler(text) {
    this.setState({ [text]: !this.state[text] });
  }

  render() {
    return (
      <div className="landing-page">
        <div>
          <div>
            <div className="header">
              <span className="header-left-letter">W</span>
              <span className="divider">|</span>
              <span className="header-right-letter">K</span>
            </div>
          </div>
          <div className="subheader">
            <div
              onMouseEnter={() => this.onHoverHandler("hoverDeveloper")}
              onMouseLeave={() => this.onHoverHandler("hoverDeveloper")}
            >
              {this.state.hoverDeveloper && (
                <div className="icon icon-hover">
                  <img
                    src="https://s3-us-west-1.amazonaws.com/warrenkwong.com-assets/code-orange.png"
                    width="40"
                  />
                  <span>developer</span>
                </div>
              )}
              {!this.state.hoverDeveloper && (
                <div className="icon">
                  <img
                    src="https://s3-us-west-1.amazonaws.com/warrenkwong.com-assets/code.png"
                    width="40"
                  />
                </div>
              )}
            </div>
            <div
              onMouseEnter={() => this.onHoverHandler("hoverPhotographer")}
              onMouseLeave={() => this.onHoverHandler("hoverPhotographer")}
            >
              {this.state.hoverPhotographer && (
                <div className="icon icon-hover">
                  <img
                    src="https://s3-us-west-1.amazonaws.com/warrenkwong.com-assets/photo-camera-orange.png"
                    width="40"
                  />
                  <span>photographer</span>
                </div>
              )}
              {!this.state.hoverPhotographer && (
                <div className="icon">
                  <img
                    src="https://s3-us-west-1.amazonaws.com/warrenkwong.com-assets/photo-camera.png"
                    width="40"
                  />
                </div>
              )}
            </div>
            <div
              onMouseEnter={() => this.onHoverHandler("hoverMusic")}
              onMouseLeave={() => this.onHoverHandler("hoverMusic")}
            >
              {this.state.hoverMusic && (
                <div className="icon icon-hover">
                  <img
                    src="https://s3-us-west-1.amazonaws.com/warrenkwong.com-assets/headphones-orange.png"
                    width="40"
                  />
                  <span>music enthusiast</span>
                </div>
              )}
              {!this.state.hoverMusic && (
                <div className="icon">
                  <img
                    src="https://s3-us-west-1.amazonaws.com/warrenkwong.com-assets/headphones.png"
                    width="40"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
