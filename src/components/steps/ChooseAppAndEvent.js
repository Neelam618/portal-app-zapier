import React, { useState, useRef } from 'react'
import { Modal, Select, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import ChooseAccount from './ChooseAccount';
import SetupTrigger from './SetupTrigger';

const apps = [
    {
        app: "Google Calender", appIcon: "https://zapier-images.imgix.net/storage/services/62c82a7958c6c29736f17d0495b6635c.png?auto=format&fit=crop&h=64&ixlib=react-9.0.2&w=64&ar=undefined&h=21&w=21&q=50&dpr=1"
    },
    {
        app: "Google Contacts", appIcon: "https://zapier-images.imgix.net/storage/services/1508661b55cd3c5ad1787303b0f58c99.png?auto=format&fit=crop&h=64&ixlib=react-9.0.2&w=64&ar=undefined&h=21&w=21&q=50&dpr=1"
    },
    {
        app: "Google Docs", appIcon: "https://zapier-images.imgix.net/storage/services/ae42824b58d556d36b5e5b217377fc5e.png?auto=format&fit=crop&h=64&ixlib=react-9.0.2&w=64&ar=undefined&h=21&w=21&q=50&dpr=1"
    }
]

function ChooseAppAndEvent(props) {

    const [showEditOptions, setShowEditOptions] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    const [isChooseAppEventCollapsed, setIsChooseAppEventCollapsed] = useState(false)
    const [isChooseAccountCollapsed, setIsChooseAccountCollapsed] = useState(false)
    const [isSetupTriggerCollapsed, setIsSetupTriggerCollapsed] = useState(false)
    const [isTestTriggerCollapsed, setIsTestTriggerCollapsed] = useState(false)

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [showDropdown, setshowDropdown] = useState(false)
    const [option, setOption] = useState()
    const [showChooseAppAndEventStep, setShowChooseAppAndEventStep] = useState(false)

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

    const { Option } = Select;

    function openChooseAppAndEventStep() {
        setShowChooseAppAndEventStep(true)
    }

    return (
        <>
            <div id='chooseAppAndEventStepContainer'>
                <div className='titleContainer'>
                    <div className='triggerAppIcon'>
                        <img width="40" src="https://zapier-images.imgix.net/storage/services/62c82a7958c6c29736f17d0495b6635c.128x128.png?auto=format%2Ccompress&ixlib=python-3.0.0&q=50" alt="" />
                    </div>
                    <div class="triggerHeadingContainer">
                        <div className="triggerTitle">Trigger</div>
                        <div className="triggerSubTitle">1. New Event in Google Calendar</div>
                    </div>
                </div>
                <div className="chooseAppAndEventContent">
                    <div className='stepContentTitle'>Choose App & event</div>
                    <div className="chooseAppContainer" onClick={showModal}>
                        <div className="selectedApp">
                            <img className="selectedAppIcon" src="https://zapier-images.imgix.net/storage/services/6cf3f5a461feadfba7abc93c4c395b33_2.128x128.png?auto=format%2Ccompress&ixlib=python-3.0.0&q=50" alt="" />
                            <span className="selectedAppName">App name</span>
                        </div>
                        <div className="changeText">Change</div>
                    </div>
                    <Modal centered title="Change Trigger" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <div className="actionAndTriggerMain">
                            <div className="actionAndTriggerGrid">
                                <div className="leftCol">
                                    <div className="appEventHeading">
                                        <div>
                                            <span className="appEventIcon">
                                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 8H8V4H4V8ZM10 20H14V16H10V20ZM8 20H4V16H8V20ZM4 14H8V10H4V14ZM14 14H10V10H14V14ZM16 4V8H20V4H16ZM14 8H10V4H14V8ZM16 14H20V10H16V14ZM20 20H16V16H20V20Z" fill="#ff4a00"></path></svg>
                                            </span>
                                        </div>
                                        <div className="appEventTitleText">
                                            <div className="triggerSubTitle">App Event</div>
                                            <div className="titlePara">Start the workflow when something happens in an app</div>
                                        </div>
                                    </div>
                                    <div>
                                        <Input id="inputBox" size="large" placeholder="Search apps..." prefix={<SearchOutlined />} />
                                    </div>
                                    <div className="triggerAppsContainer">
                                        {
                                            apps.map((appItem) => {
                                                return (
                                                    <div className="triggerAppWrapper" onClick={openChooseAppAndEventStep}>
                                                        <div className="triggerAppIcon">
                                                            <img width="21" src={appItem.appIcon} alt="" />
                                                        </div>
                                                        <div className="triggerAppName">{appItem.app}</div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="rightCol">
                                    <button className="optionsButton">
                                        <div className="buttonContent">
                                            <div className="buttonIcon">
                                                <img width="40" src="https://zapier-images.imgix.net/storage/services/9abbda159e8d9cec0e5eaa8ff1fd5205.png?auto=format&fit=crop&h=50&ixlib=react-9.0.2&w=50&ar=undefined&h=40&w=40&q=75&dpr=1" alt="" />
                                            </div>
                                            <div className="buttonText">
                                                <div className="optionsTitle">Schedule</div>
                                                <div>Start the workflow every day, hour, or a custom interval</div>
                                            </div>
                                        </div>
                                    </button>
                                    <button className="optionsButton">
                                        <div className="buttonContent">
                                            <div className="buttonIcon">
                                                <img width="40" src="https://zapier-images.imgix.net/storage/services/603433f546bb15670c1df9309b198816.png?auto=format&fit=crop&h=50&ixlib=react-9.0.2&w=50&ar=undefined&h=40&w=40&q=75&dpr=1" alt="" />                                    </div>
                                            <div className="buttonText">
                                                <div className="optionsTitle">RSS</div>
                                                <div>Start the workflow when an RSS feed updates</div>
                                            </div>
                                        </div>
                                    </button>
                                    <button className="optionsButton">
                                        <div className="buttonContent">
                                            <div className="buttonIcon">
                                                <img width="40" src="https://zapier-images.imgix.net/storage/services/2b3416ebc79b3fb31c014a3a149633c0.png?auto=format&fit=crop&h=50&ixlib=react-9.0.2&w=50&ar=undefined&h=40&w=40&q=75&dpr=1" alt="" />
                                            </div>
                                            <div className="buttonText">
                                                <div className="optionsTitle">Webhook</div>
                                                <div>Start the workflow when another app sends a webhook</div>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </Modal>
                    <div className="chooseEventContainer">
                        <label className="eventLabel">Trigger Event
                            <span className="requiredText">required</span>
                        </label>
                        <div className="chooseEventDropdownContainer">
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
                </div>
                <ChooseAccount />
                <SetupTrigger />

            </div>
        </>
    )
}

export default ChooseAppAndEvent
