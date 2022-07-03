import React, { Component } from "react";
import "./index.scss";
import { Card } from "antd";
export default class Home extends Component {
  render() {
    return (
      <div className="home-div">
        <div className="home-select"></div>
        <div className="home-table">
          <Card
            title="home表单"
            bordered={false}
            style={{ width: "100%" }}
          ></Card>
        </div>
      </div>
    );
  }
}
