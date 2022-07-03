import { Outlet } from "react-router-dom";
import { FileOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from "antd";
import { useState } from "react";
import './index.css'
import '../../utils/history'
import  {useNavigate} from 'react-router-dom'
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const BreadcrumbList =['React-Dome']

const items = [
  getItem("首页", "/", <FileOutlined />),
  getItem("关于", "/about", <PieChartOutlined />),
];
export default function Layouts() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate =new useNavigate()
  function routePush(data){
    navigate(data.key)
    if(BreadcrumbList.length == 2){
      BreadcrumbList.splice(1,1,data.key)
    }else{
      BreadcrumbList.push(key)
    }
  }
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" >
          Reatc-Dome-Test
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={routePush}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
           <Outlet></Outlet>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
