import React from 'react'
import Aside from './Aside'
import { Layout } from 'antd';
import Authentication from './Authentication'
import { Route } from 'react-router-dom'
import Home from './Home'
import Triggers from './Triggers'
import Actions from './Actions'
import Advanced from './Advanced';
import Publishing from './Publishing'
import '../../style.css'

const { Header, Content, Footer, Sider } = Layout;

function PlatformUi() {
    return (    
        <div id="platformUi">
            <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                <Aside />
                <Layout className="site-layout" style={{ marginLeft: 340 }}>
                    <Content style={{ padding: '0 30px', minHeight: 280, overflow: 'initial', textAlign: 'left' }}> 
                        <Route path='/' exact={true}><Home /></Route>
                        <Route path='/auth'><Authentication /></Route>
                        <Route path='/triggers'><Triggers /></Route>
                        <Route path='/actions'><Actions /></Route>
                        <Route path='/advanced'><Advanced /></Route>
                        <Route path='/publishing'><Publishing /></Route>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default PlatformUi
