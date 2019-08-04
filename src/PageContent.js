import React from 'react';
import { Layout, Menu, Icon, Button } from 'antd';

export default class PageContent extends React.Component {

  render() {
    return (
      <Layout style={{height: "100%"}}>
        <Layout.Header>Header</Layout.Header>
        <Layout>
          <Layout.Sider>
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
            <Button type="primary"> thing </Button>
          </Layout.Content>
        </Layout>
      </Layout>
    )
  }

}
