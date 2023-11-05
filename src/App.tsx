import React from "react";
import {Layout, Menu} from "antd";
import {UploadOutlined, UserOutlined, VideoCameraOutlined} from "@ant-design/icons";

const {Header, Sider, Content} = Layout;
const App: React.FC = () => {
  return (
    <Layout style={{minHeight: '100vh'}}>
      <Sider trigger={null}>
        <div style={{height: 64, background: '#4dd0e1'}}>logo</div>
        <Menu
          style={{height:'calc(100vh - 64px)'}}
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <VideoCameraOutlined/>,
              label: 'nav 2',
            },
            {
              key: '2',
              icon: <UploadOutlined/>,
              label: 'nav 3',
            },
            {
              key: '3',
              icon: <UserOutlined/>,
              label: '图表编辑',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{background: '#FFFFFF'}}>header</Header>
        <Content style={{margin: 20,background:'#FFFFFF',borderRadius:2,padding:10}}>
          content
        </Content>
      </Layout>
    </Layout>
  )
}

export default App