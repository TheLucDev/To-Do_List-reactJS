import React, { Component } from "react";

export default class Theme extends Component {
  LightTheme = () => {
    console.log("yes");
  };

  DarkTheme = () => {
    console.log("no");
  };

  render() {
    return (
      <div>
        <div className="dropdown">
          <button
            className="btn btn-info dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Choose Theme
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <button
              onClick={this.LightTheme}
              className="dropdown-item btn btn-light"
            >
              Light theme
            </button>
            <button
              onClick={this.DarkTheme}
              className="dropdown-item btn btn-dark"
            >
              Dark Theme
            </button>
          </div>
        </div>
      </div>
    );
  }
}
