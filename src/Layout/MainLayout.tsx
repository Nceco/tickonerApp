/**
 * @desc MainLayout 项目主页面
 * @date 2023/11/06
 * @author 7_mu12
 */

import React, { useState } from "react";
import { Layout } from "antd";
import AuthWrapper from "../Auth/AuthWrapper";
import { Outlet } from "react-router-dom";
import Logo from "./component/Logo";
import MenuBar from "./component/MenuBar";
import HeaderBar from "./component/HeaderBar";

const { Header, Sider, Content } = Layout;

const MainLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  return (
    <Layout>
      <Sider trigger={null} className={'sliderBox'} collapsible collapsed={collapsed}>
        <Logo collapsed={collapsed}/>
        <MenuBar/>
      </Sider>
      <Layout>
        <Header className={'headerBox'}>
          <HeaderBar
            handleCollapsed={() => {
              setCollapsed( !collapsed)
            }}
            collapsed={collapsed}
          />
        </Header>
        <Content style={{ padding: 20 }}>
          {/*子路由的占位符*/}
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  )
}

export default AuthWrapper(MainLayout)
