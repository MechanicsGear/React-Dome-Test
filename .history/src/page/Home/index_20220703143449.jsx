import React, { useState } from "react";
import "./index.scss";
import { Card, Form, Input, Select, Button, Table, Modal } from "antd";
export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address",
    },
  ];
  const data = [
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
  ];
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="home-div">
      <div className="home-select">
        <Form
          onFinish={this.onFinish}
          validateTrigger={["onClick"]}
          layout="inline"
        >
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
          <Button type="primary" onClick={showModal}>
            添加
          </Button>
        </Form>
      </div>
      <>
        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        ></Modal>
      </>
      <div className="home-table">
        <Card title="home表单" bordered={false} style={{ width: "100%" }}>
          <Table columns={columns} dataSource={data} />;
        </Card>
      </div>
    </div>
  );
}
