import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Apps from '../pages/Apps';
import CreateWorkflow from '../pages/CreateWorkflow';
import Home from '../pages/Home';
import Workflows from '../pages/Workflows';

function SideNav() {
    return (
        // <Router>
            <div>
                <nav class="navContainer">
                    <ul class="nav">
                        <li class="navItems">
                            <span className="createWorkflowIcon">
                                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#ffffff"></path></svg>
                            </span>
                            <Link to="/create-workflow" className="createWorkflowNavText">Create Workflow</Link>
                        </li>

                        <li class="navItems">
                            <span className="navIcon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 13H3V3H11V13ZM11 21H3V15H11V21ZM13 21H21V11H13V21ZM13 9V3H21V9H13Z" fill="#666666"></path></svg>
                            </span>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>

                        <li class="navItems">
                            <span className="navIcon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.02002 12C2.02002 6.49002 6.49002 2.02002 12 2.02002C17.51 2.02002 21.98 6.49002 21.98 12C21.98 17.51 17.51 21.98 12 21.98C6.49002 21.98 2.02002 17.51 2.02002 12ZM11.48 13.74V20L16.35 10.26H13V4.00002L8.00002 13.74H11.48Z" fill="#666666"></path></svg>
                            </span>
                            <Link to="/workflows">Workflows</Link>
                        </li>

                        <li class="navItems">
                            <span className="navIcon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 8H8V4H4V8ZM10 20H14V16H10V20ZM8 20H4V16H8V20ZM4 14H8V10H4V14ZM14 14H10V10H14V14ZM16 4V8H20V4H16ZM14 8H10V4H14V8ZM16 14H20V10H16V14ZM20 20H16V16H20V20Z" fill="#666666"></path></svg>
                            </span>
                            <Link to="/connections">My Apps</Link>
                        </li>
                    </ul>
                </nav>
                {/* <Switch>
                    <Route path="/create-workflow">
                        <CreateWorkflow />
                    </Route>
                    <Route path="/dashboard">
                        <Home />
                    </Route>
                    <Route path="/workflows">
                        <Workflows />
                    </Route>
                    <Route path="/my-apps">
                        <Apps />
                    </Route>
                    
                </Switch> */}
            </div>
        // </Router >
    )
}

export default SideNav
