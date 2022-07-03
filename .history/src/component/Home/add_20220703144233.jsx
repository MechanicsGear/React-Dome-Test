import React, { Component } from "react";
import { Form, Input, Button } from "antd";
export default class AddPage extends Component {

  render() {
    return (
      <div>
        <Form onFinish={onFinish}>
          <Form.Item label="姓名" name="name">
            <Input></Input>
          </Form.Item>
          <Form.Item label="年龄" name="age">
            <Input></Input>
          </Form.Item>
          <Form.Item label="地址" name="address">
            <Input></Input>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              添加
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
