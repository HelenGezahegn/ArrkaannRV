import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import ContentWrapper from './ContentWrapper.js'

export default class PageLayout extends React.Component {

  render() {
    return (
      <Layout style={{height: "100%"}}>
        <Layout.Header>
          <img alt="rv logo" className="rv-logo" src="/rvLogo.jpg" />
          <span className="rv-name" style={{textColor: "#FDD26E"}}> Arrkann RV's Internal Tooling </span>
        </Layout.Header>
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
            <ContentWrapper />
          </Layout.Content>
        </Layout>
      </Layout>
    )
  }

}
