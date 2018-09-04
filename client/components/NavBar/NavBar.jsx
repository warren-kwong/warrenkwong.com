import React, { Component } from "react";

import "./NavBar.css";

export default class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      hoverMenu: false
    };
  }

  onMenuHover() {
    this.setState({ hoverMenu: true });
  }

  offMenuHover() {
    this.setState({ hoverMenu: false });
  }

  render() {
    return (
      <div
        className={
          !this.state.hoverMenu
            ? "nav-container"
            : "nav-container nav-container-hover"
        }
        onMouseEnter={() => this.onMenuHover()}
        onMouseLeave={() => this.offMenuHover()}
      >
        <div className="nav-header">
          <img
            src={
              !this.state.hoverMenu
                ? "https://s3-us-west-1.amazonaws.com/warrenkwong.com-assets/menu.png"
                : "https://s3-us-west-1.amazonaws.com/warrenkwong.com-assets/menu-orange.png"
            }
            alt="hamburger menu icon"
            width="25"
          />
        </div>
        {this.state.hoverMenu && (
          <div className="nav">
            <ul>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>PROJECTS</li>
              <li>RESUME</li>
              <li>CONTACT</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}
