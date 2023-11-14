/**
 * @desc HeaderBar
 * @author 7mu_12
 * @date 2023/11/07
 */
import React from "react";
import { Button, Col, Row } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import UserAvatar from "./UserAvatar";

export type HeaderBarProps = {
  collapsed: boolean,
  handleCollapsed: () => void;
}

const HeaderBar: React.FC<HeaderBarProps> = (props) => {
  const { collapsed, handleCollapsed } = props
  return (
    <Row justify={'space-between'}>
      <Col span={4}>
        <Button
          type={'text'}
          icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
          onClick={() => handleCollapsed && handleCollapsed()}
        />
      </Col>
      <Col span={20}>
        <Row justify={'end'}>
          <Col>
            <UserAvatar/>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default HeaderBar
