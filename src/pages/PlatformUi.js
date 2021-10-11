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

const cardItems = [
    {icon: "trigger.svg", title: "Trigger", text: "Help users find new data as soon as it’s available in your app. Triggers connect to webhooks or polling endpoints.", link: ''},
    {icon: "actions.svg", title: 'Actions', text: 'Help users write data back to your integration. Actions create or update records through your API.', link: ''},
    {icon: 'validate.svg', title: 'Validate Integration', text: 'Check your project for errors, get specific user experience recommendations, and get a list of remaining items that are required before you can make your integration available to everyone on Zapier.', link: ''},
    {icon: 'publish.svg', title: 'Publish', text: 'When you’re ready, let our review team know you want to take your integration public. We’ll respond with feedback and a timeline for a marketing launch.', link: ''}
]
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
                        <Layout className="site-layout" style={{ marginLeft: 340 }}>
                            <Content style={{ padding: '0 30px', minHeight: 280, overflow: 'initial', textAlign: 'left' }}>
                                <div>
                                    <h1 className="homeTitle">Integration Home</h1>
                                    <div className="cards">
                                        <section>
                                            <div className="card">
                                                <div className="cardInfo">
                                                    <h2 className="cardTitle">
                                                        <span className="icon">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM6 15.98C7.29 17.92 9.5 19.2 12 19.2C14.5 19.2 16.71 17.92 18 15.98C17.97 13.99 13.99 12.9 12 12.9C10 12.9 6.03 13.99 6 15.98Z" fill="#666666"></path></svg>
                                                        </span>
                                                        Authentication</h2>
                                                    <p className="cardPara">Tell us how to authenticate users with your API. OAuth 2 is most common, but Zapier also supports a handful of options. <a href="">Learn more</a>.</p>
                                                </div>
                                                <div>
                                                    <a href="" className="authLink">Set Up Authentication</a>
                                                </div>
                                            </div>
                                        </section>
                                        {
                                            cardItems.map((item) => {
                                                return (
                                                    <section>
                                                        <div className="card">
                                                            <div className="cardInfo">
                                                                <h2 className="cardTitle">
                                                                    <span className="icon">
                                                                        <img  className="titleIcon" src={item.icon} alt="" />
                                                                    </span>
                                                                    {item.title}</h2>
                                                                <p className="cardPara">{item.text}<a href=""> Learn more.</a></p>
                                                            </div>
                                                            <div className="lockWrapper">
                                                                <span className="lock">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM9 6V8H15V6C15 4.34 13.66 3 12 3C10.34 3 9 4.34 9 6Z" fill="#666666"></path></svg>
                                                                </span>
                                                            </div>
                                                        </div>
                                                </section>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </Content>
                    </Layout>
            </Layout>
        </div>
    )
}

export default PlatformUi
