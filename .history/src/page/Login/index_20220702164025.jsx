import React from "react";
import { useNavigate } from "react-router-dom";
import { setToken } from "../../utils/localStorage";
import "./index.scss";
import { Button, Checkbox, Form, Input } from "antd";
export default function Login() {
  const navigate = useNavigate();
  const onFinish = () => {
    setToken("asdasda");
    navigate("/", { replace: true });
  };
  return (
    <div className="login-div">
      <div className="login-form">
        <p className="login-title">React-Dome-Test</p>
        <Form onFinish={onFinish} name="control-hooks">
          <Form.Item
            name="username"
            rules={[{ required: true, message: "用户名不能为空" }]}
            wrapperCol={{ offset: 4, span: 16 }}
          >
            <Input  placeholder="请输入用户名"></Input>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "密码不能为空" }]}
            wrapperCol={{ offset: 4, span: 16 }}
          >
            <Input placeholder="请输入密码"></Input>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4, span: 16 }} className="form-button">
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
