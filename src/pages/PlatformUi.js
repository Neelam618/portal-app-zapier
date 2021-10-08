import React from 'react'
import '../style.css'
import { Layout, Menu, Select } from 'antd';


import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { Option } = Select;

function PlatformUi() {
    return (
        <div id="platformUi">
            <Layout>
                <Content>
                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Sider className="site-layout-background" width={340}>
                            <div className="sidebarHeader">
                                <div className="appTitle">
                                    <div className="appLogo">
                                        <img width="42" src="https://cdn.zapier.com/zapier/images/frontend/placeholder/128x128.grey.png?auto=format&ar=undefined&fit=crop&ixlib=react-9.0.2&h=42&w=42&q=75&dpr=1" alt="" />
                                    </div>
                                    <div>
                                        <h3 className="appName">App Name</h3>
                                        <div className="visibility">Private</div>
                                    </div>
                                </div>
                                <div className="publishLink">
                                    <a href="">Publish</a>
                                </div>
                            </div>
                            <div className="appSummary">
                                <div className="versionWrapper">Version
                                    <span className="versionSelect">
                                        <Select defaultValue="1.0.0" style={{ width: 80 }} dropdownMatchSelectWidth={150}>
                                            <Option value="allVersions">See all versions</Option>
                                        </Select>
                                    </span> 
                                </div>
                                <div>
                                    <span className="status">Status</span>
                                    <span className="visibility">Private</span>
                                </div>
                            </div>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%' }}
                            >
                                <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                                    <Menu.Item key="1">option1</Menu.Item>
                                    <Menu.Item key="2">option2</Menu.Item>
                                    <Menu.Item key="3">option3</Menu.Item>
                                    <Menu.Item key="4">option4</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                                    <Menu.Item key="5">option5</Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                                    <Menu.Item key="9">option9</Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
                    </Layout>
                </Content>
            </Layout>
        </div>
    )
}

export default PlatformUi
