import React, { useState, useRef } from 'react'
import { Modal, Select, Input } from 'antd';

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

    return (
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
            </div>

        </div>
    )
}

export default ChooseAppAndEvent
