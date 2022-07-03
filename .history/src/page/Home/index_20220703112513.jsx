import React, { Component } from "react";
import "./index.scss";
import { Card, Form, Input, Select } from "antd";
export default class Home extends Component {
  render() {
    return (
      <div className="home-div">
        <div className="home-select">
          <Form>
            <Form.Item label="文件名" name="FileName">
              <Input></Input>
            </Form.Item>
            <Form.Item label="文件类型">
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
          </Form>
        </div>
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
