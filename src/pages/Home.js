import React from 'react'
import SideNav from '../components/SideNav'
import Dashboard from './../components/Dashboard';
import '../../src/style.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import CreateWorkflow from '../pages/CreateWorkflow';
import Workflows from '../pages/Workflows';
import AppConnections from './AppConnections';

function Home() {

    return (
        <div id="dashboard">
            <div>
                <Switch>
                    <Route path="/create-workflow">
                        <CreateWorkflow />
                    </Route>
                    <Route path="/dashboard">
                        <div style={{display: 'grid', gridTemplateColumns: '80px auto'}}>
                            <div><SideNav /></div>
                            <div><Dashboard /></div>
                        </div>
                    </Route>
                    <Route path="/workflows">
                        <SideNav />
                        <Workflows />
                    </Route>
                    <Route path="/connections">
                        <SideNav />
                        <AppConnections />
                    </Route>
                    <Route path="/">
                        <SideNav />
                        <Dashboard />
                    </Route>

                </Switch>
            </div>
        </div>
    )
}

export default Home
