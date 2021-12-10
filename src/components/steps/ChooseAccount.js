import React, { useState } from 'react'
import { Select } from 'antd';
import SetupTrigger from './SetupTrigger';

const { Option } = Select;

function ChooseAccount() {
    const [showNextStep, setShowNextStep] = useState(false)
    const [showAccordionContent, setShowAccordionContent] = useState(false)

    function openNextStepAndCloseCurrentStep() {
        setShowNextStep(true)
        setShowAccordionContent(false)
    }

    function openAccordionContent() {
        setShowAccordionContent(true)
        setShowNextStep(false)
    }

    return (
        <>
            {
                showNextStep && !showAccordionContent ?
                    <div className="accordionItem" onClick={openAccordionContent}>
                        <div className="accordionTitle">
                            <span className="accordionArrow">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59009L12 13.1701L16.59 8.59009L18 10.0001L12 16.0001L6 10.0001L7.41 8.59009Z" fill="#666666"></path></svg>
                            </span>
                            Choose account
                        </div>
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM5 12L10 17L19 8L17.59 6.58L10 14.17L6.41 10.59L5 12Z" fill="#666666"></path></svg>
                        </div>
                    </div> :
                    <div className="accordionContent">
                        <div className='stepContentTitle'>Choose Account</div>
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
                        <button className="continueBtn" onClick={openNextStepAndCloseCurrentStep}>Continue</button>
                    </div>
            }
            {
                showNextStep ? <SetupTrigger /> : null
            }
        </>
    )
}

export default ChooseAccount
