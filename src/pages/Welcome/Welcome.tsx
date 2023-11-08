import React from "react";
import { Col, Layout, Menu, Row } from "antd";
import { useNavigate } from "react-router-dom";

const { Header, Content } = Layout

const Welcome: React.FC = () => {
  const navigate = useNavigate()
  return (
    <Layout style={{ height: '100%' }}>
      <Header className={'headerBox'} style={{opacity:'0.5'}}>
        <Row>
          <Col span={22}>
            <Menu
              mode={'horizontal'}
              items={[
                {
                  key: 'Main',
                  label: '主页',
                  onClick: () => {
                    navigate('/main', { replace: true })
                  }
                }
              ]}
            />
          </Col>
          <Col>
            <span className={'gradientText'} style={{ fontSize: 24 }}>Welcome</span>
          </Col>
        </Row>
      </Header>
      <Content style={{ height: 'calc(100vh - 64px)'}} className={'welcomeBg'}/>
    </Layout>
  )
}

export default Welcome
