import React, { useRef, useState, useEffect } from 'react'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import useOnClickOutside from 'use-onclickoutside'
import ChooseAppAndEvent from './ChooseAppAndEvent'
import { useUserContext } from '../../context/UserContext';

function CreateAction(props) {
    const [appList, setAppList] = useState([])
    const [selectedApp, setSelectedApp] = useState()
    const [triggerEventList, setTriggerEventList] = useState([])
    const [showChooseAppAndEventStep, setShowChooseAppAndEventStep] = useState(false)
    const { user } = useUserContext()

    useEffect(() => {
        setShowChooseAppAndEventStep(false)
        setSelectedApp()

        fetch('http://143.244.142.223:8005/v1/apps/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + user.accessToken,
            }
        })
            .then((response) => {
                response.json().then((appList) => {
                    // Work with JSON appList here
                    console.log(appList)
                    setAppList(appList)
                })
            })
            .catch((err) => {
                // Do something for an error here
                console.log(err)
            })
    }, [])

    const ref = useRef(null)
    useOnClickOutside(ref, () => props.setShowActionPopup(false))

    function openChooseAppAndEventStep() {
        setShowChooseAppAndEventStep(true)
    }

    function openChooseAppAndEventStep(appName, appId) {
        setShowChooseAppAndEventStep(true)
        setSelectedApp(appName)

        fetch('http://143.244.142.223:8005/v1/partner/app/' + appId + '/tasks', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + user.accessToken,
            }
        })
            .then((response) => {
                response.json().then((taskList) => {
                    // Work with JSON taskList here
                    console.log("taskList", taskList)
                    setTriggerEventList(taskList)
                })
            })
            .catch((err) => {
                // Do something for an error here
                console.log(err)
            })
    }

    return (
        <>
            {
                showChooseAppAndEventStep ? <ChooseAppAndEvent step="action" selectedApp={selectedApp} appList={appList} setSelectedApp={setSelectedApp} triggerEventList={triggerEventList} setTriggerEventList={setTriggerEventList} /> :

                    <div className="actionContainer" ref={props.step2CreateActionIsOpen ? props.ref : ref}>
                        <div className="actionAndTriggerHeader">
                            <div className="actionAndTriggerTitleContainer">
                                <div className="actionAndTriggerIcon">
                                    <span>
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.02002 12C2.02002 6.49002 6.49002 2.02002 12 2.02002C17.51 2.02002 21.98 6.49002 21.98 12C21.98 17.51 17.51 21.98 12 21.98C6.49002 21.98 2.02002 17.51 2.02002 12ZM11.48 13.74V20L16.35 10.26H13V4.00002L8.00002 13.74H11.48Z" fill="#ffffff"></path></svg>
                                    </span>
                                </div>
                                <div className="actionAndTriggerTitleText">
                                    <div className="actionAndTriggerTitle">
                                        {props.step2CreateActionIsOpen ? <span>2. </span> : null}
                                        Action</div>
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
                                                appList.map((appItem) => {
                                                    return (
                                                        <div className="triggerAppWrapper" onClick={() => openChooseAppAndEventStep(appItem.name, appItem._id)}>
                                                            <div className="triggerAppIcon">
                                                                {/* <img width="21" src={appItem.appIcon} alt="" /> */}
                                                                <div style={{ backgroundColor: "#82807f", color: 'white', width: '30px', height: '30px', textAlign: 'center', borderRadius: '8px', marginRight: '12px' }}>
                                                                    {appItem.name.charAt(0)}
                                                                </div>
                                                            </div>
                                                            <div className="triggerAppName">{appItem.name}</div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>

                                    </div>
                                </div>
                                <div className="rightCol">
                                    <button className="moreTriggerOptionsBtn">
                                        <div className="triggerOptionBtnContent">
                                            <div className="triggerBtnIcon">
                                                <img src="https://zapier-images.imgix.net/storage/services/a3c21b5705839bf5cc398491792fde26.png?auto=format&fit=crop&h=50&ixlib=react-9.0.2&w=50&ar=undefined&h=40&w=40&q=75&dpr=1" alt="" />
                                            </div>
                                            <div className="triggerOptionBtnTxt">
                                                <div className='triggerOptionTitle'>Filter</div>
                                                <div>Only process when condition is met</div>
                                            </div>
                                        </div>
                                    </button>
                                    <button className="moreTriggerOptionsBtn">
                                        <div className="triggerOptionBtnContent">
                                            <div className="triggerBtnIcon">
                                                <img src="https://zapier-images.imgix.net/storage/services//bcc9b8c3b870e129fb7c869ec686ab90.png?auto=format&fit=crop&h=50&ixlib=react-9.0.2&w=50&ar=undefined&h=40&w=40&q=75&dpr=1" alt="" />
                                            </div>
                                            <div className="triggerOptionBtnTxt">
                                                <div className='triggerOptionTitle'>Format</div>
                                                <div>Change how incoming data is changed</div>
                                            </div>
                                        </div>
                                    </button>
                                    <button className="moreTriggerOptionsBtn">
                                        <div className="triggerOptionBtnContent">
                                            <div className="triggerBtnIcon">
                                                <img src="https://zapier-images.imgix.net/storage/services/2b3416ebc79b3fb31c014a3a149633c0.png?auto=format&fit=crop&h=50&ixlib=react-9.0.2&w=50&ar=undefined&h=40&w=40&q=75&dpr=1" alt="" />
                                            </div>
                                            <div className="triggerOptionBtnTxt">
                                                <div className='triggerOptionTitle'>Delay</div>
                                                <div>Pause actions for a certain amount of time</div>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div >
            }
        </>
    )
}

export default CreateAction
