import React, { Component } from "react";
import "./index.scss";
import { Card } from "antd";
export default class Home extends Component {
  render() {
    return (
      <div className="home-div">
        <div className="home-select"></div>
        <Card
          title="Card title"
          bordered={false}
          style={{ width: "80%" }}
        ></Card>
      </div>
    );
  }
}
