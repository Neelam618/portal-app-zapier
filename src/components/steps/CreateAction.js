import React, {useRef} from 'react'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import useOnClickOutside from 'use-onclickoutside'

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


function CreateAction(props) {
    const ref = useRef(null)
    useOnClickOutside(ref, () => props.setShowActionPopup(false))

    return (
        <div className="actionContainer" ref={ref}>
            <div className="actionAndTriggerHeader">
                <div className="actionAndTriggerTitleContainer">
                    <div className="actionAndTriggerIcon">
                        <span>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.02002 12C2.02002 6.49002 6.49002 2.02002 12 2.02002C17.51 2.02002 21.98 6.49002 21.98 12C21.98 17.51 17.51 21.98 12 21.98C6.49002 21.98 2.02002 17.51 2.02002 12ZM11.48 13.74V20L16.35 10.26H13V4.00002L8.00002 13.74H11.48Z" fill="#ffffff"></path></svg>
                        </span>
                    </div>
                    <div className="actionAndTriggerTitleText">
                        <div className="actionAndTriggerTitle">Action</div>
                        <div className="actioAndTriggerPara">An action is an event a Zap performs after it starts</div>
                    </div>
                </div>
                <div className="learnMore">
                    <button className="learnMoreBtn">Learn more</button>
                </div>
            </div>
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
                                <div>App Event</div>
                                <div className="titlePara">Do something in an app</div>
                            </div>
                        </div>
                        <div>
                            <Input id="inputBox" size="large" placeholder="Search by App" prefix={<SearchOutlined />} />
                            <div className="triggerAppsContainer">
                                {
                                    apps.map((appItem) => {
                                        return (
                                        <div className="triggerAppWrapper">
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
                        <button className="optionsButton">
                            <div className="buttonContent">
                                <div className="buttonIcon">
                                    <img src="https://zapier-images.imgix.net/storage/services//bcc9b8c3b870e129fb7c869ec686ab90.png?auto=format&fit=crop&h=50&ixlib=react-9.0.2&w=50&ar=undefined&h=40&w=40&q=75&dpr=1" alt="" />
                                </div>
                                <div className="buttonText">
                                    <div>Format</div>
                                    <div>Change how incoming data is changed</div>
                                </div>
                            </div>
                        </button>
                        <button className="optionsButton">
                            <div className="buttonContent">
                                <div className="buttonIcon">
                                    <img src="https://zapier-images.imgix.net/storage/services/2b3416ebc79b3fb31c014a3a149633c0.png?auto=format&fit=crop&h=50&ixlib=react-9.0.2&w=50&ar=undefined&h=40&w=40&q=75&dpr=1" alt="" />
                                </div>
                                <div className="buttonText">
                                    <div>Delay</div>
                                    <div>Pause actions for a certain amount of time</div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CreateAction
