import React, { Component } from "react";
import "./index.scss";
export default class Home extends Component {
  render() {
    return (
      <div className="home-div">
        <div className="home-select"></div>
        <Card
          title="Card title"
          bordered={false}
          style={{ width: "100%" }}
        ></Card>
      </div>
    );
  }
}
