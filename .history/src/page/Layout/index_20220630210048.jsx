import { Outlet } from "react-router-dom";
import { Button } from "antd";
import ProLayout, { PageContainer } from "@ant-design/pro-layout";
export default function Layout() {
  return (
    // <div>
    //     <h1>layout</h1>
    //     <Outlet></Outlet>
    //     <Button type="primary">Button</Button>
    // </div>
    <ProLayout>
      <PageContainer
        extra={[
          <Button key="3">Operating</Button>,
          <Button key="2">Operating</Button>,
          <Button key="1" type="primary">
            Main Operating
          </Button>,
        ]}
        footer={[
          <Button>reset</Button>,
          <Button type="primary">submit</Button>,
        ]}
      >
        {children}
      </PageContainer>
    </ProLayout>
  );
}
