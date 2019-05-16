import React, { Component } from "react";

class IdBox extends Component {
  render() {
    return (
      <div className="Box">
        <img src={this.props.image} alt="" />
        <p className="level1">
          {this.props.firstName}
          <text style={{ fontWeight: "bold" }}> {this.props.name}</text>
        </p>
        <p className="level2">{this.props.activity}</p>
        <p className="level2">{this.props.funct}</p>
      </div>
    );
  }
}

export default IdBox;
