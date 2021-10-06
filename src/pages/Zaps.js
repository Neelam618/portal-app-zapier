import React from 'react'
import { Row, Col, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { Switch } from 'antd';
import { Tooltip, Button } from 'antd';
import { Menu, Dropdown } from 'antd';
const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item
            </a>
        </Menu.Item>
    </Menu>
);

function zaps() {
    return (
        <div id="zaps">
            <div>
                <Row>
                    <Col lg={8} className="zaps">
                        <h1 className="heading">Workflows</h1>
                        <Input size="medium" placeholder="Filter workflows" prefix={<SearchOutlined />} />
                        <div className="privateFolder">
                            <div className="privateFoldersHeading">
                                <div><h4 className="title">Private Folders</h4></div>
                                <div>
                                    <a href="">
                                        <svg className="plusSvg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#666666"></path></svg>
                                    </a>
                                </div>
                            </div>
                            <div className="privateFolderListItem">
                                <div><a href="" className="folderLink">Home</a></div>
                                <div className="folderCount">9</div>
                            </div>
                        </div>
                        <div className="sharedFolder">
                            <h4 className="title">Shared Folders</h4>
                            <img src="https://cdn.zapier.com/zapier/images/team-accounts/illustrations/v2/scene-high-five.svg" alt="" />
                            <div className="comingSoonTitle">Need to share your Workflows?</div>
                            <p className="comingSoonContent">Start collaborating with your team faster with Zapier for Teams. <a href="" className="trialLink">Start your 14-day trial</a></p>
                        </div>
                        <div className="trash">
                            <div><a href="" className="trashLink">Trash</a></div>
                            <div className="trashCount">0</div>
                        </div>
                    </Col>
                    <Col lg={16} className="home">
                        <h2 className="mainHeading">Home</h2>
                        <div style={{ position: 'relative' }}>
                            <div className="toolbar">
                                <div className="selectBox">
                                    <span className="checkbox">
                                        <input className="checkboxInput" type="checkbox" />
                                    </span>
                                </div>
                                {/* <span className="select-arrow"></span> */}
                                <Dropdown trigger="click" overlay={menu} placement="bottomLeft">
                                    <Button>
                                        <span>
                                            <svg width="15px" height="15px" viewBox="0 0 512 512"><path fill="#969ea2" d="M256 307l184-184c16-16 41-16 57 0s16 41 0 57L288 389c-9 9-21 13-32 12-11 1-23-3-32-12L15 180c-16-16-16-41 0-57s41-16 57 0z"></path></svg>
                                        </span>
                                    </Button>
                                </Dropdown>
                                <div><button className="trashBtn">Trash</button></div>
                                <div><button className="createBtn">Create Workflow</button></div>
                            </div>
                        </div>
                        <div className="zapList">
                            <div className="zapItem">
                                <div className="zapCheckbox">
                                    <label className="selectZap">
                                        <input className="checkboxInput" type="checkbox" />
                                    </label>
                                </div>
                                <div className="zap">
                                    <div style={{ position: 'relative' }}>
                                        <div className="dashboardZap">
                                            <div className="miniZap">
                                                <div className="zapWrapper">
                                                    <div className="zapLogos">
                                                        <ol className="zapIcons">
                                                            <li className="zapIconsStep">
                                                                <div className="zapIconWrap">
                                                                    <div className="zapIcon"></div>
                                                                </div>
                                                                <span className="caretIcon">
                                                                    <svg viewBox="0 0 512 512"><path d="M71 455c0 35 39 55 67 35l285-199c24-17 24-53 0-70L138 22c-28-20-67 0-67 35z"></path></svg>
                                                                </span>
                                                            </li>
                                                            <li className="zapIconsStep">
                                                                <div className="zapIconWrap">
                                                                    <div className="zapIcon-number">2</div>
                                                                </div>
                                                                <span className="caretIcon">
                                                                    <svg viewBox="0 0 512 512"><path d="M71 455c0 35 39 55 67 35l285-199c24-17 24-53 0-70L138 22c-28-20-67 0-67 35z"></path></svg>
                                                                </span>
                                                            </li>
                                                            <li className="zapIconsStep">
                                                                <div className="zapIconWrap">
                                                                    <div className="zapIcon"></div>
                                                                </div>
                                                            </li>
                                                        </ol>
                                                    </div>
                                                    <div className="zapTitle">
                                                        <span className="zapTitleText">Name your workflow</span>
                                                    </div>
                                                    <div className="zapControls">
                                                        <div className="zapToggle">
                                                            <Switch checkedChildren="ON" unCheckedChildren="OFF" defaultUnchecked />
                                                        </div>
                                                        <div className="zapTooltip">
                                                            <Tooltip placement="bottom" title="View workflow details">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 17V11H13V17H11ZM11 7V9H13V7H11Z" fill="#666666"></path></svg>
                                                            </Tooltip>
                                                        </div>
                                                    </div>
                                                    <div className="zapDropdown">
                                                        <Dropdown trigger="click" overlay={menu} placement="bottomLeft">
                                                            <Button>
                                                                <span>
                                                                    <svg width="15px" height="15px" viewBox="0 0 512 512"><path fill="#969ea2" d="M256 307l184-184c16-16 41-16 57 0s16 41 0 57L288 389c-9 9-21 13-32 12-11 1-23-3-32-12L15 180c-16-16-16-41 0-57s41-16 57 0z"></path></svg>
                                                                </span>
                                                            </Button>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default zaps
