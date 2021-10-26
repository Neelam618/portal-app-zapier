import React, {useState} from 'react'
import { Modal, Select } from 'antd';

function Gmail() {

    const [isVisible, setIsVisible] = useState(false)
    const [isChooseAppEventCollapsed, setIsChooseAppEventCollapsed] = useState(false)
    const [isChooseAccountCollapsed, setIsChooseAccountCollapsed] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [option, setOption] = useState() 


    function showAccordion() {
        setIsVisible(true)
    }

    function showChooseAppEventContent() {
        setIsChooseAppEventCollapsed(!isChooseAppEventCollapsed)
     }
     function showChooseAccountContent() {
        setIsChooseAccountCollapsed(!isChooseAccountCollapsed)
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
     
     const { Option } = Select;


    return (
        <div className="listItem" onClick={showAccordion}>
            <div className="listItemheader">
                <div className="listContent">
                    <div className="iconSet">
                        <div className="appIcon">
                            <img className="appIconImg" src="https://zapier-images.imgix.net/storage/services/54f0bd6f9c31b757ab20d4c7058dc7c0.128x128.png?auto=format%2Ccompress&ixlib=python-3.0.0&q=50" alt="" />
                        </div>
                        <div className="statusIcon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 17V15H13V17H11ZM11 7V13H13V7H11Z" fill="#666666"></path></svg>
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
                    <button className="editBtn">Edit</button>
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
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM5 12L10 17L19 8L17.59 6.58L10 14.17L6.41 10.59L5 12Z" fill="#666666"></path></svg>
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
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 8H8V4H4V8ZM10 20H14V16H10V20ZM8 20H4V16H8V20ZM4 14H8V10H4V14ZM14 14H10V10H14V14ZM16 4V8H20V4H16ZM14 8H10V4H14V8ZM16 14H20V10H16V14ZM20 20H16V16H20V20Z" fill="#666666"></path></svg>
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
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM5 12L10 17L19 8L17.59 6.58L10 14.17L6.41 10.59L5 12Z" fill="#666666"></path></svg>
                            </div>
                        </div>
                        {
                            isChooseAccountCollapsed ?
                                <div className="subListItemContent">
                                    <label htmlFor="">Gmail account</label>
                                    <input type="text" />
                                </div> : null
                        }
                    </div> : null
            }
        </div>
    )
}

export default Gmail
