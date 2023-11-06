import React from "react";
import GridChartLayout from "@/pages/Chart/GridChartLayout";
import Asset from "@/pages/Asset/Asset";
import MainLayout from "@/Layout/MainLayout";
import Login from "../pages/Login/Login";

export interface RouteItemType {
  isDefaultPage?: boolean,
  hideInMenu?: boolean,
  key: string,
  name: string,
  icon?: React.ReactNode,
  label?: string,
  path: string,
  component: React.ComponentType | null,
  children?: RouteItemType[]
}

const routes: RouteItemType[] = [
  {
    key: 'main',
    name: '',
    path: '/',
    component: MainLayout,
    hideInMenu: true,
    children: [
      {
        isDefaultPage: true,
        key: 'analysis',
        name: '组件分析',
        // icon: <FundOutlined />,
        label: '组件分析',
        path: '/',
        component: Asset
      },
      {
        key: 'chart',
        name: '图表编辑',
        // icon: '',
        label: '图表编辑',
        path: '/chart',
        component: GridChartLayout
      }
    ]
  },
  {
    key: 'login',
    name: '登录',
    path: '/login',
    component: Login,
    hideInMenu: true
  }
]

export default routes
