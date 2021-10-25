import React from 'react'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'

function ActionPopup() {
    return (
        <div className="actionContainer" id="actionPopup">
            <div className="actionHeader">
                <div className="actionTitle">
                    <div className="actionIcon">
                        <span>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.02002 12C2.02002 6.49002 6.49002 2.02002 12 2.02002C17.51 2.02002 21.98 6.49002 21.98 12C21.98 17.51 17.51 21.98 12 21.98C6.49002 21.98 2.02002 17.51 2.02002 12ZM11.48 13.74V20L16.35 10.26H13V4.00002L8.00002 13.74H11.48Z" fill="#ffffff"></path></svg>
                        </span>
                    </div>
                    <div className="actionTitleText">
                        <div>Action</div>
                        <div>An action is an event a Zap performs after it starts</div>
                    </div>
                </div>
                <div className="learnMore">
                    <button className="learnMoreBtn">Learn more</button>
                </div>
            </div>
            <div className="actionMain">
                <div className="actionGrid">
                    <div className="leftCol">
                        <div className="appEventHeading">
                            <div>
                                <span className="appEventIcon">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 8H8V4H4V8ZM10 20H14V16H10V20ZM8 20H4V16H8V20ZM4 14H8V10H4V14ZM14 14H10V10H14V14ZM16 4V8H20V4H16ZM14 8H10V4H14V8ZM16 14H20V10H16V14ZM20 20H16V16H20V20Z" fill="#ff4a00"></path></svg>
                                </span>
                            </div>
                            <div className="appEventTitleText">
                                <div>App Event</div>
                                <div className="titlePara">Do something in an app</div>
                            </div>
                        </div>
                        <div>
                            <Input id="inputBox" size="large" placeholder="Search by App" prefix={<SearchOutlined />} />

                        </div>
                    </div>
                    <div className="rightCol">
                        <button className="optionsButton">
                            <div className="buttonContent">
                                <div className="buttonIcon">
                                    <img src="https://zapier-images.imgix.net/storage/services/a3c21b5705839bf5cc398491792fde26.png?auto=format&fit=crop&h=50&ixlib=react-9.0.2&w=50&ar=undefined&h=40&w=40&q=75&dpr=1" alt="" />
                                </div>
                                <div className="buttonText">
                                    <div>Filter</div>
                                    <div>Only process when condition is met</div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ActionPopup
