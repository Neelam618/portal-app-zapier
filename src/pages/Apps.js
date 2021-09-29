import React from 'react'
import { Layout } from 'antd';
import FeaturedApps from '../components/FeaturedApps'
import PopularApps from '../components/PopularApps';
import AllApps from '../components/AllApps';
import '../../src/style.css'

const { Header, Footer, Sider, Content } = Layout;

function Apps() {
    return (
        <div id="layout">
            <Layout>
                <Header>Header</Header>
                <Layout>
                    <Sider>Aside</Sider>
                    <Content>
                        <PopularApps />
                        <FeaturedApps />
                        <AllApps />
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default Apps
