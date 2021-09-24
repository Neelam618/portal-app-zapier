import React from 'react'
import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import { Layout } from 'antd';
import FeaturedApps from './FeaturedApps'
import PopularApps from './PopularApps';
import AllApps from './AllApps';

import './style.css'

const { Header, Footer, Sider, Content } = Layout;

function AppLayout() {
    return (
        <div id="overrideCarousel">
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

export default AppLayout