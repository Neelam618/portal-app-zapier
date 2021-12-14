import React, { useRef, useState, useEffect } from 'react'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import ChooseAppAndEvent from './ChooseAppAndEvent';

// const apps = [
//     {
//         app: "Google Calender", appIcon: "https://zapier-images.imgix.net/storage/services/62c82a7958c6c29736f17d0495b6635c.png?auto=format&fit=crop&h=64&ixlib=react-9.0.2&w=64&ar=undefined&h=21&w=21&q=50&dpr=1"
//     },
//     {
//         app: "Google Contacts", appIcon: "https://zapier-images.imgix.net/storage/services/1508661b55cd3c5ad1787303b0f58c99.png?auto=format&fit=crop&h=64&ixlib=react-9.0.2&w=64&ar=undefined&h=21&w=21&q=50&dpr=1"
//     },
//     {
//         app: "Google Docs", appIcon: "https://zapier-images.imgix.net/storage/services/ae42824b58d556d36b5e5b217377fc5e.png?auto=format&fit=crop&h=64&ixlib=react-9.0.2&w=64&ar=undefined&h=21&w=21&q=50&dpr=1"
//     }
// ]

function CreateTrigger(props) {

    const [appList, setAppList] = useState([])
    const [selectedApp, setSelectedApp] = useState()

    useEffect(() => {
        setShowChooseAppAndEventStep(false)
        setSelectedApp()

        fetch('http://143.244.142.223:8005/app/v1/public/', {
            // mode: 'no-cors',
            // method: 'GET',
            // headers: {
            //   'Content-Type': 'application/json'
            // }

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
    const [showChooseAppAndEventStep, setShowChooseAppAndEventStep] = useState(false)

    function openChooseAppAndEventStep(appName) {
        setShowChooseAppAndEventStep(true)
        setSelectedApp(appName)
    }

    return (
        <div>
            {
                showChooseAppAndEventStep ? <ChooseAppAndEvent step="trigger" selectedApp={selectedApp} appList={appList} setSelectedApp={setSelectedApp} /> :
                    <div className="triggerContainer">
                        <div className="actionAndTriggerHeader">
                            <div className="actionAndTriggerTitleContainer">
                                <div className="actionAndTriggerIcon">
                                    <span>
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.02002 12C2.02002 6.49002 6.49002 2.02002 12 2.02002C17.51 2.02002 21.98 6.49002 21.98 12C21.98 17.51 17.51 21.98 12 21.98C6.49002 21.98 2.02002 17.51 2.02002 12ZM11.48 13.74V20L16.35 10.26H13V4.00002L8.00002 13.74H11.48Z" fill="#ffffff"></path></svg>
                                    </span>
                                </div>
                                <div className="actionAndTriggerTitleText">
                                    <div className="actionAndTriggerTitle">1. Trigger</div>
                                    <div className="actionAndTriggerPara">A trigger is an event that starts your workflow</div>
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
                                            <div className="triggerSubTitle">App Event</div>
                                            <div className="titlePara">Start the workflow when something happens in an app</div>
                                        </div>
                                    </div>
                                    <div>
                                        <Input id="inputBox" size="large" placeholder="Search apps..." prefix={<SearchOutlined />} />
                                    </div>
                                    <div className="triggerAppsContainer">
                                        {
                                            appList.map((appItem) => {
                                                return (
                                                    <div className="triggerAppWrapper" onClick={()=> openChooseAppAndEventStep(appItem.name)}>
                                                        <div className="triggerAppIcon">
                                                            <img width="21" src={appItem.appIcon} alt="" />
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
                    </div>
            }
        </div>
    )
}

export default CreateTrigger
