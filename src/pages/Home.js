import React from 'react'
import SideNav from '../components/SideNav'
import Dashboard from './../components/Dashboard';
import '../../src/style.css'
import { useLocation } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import CreateWorkflow from '../pages/CreateWorkflow';
import Workflows from '../pages/Workflows';
import AppConnections from './AppConnections';
import Topbar from '../components/Topbar';
import Signin from '../components/Signin';
import { signOut } from 'firebase/auth';

function Home() {
    let location = useLocation();

    return (
        <div id="dashboard">
            {
                location.pathname == "/create-workflow" ? null : <Topbar />
            }
            <div>
                <Switch>
                <Redirect exact from="/" to="/dashboard" />
                    <Route path="/create-workflow">
                        <CreateWorkflow />
                    </Route>
                    <Route path="/dashboard">
                        <div style={{ display: 'grid', gridTemplateColumns: '80px auto' }}>
                            <div><SideNav /></div>
                            <div><Dashboard /></div>
                        </div>
                    </Route>
                    <Route path="/workflows">
                        <div style={{ display: 'grid', gridTemplateColumns: '80px auto' }}>
                            <div><SideNav /></div>
                            <div><Workflows /></div>
                        </div>
                    </Route>
                    <Route path="/connections">
                        <div style={{ display: 'grid', gridTemplateColumns: '80px auto' }}>
                            <div><SideNav /></div>
                            <div><AppConnections /></div>
                        </div>
                    </Route>
                    <Route path="/">
                        <div style={{ display: 'grid', gridTemplateColumns: '80px auto' }}>
                            <div><SideNav /></div>
                            <div><Dashboard /></div>
                        </div>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Home
