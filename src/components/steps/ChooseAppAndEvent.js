import React, { useState, useRef } from 'react'
import { Modal, Select, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import SetupAction from './SetupAction';
import SetupTrigger from './SetupTrigger';
import ChooseAccount from './ChooseAccount'

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

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [option, setOption] = useState()
    const [showChooseAppAndEventStep, setShowChooseAppAndEventStep] = useState(false)
    const [showNextStep, setShowNextStep] = useState(false)
    const [showAccordionContent, setShowAccordionContent] = useState(false)

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

    function openChooseAppAndEventStep(appName, appId) {
        setShowChooseAppAndEventStep(true)
        props.setTriggerEventList(props.triggerEventList)
        props.setSelectedApp(appName)
        setIsModalVisible(false)

         fetch('http://143.244.142.223:8005/app/v1/public/task_list/' + appId, {
            // mode: 'no-cors',
            // method: 'GET',
            // headers: {
            //   'Content-Type': 'application/json'
            // }

        })
            .then((response) => {
                response.json().then((taskList) => {
                    // Work with JSON taskList here
                    console.log(taskList)
                    props.setTriggerEventList(taskList)
                })
            })
            .catch((err) => {
                // Do something for an error here
                console.log(err)
            })
    }

    function openNextStepAndCloseCurrentStep() {
        setShowNextStep(true)
        setShowAccordionContent(false)
    }

    function openAccordionContent() {
        setShowAccordionContent(true)
        setShowNextStep(false)
    }
    let nextComponent;
    if (props.step == "trigger") {
        nextComponent = <ChooseAccount step="trigger" />
    }
    else if (props.step == "action") {
        nextComponent = <ChooseAccount step="action" />
    }

    return (
        <>
            <div id='chooseAppAndEventStepContainer'>
                <div className='titleContainer'>
                    <div className='triggerAppIcon'>
                        <img width="40" src="https://zapier-images.imgix.net/storage/services/62c82a7958c6c29736f17d0495b6635c.128x128.png?auto=format%2Ccompress&ixlib=python-3.0.0&q=50" alt="" />
                    </div>
                    <div class="triggerHeadingContainer">
                        <div className="triggerTitle">
                            {props.step == "trigger" ? <div>Trigger</div> : props.step == "action" ? <div>Action</div> : null}
                        </div>
                        <div className="triggerSubTitle">1. New Event in Google Calendar</div>
                    </div>
                </div>
                {
                    showNextStep && !showAccordionContent ?
                        <div className="accordionItem" onClick={openAccordionContent}>
                            <div className="accordionTitle">
                                <span className="accordionArrow">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59009L12 13.1701L16.59 8.59009L18 10.0001L12 16.0001L6 10.0001L7.41 8.59009Z" fill="#666666"></path></svg>
                                </span>
                                Choose app & event
                            </div>
                            <div>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM5 12L10 17L19 8L17.59 6.58L10 14.17L6.41 10.59L5 12Z" fill="#666666"></path></svg>
                            </div>
                        </div> :

                        <div className="accordionContent">
                            <div className='stepContentTitle'>Choose App & event</div>
                            <div className="chooseAppContainer" onClick={showModal}>
                                <div className="selectedApp">
                                    <img className="selectedAppIcon" src="https://zapier-images.imgix.net/storage/services/6cf3f5a461feadfba7abc93c4c395b33_2.128x128.png?auto=format%2Ccompress&ixlib=python-3.0.0&q=50" alt="" />
                                    <span className="selectedAppName">{props.selectedApp}</span>
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
                                                    props.appList.map((appItem) => {
                                                        return (
                                                            <div className="triggerAppWrapper" onClick={() => openChooseAppAndEventStep(appItem.name, appItem.id)}>
                                                                <div className="triggerAppIcon">
                                                                    <img width="21" src="" alt="" />
                                                                </div>
                                                                <div className="triggerAppName">{appItem.name}</div>
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
                                    <Select className="selectListItem" style={{ width: "100%" }} onChange={selectHandleChange}>
                                        {
                                            props.triggerEventList.map((triggerEvent) => {
                                                return <Option value={triggerEvent.id}>
                                                    <div className="selectListItemTitle">{triggerEvent.name}</div>
                                                    {/* <p className="selectListItemPara">Triggers when a new message is posted to any public channel</p> */}
                                                </Option>
                                            })
                                        }

                                    </Select>
                                </div>
                                <p className="eventInputInfo">This is what starts the workflow.</p>
                                <button className="continueBtn" onClick={openNextStepAndCloseCurrentStep}>Continue</button>
                            </div>
                        </div>
                }
                {
                    showNextStep ? nextComponent : null
                }
            </div>
        </>
    )
}

export default ChooseAppAndEvent
