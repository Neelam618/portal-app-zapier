import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Row, Col, Input } from 'antd';

function WorkflowsSection() {
    return (
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
    )
}

export default WorkflowsSection
