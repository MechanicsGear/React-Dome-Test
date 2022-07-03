import { Outlet } from "react-router-dom";
import {
  FileOutlined,
  PieChartOutlined
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import "./index.scss";
import "../../utils/history";
import img from "../../comon/img/1.png";
import { useNavigate } from "react-router-dom";
// import { removeToken } from "../../utils/localStorage";
import { useState } from "react";
import { useStore } from "../../store";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const BreadcrumbList = ["React-Dome"];

const items = [
  getItem("首页", "/", <FileOutlined />),
  getItem("关于", "/about", <PieChartOutlined />),
];
const enumList = {
  "/": "首页",
  "/about": "关于",
};
export default function Layouts() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = new useNavigate();
  function logout(){
    const {LoginStor} =new useStore()
    LoginStor.LogOut()
    navigate('/login')
  }
  function routePush(data) {
    navigate(data.key);
    console.log(data);
    if (BreadcrumbList.length !== 1) {
      BreadcrumbList.splice(1, 1, enumList[data.key]);
    } else {
      BreadcrumbList.push(enumList[data.key]);
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
        <div className="logo">Reatc-Dome-Test</div>
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
        >
          <div className="user-div">
            <div className="user-img">
              <img src={img} alt="头像" />
            </div>
            <div className="user-name">zhangsan</div>
            <div className="user-type">
              <ul>
                <li>用户信息</li>
                <li onClick={logout}>退出账户</li>
              </ul>
            </div>
          </div>
        </Header>
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
            {BreadcrumbList.map((item) => {
              return <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>;
            })}
          </Breadcrumb>
          <div
            className="site-layout-background content-div"
            
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
