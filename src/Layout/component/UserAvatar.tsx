/**
 * @desc UserAvatar
 * @author 7mu_12
 * @date 2023/11/07
 */
import React from "react";
import { Avatar, Dropdown, Space } from "antd";
import { LoginOutlined, RedoOutlined, UserOutlined } from "@ant-design/icons";
import { MenuItemType } from "antd/es/menu/hooks/useItems";

export type UserAvatarProps = {}

export type UserAvatarRef = {}

//todo
const UserAvatar = React.forwardRef<UserAvatarRef, UserAvatarProps>((props, ref) => {

  const handleMenuItemClick = (menuItem: MenuItemType) => {
    switch (menuItem.key){
      case 'info':
        console.log('个人中心')
        break;
      case 'udpPwd':
        console.log('修改密码')
        break;
      default:
        console.log('退出登录')
    }
  }

  return (
    <Dropdown
      trigger={['click']}
      arrow
      menu={{
        items: [
          {
            label: '个人中心',
            key: 'info',
            icon: <UserOutlined/>,
            onClick: handleMenuItemClick
          },
          {
            label: '修改密码',
            key: 'updPwd',
            icon: <RedoOutlined/>,
            onClick: handleMenuItemClick
          },
          {
            label: '退出登录',
            key: 'logout',
            icon: <LoginOutlined/>,
            onClick: handleMenuItemClick
          },
        ]
      }}
    >
      <a onClick={e => e.preventDefault()}>
        <Space>
          <Avatar size={32} icon={<UserOutlined/>}/>
          <span style={{ color: '#333' }}>管理员</span>
        </Space>
      </a>
    </Dropdown>
  )
})

export default React.memo(UserAvatar)
