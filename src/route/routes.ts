import React from "react";
import MainLayout from "@/Layout/MainLayout";
import Login from "../pages/Login/Login";
import GridChartLayout from "@/pages/Chart/GridChartLayout";
import Asset from "@/pages/Asset/Asset";
import AssetDetail from "@/pages/Asset/AssetDetail";
import Main from "../pages/Main/Main";
import Welcome from "../pages/Welcome/Welcome";
import NotFound from "../pages/NotFound";

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
    key: 'entry',
    name: '主入口',
    path: '/',
    component: null,
    hideInMenu: true
  },
  {
    key: 'welcome',
    name: '欢迎',
    path: '/welcome',
    component: Welcome,
    hideInMenu: true
  },
  {
    key: 'main',
    name: '主页布局',
    path: '/main',
    component: MainLayout,
    hideInMenu: true,
    children: [
      {
        key: 'main',
        name: '主页',
        label: '主页',
        path: '/main',
        hideInMenu: true,
        component: Main
      },
      {
        key: 'analysis',
        name: '组件分析',
        label: '组件分析',
        path: '/main/analysis',
        component: Asset
      },
      {
        key: 'detail',
        name: '组件分析详情',
        label: '组件分析详情',
        hideInMenu: true,
        path: '/main/analysis/detail',
        component: AssetDetail
      },
      {
        key: 'chart',
        name: '图表编辑',
        label: '图表编辑',
        path: '/main/chart',
        component: GridChartLayout
      },
    ]
  },
  {
    key: 'login',
    name: '登录',
    path: '/login',
    component: Login,
    hideInMenu: true
  },
  {
    key: '404',
    name: 'NotFound',
    path: '/*',
    component: NotFound,
    hideInMenu: true
  }
]

export default routes
