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
            <div style={{ display: 'flex', justifyContent: 'center', padding: '6em 0' }}>
                <Switch>
                    <Route path="/create-workflow">
                        <CreateWorkflow />
                    </Route>
                    <Route path="/dashboard">
                        <SideNav />
                        <Dashboard />
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
