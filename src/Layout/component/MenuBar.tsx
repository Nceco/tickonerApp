/**
 * @desc MenuBar
 * @author 7mu_12
 * @date 2023/11/07
 */
import { Menu } from "antd";
import React, { useState } from "react";
import { MenuItemType } from "antd/lib/menu/hooks/useItems";
import { BarChartOutlined, FundOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

//todo
const MenuBar: React.FC = () => {
  const [menus, setMenus] = useState<MenuItemType[]>([
    {
      key: 'analysis',
      icon: <FundOutlined/>,
      label: <Link to={'/analysis'}>{'组件分析'}</Link>,
    },
    {
      key: 'chart',
      icon: <BarChartOutlined/>,
      label: <Link to={'/chart'}>{'图表编辑'}</Link>,
    },
  ])
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['']}
      items={menus}
    />
  )
}
export default MenuBar
