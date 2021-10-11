import React from 'react'
import '../../style.css'
import Aside from './Aside'
import { Layout, Select, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Home from './Home'

const { Header, Content, Footer, Sider } = Layout;
const { Option } = Select;
const { SubMenu } = Menu;

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
    { icon: "trigger.svg", title: "Trigger", text: "Help users find new data as soon as it’s available in your app. Triggers connect to webhooks or polling endpoints.", link: '' },
    { icon: "actions.svg", title: 'Actions', text: 'Help users write data back to your integration. Actions create or update records through your API.', link: '' },
    { icon: 'validate.svg', title: 'Validate Integration', text: 'Check your project for errors, get specific user experience recommendations, and get a list of remaining items that are required before you can make your integration available to everyone on Zapier.', link: '' },
    { icon: 'publish.svg', title: 'Publish', text: 'When you’re ready, let our review team know you want to take your integration public. We’ll respond with feedback and a timeline for a marketing launch.', link: '' }
]
function PlatformUi() {
    return (
        <div id="platformUi">
            <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                <Aside />
                <Layout className="site-layout" style={{ marginLeft: 340 }}>
                    <Content style={{ padding: '0 30px', minHeight: 280, overflow: 'initial', textAlign: 'left' }}>
                        <Home />
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default PlatformUi
