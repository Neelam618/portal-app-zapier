import React from 'react'
import { NavLink as Link } from 'react-router-dom';

const navItems = [
    {
        navText: 'Dashboard',
        icon: 'img/dashboard.svg',
        path: '/dashboard'
    },
    {
        navText: 'Workflows',
        icon: 'img/workflows.svg',
        path: '/workflows'
    },
    {
        navText: 'My Apps',
        icon: 'img/apps.svg',
        path: '/connections'
    },
]

function SideNav() {
    return (
        <div>
            <nav class="navContainer">
                <ul class="nav">
                    <li class="navItems">
                        <Link to="/create-workflow" className="createWorkflowNavItem" activeStyle={{color: 'red'}}>
                            <span className="navIcon">
                                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#fff"></path></svg>
                            </span>
                            <span className="navText">Create Workflow</span>
                        </Link>
                    </li>

                    {
                        navItems.map((navItem) => {
                            return (
                                <li class="navItems">
                                    <Link to={navItem.path} activeStyle={{color: '#499df3'}}>
                                        <span className="navIcon">
                                            <img src={navItem.icon} alt="" />
                                        </span>
                                        <span className="navText">{navItem.navText}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </div>
    )
}

export default SideNav
