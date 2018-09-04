import React, { Component } from "react";

import "./About.css";

export default class About extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="about">
        <div className="profile-picture" />
        <div>
          <span>Hi, I'm Warren!</span>
        </div>
      </div>
    );
  }
}
