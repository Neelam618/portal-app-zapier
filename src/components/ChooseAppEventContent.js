import React, { useState } from 'react'
import { Modal, Select } from 'antd';


function ChooseAppEventContent() {

    const [selectInputVal, setSelectInputValue] = useState("")
    const [isModalVisible, setIsModalVisible] = useState(false);
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

    // const handleChange = (e) => {
    //    setSelectInputValue(e.target.value)
    // }

    function selectHandleChange(value) {
        setOption(value)
    }
    const { Option } = Select;
    return (
        <>
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
                {/* <div className="chooseEventInputWrapper">
                                       <input className="chooseEventInput" type="text" value={selectInputVal} onChange={handleChange} />
                                       <div className="chooseEventArrows">
                                          <span>
                                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.199 19.6172C11.5989 20.1522 12.4009 20.1522 12.8008 19.6172L15.8048 15.5987C16.2977 14.9393 15.8272 14 15.0038 14H8.99595C8.17264 14 7.70206 14.9393 8.19501 15.5987L11.199 19.6172Z" fill="#666666"></path><path d="M11.199 4.40126C11.5989 3.86625 12.4009 3.86625 12.8008 4.40126L15.8048 8.41974C16.2977 9.07917 15.8272 10.0185 15.0038 10.0185H8.99595C8.17264 10.0185 7.70206 9.07917 8.19501 8.41974L11.199 4.40126Z" fill="#666666"></path></svg>
                                          </span>
                                       </div>
                                    </div> */}
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
            <button className="continueBtn">Continue</button>
        </>
    )
}

export default ChooseAppEventContent
