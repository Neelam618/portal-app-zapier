import React from 'react'
import { Row, Col, Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { Menu, Dropdown, Tooltip, Checkbox } from 'antd';
import WorkflowItem from '../components/WorkflowItem';
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
function Zaps() {
    let disabled;
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
                        <h2 className="subHeading">Home</h2>
                        <div style={{ position: 'relative' }}>
                            <div className="toolbar">
                                <Checkbox className="selectBox"/>
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
                          <WorkflowItem disabled={false}/>
                          <WorkflowItem disabled={false}/>
                        </div>
                        <h2 className="subHeading">Drafts</h2>
                        <Tooltip placement="bottom" title="View workflow details">
                            <WorkflowItem disabled={true}/>
                        </Tooltip>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Zaps
