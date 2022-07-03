import { Outlet } from "react-router-dom"
import { Button } from 'antd';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
export default function Layout(){
    return(
        <div>
            layout
            <Outlet />
        </div>
    )
}