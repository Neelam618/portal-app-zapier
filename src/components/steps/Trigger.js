import React, { useState, useRef } from 'react'
import { Modal, Select, Input } from 'antd';
import useOnClickOutside from 'use-onclickoutside'
import { Radio } from 'antd';

function Gmail() {

    const [isVisible, setIsVisible] = useState(false)
    const [isChooseAppEventCollapsed, setIsChooseAppEventCollapsed] = useState(false)
    const [isChooseAccountCollapsed, setIsChooseAccountCollapsed] = useState(false)
    const [isSetupTriggerCollapsed, setIsSetupTriggerCollapsed] = useState(false)
    const [isTestTriggerCollapsed, setIsTestTriggerCollapsed] = useState(false)

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [showDropdown, setshowDropdown] = useState(false)
    const [option, setOption] = useState()
    const [showEditOptions, setShowEditOptions] = useState(false)

    const ref = useRef(null)
    useOnClickOutside(ref, closeOnClickOutside)

    function closeOnClickOutside() {
        setshowDropdown(false)
    }

    function showAccordion() {
        setIsVisible(true)
        setShowEditOptions(true)
    }

    function showChooseAppEventContent() {
        setIsChooseAppEventCollapsed(!isChooseAppEventCollapsed)
    }
    function showChooseAccountContent() {
        setIsChooseAccountCollapsed(!isChooseAccountCollapsed)
    }

    function showSetupTriggerContent() {
        setIsSetupTriggerCollapsed(!isSetupTriggerCollapsed)
    }

    function showTestTriggerContent() {
        setIsTestTriggerCollapsed(!isTestTriggerCollapsed)
    }

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    function selectHandleChange(value) {
        setOption(value)
    }

    function showAccountOptions() {
        setshowDropdown(!showDropdown)
    }

    const { Option } = Select;

    return (
        <>
            <div className="listItem" onClick={showAccordion} id="gmail">
                <div className="listItemheader">
                    <div className="listContent">
                        <div className="iconSet">
                            <div className="appIcon">
                                <img className="appIconImg" src="https://zapier-images.imgix.net/storage/services/54f0bd6f9c31b757ab20d4c7058dc7c0.128x128.png?auto=format%2Ccompress&ixlib=python-3.0.0&q=50" alt="" />
                            </div>
                            <div className="statusIcon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 17V15H13V17H11ZM11 7V13H13V7H11Z" fill="#666666"></path></svg>
                            </div>
                        </div>
                        <div className="listHeading">
                            <span className="listSubHeading">Trigger</span>
                            <div className="title">
                                1
                                .
                                Trigger title
                            </div>
                        </div>
                    </div>
                    <div>
                        {
                            showEditOptions ? <div>...</div> :
                                <button className="editBtn">Edit</button>
                        }
                    </div>
                </div>
                {
                    isVisible ?
                        <div className="subListItemExtended">
                            <div className="subListItem" onClick={showChooseAppEventContent}>
                                <div className="subListItemTitle">
                                    <span className="arrow">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59009L12 13.1701L16.59 8.59009L18 10.0001L12 16.0001L6 10.0001L7.41 8.59009Z" fill="#666666"></path></svg>
                                    </span>
                                    Choose app & event
                                </div>
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM5 12L10 17L19 8L17.59 6.58L10 14.17L6.41 10.59L5 12Z" fill="#666666"></path></svg>
                                </div>
                            </div>
                            {
                                isChooseAppEventCollapsed ?
                                    <div className="subListItemContent">
                                        <div className="chooseAppContainer" onClick={showModal}>
                                            <div className="selectedApp">
                                                <img className="selectedAppIcon" src="https://zapier-images.imgix.net/storage/services/6cf3f5a461feadfba7abc93c4c395b33_2.128x128.png?auto=format%2Ccompress&ixlib=python-3.0.0&q=50" alt="" />
                                                <span className="selectedAppName">App name</span>
                                            </div>
                                            <div className="changeText">Change</div>
                                        </div>
                                        <Modal title="Change Trigger" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                            <div className="modalGrid">
                                                <div className="leftCol">
                                                    <div className="modalContentHeading">
                                                        <div>
                                                            <span className="modalHeadingIcon">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4 8H8V4H4V8ZM10 20H14V16H10V20ZM8 20H4V16H8V20ZM4 14H8V10H4V14ZM14 14H10V10H14V14ZM16 4V8H20V4H16ZM14 8H10V4H14V8ZM16 14H20V10H16V14ZM20 20H16V16H20V20Z" fill="#666666"></path></svg>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <span>App Event</span>
                                                            </div>
                                                            <div>
                                                                <span className="titlePara">Start the Zap when something happens in an app</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Modal>
                                        <div className="chooseEventContainer">
                                            <label className="eventLabel">Trigger Event
                                                <span className="requiredText">required</span>
                                            </label>
                                            <div className="selectDropdownContainer">
                                                <Select className="selectListItem" defaultValue="1" style={{ width: "100%" }} onChange={selectHandleChange}>
                                                    <Option value="1">
                                                        <div className="selectListItemTitle">New Public Message Posted Anywhere</div>
                                                        <p className="selectListItemPara">Triggers when a new message is posted to any public channel</p>
                                                    </Option>
                                                    <Option value="2">
                                                        <div className="selectListItemTitle">New Public Message Posted Anywhere 2</div>
                                                        <p className="selectListItemPara">Triggers when a new message is posted to any public channel</p>
                                                    </Option>
                                                </Select>
                                            </div>
                                            <p className="eventInputInfo">This is what starts the workflow.</p>
                                            <button className="continueBtn">Continue</button>
                                        </div>
                                    </div> : null
                            }
                            <div className="subListItem" onClick={showChooseAccountContent}>
                                <div className="subListItemTitle">
                                    <span className="arrow">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59009L12 13.1701L16.59 8.59009L18 10.0001L12 16.0001L6 10.0001L7.41 8.59009Z" fill="#666666"></path></svg>
                                    </span>
                                    Choose account
                                </div>
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM5 12L10 17L19 8L17.59 6.58L10 14.17L6.41 10.59L5 12Z" fill="#666666"></path></svg>
                                </div>
                            </div>
                            {
                                isChooseAccountCollapsed ?
                                    <div className="subListItemContent">
                                        <label htmlFor="">Gmail account: <span>(required)</span></label>
                                        <div>
                                            <div className="chooseAccountContainer">
                                                <div className="chooseAccountIcon">
                                                    <img width="20px" src="https://zapier-images.imgix.net/storage/services/54f0bd6f9c31b757ab20d4c7058dc7c0.128x128.png?auto=format%2Ccompress&ixlib=python-3.0.0&q=50" alt="" />
                                                </div>
                                                <Select defaultValue="Choose Account" style={{ width: "100%" }}>
                                                    <Option value="email1">Gmail emailId@gmail.com</Option>
                                                </Select>
                                            </div>

                                        </div>
                                        <p className="chooseAccountInfo">Gmail is a secure partner with Zapier. Your credentials are encrypted & can be removed at any time.</p>
                                        <button className="continueBtn">Continue</button>
                                    </div> : null
                            }

                            <div className="subListItem" onClick={showSetupTriggerContent}>
                                <div className="subListItemTitle">
                                    <span className="arrow">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59009L12 13.1701L16.59 8.59009L18 10.0001L12 16.0001L6 10.0001L7.41 8.59009Z" fill="#666666"></path></svg>
                                    </span>
                                    Set up trigger
                                </div>
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM5 12L10 17L19 8L17.59 6.58L10 14.17L6.41 10.59L5 12Z" fill="#666666"></path></svg>
                                </div>
                            </div>
                            {
                                isSetupTriggerCollapsed ?
                                    <div className="subListItemContent">
                                        <label htmlFor="">Label/Mailbox</label>
                                        <div>
                                            <div className="chooseAccountContainer">
                                                <div className="chooseAccountIcon">
                                                    <img width="20px" src="https://zapier-images.imgix.net/storage/services/54f0bd6f9c31b757ab20d4c7058dc7c0.128x128.png?auto=format%2Ccompress&ixlib=python-3.0.0&q=50" alt="" />
                                                </div>
                                                <Select defaultValue="Inbox and All Labels" style={{ width: "100%" }}>
                                                    <Option value="chat">Chat</Option>
                                                    <Option value="sent">Sent</Option>
                                                    <Option value="inbox">Inbox</Option>
                                                    <Option value="imp">Important</Option>
                                                    <Option value="trash">Trash</Option>
                                                    <Option value="draft">Draft</Option>
                                                    <Option value="span">Span</Option>
                                                </Select>
                                            </div>
                                        </div>
                                        <p className="chooseAccountInfo">Gmail is a secure partner with Zapier. Your credentials are encrypted & can be removed at any time.</p>
                                        <label htmlFor="">Search String</label>
                                        <Input placeholder="Enter text..." />
                                        <p>This works the same as the search bar you see in Gmail. For example: from:amy OR from:david or subject:dinner label:my-family</p>
                                        <button>Refresh fields</button>
                                        <button className="continueBtn">Continue</button>
                                    </div> : null
                            }

                            <div className="subListItem" onClick={showTestTriggerContent}>
                                <div className="subListItemTitle">
                                    <span className="arrow">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59009L12 13.1701L16.59 8.59009L18 10.0001L12 16.0001L6 10.0001L7.41 8.59009Z" fill="#666666"></path></svg>
                                    </span>
                                    Test trigger
                                </div>
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM5 12L10 17L19 8L17.59 6.58L10 14.17L6.41 10.59L5 12Z" fill="#666666"></path></svg>
                                </div>
                            </div>
                            {
                                isTestTriggerCollapsed ?
                                    <div>
                                        <div className="testTriggerIcons">
                                            <div className="appIcon">
                                                <img width="40" src="https://zapier-images.imgix.net/storage/services/54f0bd6f9c31b757ab20d4c7058dc7c0.128x128.png?auto=format%2Ccompress&ixlib=python-3.0.0&q=50" alt="" />
                                            </div>
                                            <div>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="#666666"></path></svg>
                                            </div>
                                            <div className="workflowIcon">
                                                <svg width="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M318 256c0 19-4 36-10 52-16 7-34 10-52 10-19 0-36-3-52-9-7-17-10-34-10-53 0-18 3-36 10-52 16-6 33-10 52-10 18 0 36 4 52 10 6 16 10 34 10 52zm182-41H355l102-102c-8-11-17-22-26-32-10-9-21-18-32-26L297 157V12c-13-2-27-3-41-3s-28 1-41 3v145L113 55c-12 8-22 17-32 26-10 10-19 21-27 32l102 102H12s-3 27-3 41 1 28 3 41h144L54 399c16 23 36 43 59 59l102-102v144c13 2 27 3 41 3s28-1 41-3V356l102 102c11-8 22-17 32-27 9-10 18-20 26-32L355 297h145c2-13 3-27 3-41s-1-28-3-41z" fill="#fd7622"></path></svg>
                                            </div>
                                        </div>
                                        <p className="testTriggerTitle">Test your trigger</p>
                                        <div className="testTriggerPara">We'll find a recent attachment in your Gmail account <span>Gmail email@gmail.com</span> to confirm that the right account is connected and your trigger is set up correctly.</div>
                                        <div className="testTriggerBtnWrapper">
                                            <button className="testTriggerBtn">Test Trigger</button>
                                        </div>
                                    </div> : null

                            }

                        </div> : null
                }
            </div>
        </>
    )
}

export default Gmail
