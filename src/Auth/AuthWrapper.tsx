/**
 * @desc AuthWrapper 路由权限组件
 * 一旦父路由被该组件包裹后，该组件下的子路由就不需要再包裹（父路由不通过，子路由自然就不通过）
 * @date 2023/11/06
 * @author 7_mu12
 */

import React, { PropsWithChildren } from "react";
import { Navigate } from 'react-router-dom'

type UserInfoType = {
  id: string | number
} | null

const AuthWrapper = (WrapComp: React.FC<PropsWithChildren<any>>) => {
  const userInfo: UserInfoType = JSON.parse(localStorage.getItem('userInfo') || "{}")
  //未登录拦截重定向到登录页
  if (userInfo?.id) {
    return () => <Navigate to={'/login'} replace/>
  }
  return (props: PropsWithChildren<any>) => <WrapComp {...props}/>
}

export default AuthWrapper
