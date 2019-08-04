import React from 'react';
import { Layout, Menu, Icon, Button } from 'antd';

export default class PageContent extends React.Component {

  render() {
    return (
      <Layout>
        <Layout.Header>Header</Layout.Header>
        <Layout>
          <Layout.Sider style={{height: "100%"}}>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1">
                <Icon type="form" />
                <span>Form</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>Dashboard</span>
              </Menu.Item>
            </Menu>
          </Layout.Sider>
          <Layout.Content>
            <Button> thing </Button>
          </Layout.Content>
        </Layout>
      </Layout>
    )
  }

}
