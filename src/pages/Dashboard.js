import React, { useState } from 'react'
import { Input, Menu, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import '../../src/style.css'
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';
const { SubMenu } = Menu;

function Dashboard() {
    const [isCollapsed, setIsCollapsed] = useState(true)

    function toggleCollapsed() {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div id="dashboard">
            <div style={{ display: 'flex', justifyContent: 'center', padding: '6em 0'  }}>
               
                <nav class="nav__cont">
                <ul class="nav">
                        <li class="nav__items ">
                            <span className="createWorkflowIcon">
                                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#ffffff"></path></svg>
                            </span>
                            <a href="" className="createWorkflowNavText">Create Workflow</a>
                        </li>

                        <li class="nav__items ">
                        <span className="navIcon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 13H3V3H11V13ZM11 21H3V15H11V21ZM13 21H21V11H13V21ZM13 9V3H21V9H13Z" fill="#666666"></path></svg>                            
                        </span>
                            <a href="">Dashboard</a>
                        </li>

                        <li class="nav__items ">
                        <span className="navIcon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.02002 12C2.02002 6.49002 6.49002 2.02002 12 2.02002C17.51 2.02002 21.98 6.49002 21.98 12C21.98 17.51 17.51 21.98 12 21.98C6.49002 21.98 2.02002 17.51 2.02002 12ZM11.48 13.74V20L16.35 10.26H13V4.00002L8.00002 13.74H11.48Z" fill="#666666"></path></svg>
                        </span>
                            <a href="">Zaps</a>
                        </li>

                        <li class="nav__items ">
                        <span className="navIcon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 8H8V4H4V8ZM10 20H14V16H10V20ZM8 20H4V16H8V20ZM4 14H8V10H4V14ZM14 14H10V10H14V14ZM16 4V8H20V4H16ZM14 8H10V4H14V8ZM16 14H20V10H16V14ZM20 20H16V16H20V20Z" fill="#666666"></path></svg>                            
                        </span>
                            <a href="">My Apps</a>
                        </li>

                    </ul>
                </nav>



                <div className="main">
                    <div className="welcomeContent">
                        <div className="miniLogo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M318 256c0 19-4 36-10 52-16 7-34 10-52 10-19 0-36-3-52-9-7-17-10-34-10-53 0-18 3-36 10-52 16-6 33-10 52-10 18 0 36 4 52 10 6 16 10 34 10 52zm182-41H355l102-102c-8-11-17-22-26-32-10-9-21-18-32-26L297 157V12c-13-2-27-3-41-3s-28 1-41 3v145L113 55c-12 8-22 17-32 26-10 10-19 21-27 32l102 102H12s-3 27-3 41 1 28 3 41h144L54 399c16 23 36 43 59 59l102-102v144c13 2 27 3 41 3s28-1 41-3V356l102 102c11-8 22-17 32-27 9-10 18-20 26-32L355 297h145c2-13 3-27 3-41s-1-28-3-41z"></path></svg></div>
                        <div className="welcomeText"><h1>Welcome to Zapier!</h1></div>
                    </div>
                    <section>
                        <div className="card">
                            <h2 className="title">Create your own workflow</h2>
                            <p className="para">Know exactly what you want to build? Select the apps you want to connect to start your custom setup.</p>
                            <div>
                                <div className="make-a-zap">
                                    <div className="inputGroup">
                                        <div className="label">Connect this app...</div>
                                        <Input id="inputBox" size="large" placeholder="Search for an app" prefix={<SearchOutlined />} />
                                    </div>
                                    <span className="iconContainer">
                                        <span className="plusIconContainer">
                                            <span className="plusIconWrapper">
                                                <svg className="plusIcon" width="30" height="30" viewBox="0 0 24 24" fill="#cccccc" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM13 13H17V11H13V7H11V11H7V13H11V17H13V13Z" fill="#cccccc"></path></svg>
                                            </span>
                                        </span>
                                    </span>
                                    <div className="inputGroup">
                                        <div className="label">with this one!</div>
                                        <Input id="inputBox" size="large" placeholder="Search for an app" prefix={<SearchOutlined />} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h2 className="listTitle">Recommended workflows for you</h2>
                        <ul className="list">
                            <li className="listItem">
                                <div className="listItemWrapper">
                                    <div className="listItemContent">
                                        <div className="images">
                                            <span className="imgWrapper first">
                                                <img src="https://zapier-images.imgix.net/storage/services/54f0bd6f9c31b757ab20d4c7058dc7c0.png?auto=format&ixlib=react-9.0.2&ar=undefined&fit=crop&h=28&w=28&q=50&dpr=1" alt="" />
                                            </span>
                                            <span className="imgWrapper second">
                                                <img src="https://zapier-images.imgix.net/storage/services/bb735e567f1a1e9e3b8b7241497c2d43.png?auto=format&ixlib=react-9.0.2&ar=undefined&fit=crop&h=28&w=28&q=50&dpr=1" alt="" />
                                            </span>
                                        </div>
                                        <div className="listItemText">
                                            <h2 className="listItemTitle">Save new Gmail attachments to Google Drive</h2>
                                            <p className="listItemPara">Gmail + Google Drive</p>
                                        </div>
                                    </div>
                                    <div className="tryLinkWrapper">
                                        <a href="" className="tryLink">Try it</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
