import React, { Component } from "react";

import "./LandingPage.css";

export default class Main extends Component {
  constructor() {
    super();
    this.onHoverHandler = this.onHoverHandler.bind(this);
    this.state = {
      icons: ["developer", "photographer", "music enthusiast"],
      hoverHeader: false,
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
            <div
              onMouseEnter={() => this.onHoverHandler("hoverHeader")}
              onMouseLeave={() => this.onHoverHandler("hoverHeader")}
            >
              {this.state.hoverHeader && (
                <div className="header hover-text-color">
                  <span className="header-left-letter">W A R R E N</span>
                  <span className="divider">|</span>
                  <span className="header-right-letter">K W O N G</span>
                </div>
              )}
              {!this.state.hoverHeader && (
                <div className="header">
                  <span className="header-left-letter">W</span>
                  <span className="divider">|</span>
                  <span className="header-right-letter">K</span>
                </div>
              )}
            </div>
          </div>
          <div className="subheader">
            <div
              onMouseEnter={() => this.onHoverHandler("hoverDeveloper")}
              onMouseLeave={() => this.onHoverHandler("hoverDeveloper")}
            >
              {this.state.hoverDeveloper && (
                <div className="icon hover-text-color">
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
                <div className="icon hover-text-color">
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
                <div className="icon hover-text-color">
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
