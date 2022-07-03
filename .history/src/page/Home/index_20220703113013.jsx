import React, { Component } from "react";
import "./index.scss";
import { Card, Form, Input, Select, Button } from "antd";
export default class Home extends Component {
  onFinish = (params) => {
    console.log(params);
  };

  render() {
    return (
      <div className="home-div">
        <div className="home-select">
          <Form onFinish={this.onFinish} layout="inline">
            <Form.Item label="文件名" name="FileName">
              <Input></Input>
            </Form.Item>
            <Form.Item label="文件类型" name="FileType">
              <Select style={{ width: 100 }}>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                查询
              </Button>
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
