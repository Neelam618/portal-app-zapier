import React from 'react'
import '../style.css'
import { Layout, Menu, Select, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { Option } = Select;

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                See all versions
            </a>
        </Menu.Item>
    </Menu>
);

function PlatformUi() {
    return (
        <div id="platformUi">
                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Sider className="site-layout-background" width={340} style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                        }}>
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
                                        {/* <Select defaultValue="1.0.0" style={{ width: 80 }} dropdownMatchSelectWidth={150}>
                                            <a href="https://google.com">See all versions</a>
                                        </Select> */}
                                        <Dropdown overlay={menu} trigger="click">
                                            <button className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                1.0.0 <DownOutlined />
                                            </button>
                                        </Dropdown>
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
                                defaultOpenKeys={['sub1','sub2']}
                                style={{ height: 650 }}
                            >
                                <SubMenu key="sub1" title="Build">
                                    <Menu.Item key="1"><a href="">Integration Home</a></Menu.Item>
                                    <Menu.Item key="2"><a href="">Authentication</a></Menu.Item>
                                    <Menu.Item key="3"><a href="">Triggers</a></Menu.Item>
                                    <Menu.Item key="4"><a href="">Actions</a></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" title="Manage">
                                    <Menu.Item key="5"><a href="">Publishing</a></Menu.Item>
                                    <Menu.Item key="6"><a href="">Versions</a></Menu.Item>
                                    <Menu.Item key="7"><a href="">Sharing</a></Menu.Item>
                                    <Menu.Item key="8"><a href="">Analytics</a></Menu.Item>
                                    <Menu.Item key="9"><a href="">Monitoring</a></Menu.Item>
                                    <Menu.Item key="10"><a href="">History</a></Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout className="site-layout" style={{ marginLeft: 200 }}>
                            <Content style={{ padding: '0 24px', minHeight: 280, overflow: 'initial' }}>
                                <div>
                                    <h1>Integration Home</h1>
                                    <div className="cards">
                                        <section>
                                            <div className="card">
                                                <div className="cardInfo">
                                                    <h2>Authentication</h2>
                                                    <p>Tell us how to authenticate users with your API. OAuth 2 is most common, but Zapier also supports a handful of options. Learn more.</p>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </Content>
                    </Layout>
            </Layout>
        </div>
    )
}

export default PlatformUi
