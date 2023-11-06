/**
 * @desc MainLayout 项目主页面
 * @date 2023/11/06
 * @author 7_mu12
 */

import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { BarChartOutlined, FundOutlined } from "@ant-design/icons";
import AuthWrapper from "../Auth/AuthWrapper";
import { Link, Outlet } from "react-router-dom";
import { MenuItemType } from "antd/lib/menu/hooks/useItems";

const { Header, Sider, Content } = Layout;
const MainLayout: React.FC = (props) => {
  const [menus,setMenus] = useState<MenuItemType[]>([
    {
      key: 'analysis',
      icon: <FundOutlined />,
      label: <Link to={'/'}>{'组件分析'}</Link>,
    },
    {
      key: 'chart',
      icon: <BarChartOutlined />,
      label: <Link to={'/chart'}>{'图表编辑'}</Link>,
    },
  ])
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null}>
        <div style={{ height: 64, background: '#4dd0e1' }}>logo</div>
        <Menu
          style={{ height: 'calc(100vh - 64px)' }}
          mode="inline"
          defaultSelectedKeys={['analysis']}
          items={menus}
        />
      </Sider>
      <Layout>
        <Header style={{ background: '#FFFFFF' }}>header</Header>
        <Content style={{ padding: 10 }}>
          {/*子路由的占位符*/}
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  )
}

export default AuthWrapper(MainLayout)
