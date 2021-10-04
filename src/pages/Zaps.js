import React from 'react'
import { Row, Col, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'

function zaps() {
    return (
        <div id="zaps">
            <div>
                <Row>
                    <Col span={10} className="zaps">
                        <h1 className="heading">Zaps</h1>
                        <Input size="medium" placeholder="Search by App" prefix={<SearchOutlined />} />
                        <div className="privateFolder">
                            <div className="privateFoldersHeading">
                                <div><h4 className="title">Private Folders</h4></div>
                                <div>
                                    <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#666666"></path></svg>
                                    </span>
                                </div>
                            </div>
                            <div className="privateFolderListItem">
                                <div>Home</div>
                                <div>9</div>
                            </div>
                        </div>
                        <div className="sharedFolder">
                            <h4 className="title">Shared Folders</h4>
                            <img src="https://cdn.zapier.com/zapier/images/team-accounts/illustrations/v2/scene-high-five.svg" alt="" />
                            <div>Need to share your Zaps?</div>
                            <p>Start collaborating with your team faster with Zapier for Teams. Start your 14-day trial</p>
                        </div>
                        <div className="trash">
                            <div><a href="">Trash</a></div>
                            <div>0</div>
                        </div>
                    </Col>
                    <Col span={14} className="home">
                       <h2 className="mainHeading">Home</h2>
                       <div style={{position: 'relative'}}>
                            <div className="toolbar">
                                <div className="selectBox">
                                    <span className="checkbox">
                                        <input className="checkboxInput" type="checkbox" />
                                    </span>
                                </div>
                                <span className="select-arrow"></span>
                                <div><button className="trashBtn">Trash</button></div>
                                <div><button className="createBtn">Create Zap</button></div>
                            </div>
                        </div>    
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default zaps
