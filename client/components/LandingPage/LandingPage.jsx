import React, { Component } from "react";

import "./LandingPage.css";

export default class LandingPage extends Component {
  constructor() {
    super();

    // this.onHoverHandler = this.onHoverHandler.bind(this);
    // this.offHoverHandler = this.offHoverHandler.bind(this);

    this.state = {
      icons: ["developer", "photographer", "music enthusiast"],
      hoverHeader: false,
      hoverDeveloper: false,
      hoverPhotographer: false,
      hoverMusic: false
    };
  }

  onHoverHandler(text) {
    this.setState({ [text]: true });
  }

  offHoverHandler(text) {
    this.setState({ [text]: false });
  }

  render() {
    return (
      <div className="landing-page">
        <div>
          {/* header "Warren|Kwong" */}
          <div>
            <div>
              {this.state.hoverHeader && (
                <div
                  className="header"
                  onMouseLeave={() => this.offHoverHandler("hoverHeader")}
                >
                  <span className="header-left-letter hover-text-color letter-hover">
                    W A R R E N
                  </span>
                  <span className="divider">|</span>
                  <span className="header-right-letter hover-text-color letter-hover">
                    K W O N G
                  </span>
                </div>
              )}
              {!this.state.hoverHeader && (
                <div
                  className="header"
                  onMouseEnter={() => this.onHoverHandler("hoverHeader")}
                >
                  <span className="header-left-letter">W</span>
                  <span className="divider">|</span>
                  <span className="header-right-letter">K</span>
                </div>
              )}
            </div>
          </div>
          {/* subheader icon row  */}
          <div className="subheader">
            {/* developer icon  */}
            <div>
              {this.state.hoverDeveloper && (
                <div className="icon hover-text-color">
                  <img
                    src="https://s3-us-west-1.amazonaws.com/warrenkwong.com-assets/code-orange.png"
                    alt="developer icon"
                    width="40"
                    onMouseLeave={() => this.offHoverHandler("hoverDeveloper")}
                  />
                  <span>developer</span>
                </div>
              )}
              {!this.state.hoverDeveloper && (
                <div className="icon">
                  <img
                    src="https://s3-us-west-1.amazonaws.com/warrenkwong.com-assets/code.png"
                    alt="developer icon"
                    width="40"
                    onMouseEnter={() => this.onHoverHandler("hoverDeveloper")}
                  />
                </div>
              )}
            </div>
            {/* photographer icon */}
            <div>
              {this.state.hoverPhotographer && (
                <div className="icon hover-text-color">
                  <img
                    src="https://s3-us-west-1.amazonaws.com/warrenkwong.com-assets/photo-camera-orange.png"
                    width="40"
                    alt="photography icon"
                    onMouseLeave={() =>
                      this.offHoverHandler("hoverPhotographer")
                    }
                  />
                  <span>photographer</span>
                </div>
              )}
              {!this.state.hoverPhotographer && (
                <div className="icon">
                  <img
                    src="https://s3-us-west-1.amazonaws.com/warrenkwong.com-assets/photo-camera.png"
                    width="40"
                    alt="photography icon"
                    onMouseEnter={() =>
                      this.onHoverHandler("hoverPhotographer")
                    }
                  />
                </div>
              )}
            </div>
            {/* music enthusiast icon */}
            <div>
              {this.state.hoverMusic && (
                <div className="icon hover-text-color">
                  <img
                    src="https://s3-us-west-1.amazonaws.com/warrenkwong.com-assets/headphones-orange.png"
                    alt="music icon"
                    width="40"
                    onMouseLeave={() => this.offHoverHandler("hoverMusic")}
                  />
                  <span>music enthusiast</span>
                </div>
              )}
              {!this.state.hoverMusic && (
                <div className="icon">
                  <img
                    src="https://s3-us-west-1.amazonaws.com/warrenkwong.com-assets/headphones.png"
                    alt="music icon"
                    width="40"
                    onMouseEnter={() => this.onHoverHandler("hoverMusic")}
                  />
                </div>
              )}
            </div>
          </div>
          {/* Coming Soon Message */}
          {/* <div className="coming-soon">WEBSITE COMING SOON</div> */}
        </div>
      </div>
    );
  }
}
