import React from 'react'
import { Steps } from 'antd';

const { Step } = Steps;

function Publishing() {
    return (
        <div id="publishing">
            <h1>Publishing</h1>
            <div>
                <h2 className="stepsTitle">Launch Progress</h2>
                <div className="steps">
                    <Steps current={0} progressDot responsive >
                        <Step title="Build" />
                        <Step title="Review" />
                        <Step title="Beta" />
                        <Step title="Partnered" />
                    </Steps>
                </div>
                <div className="progressDuration">
                    <div>
                        <svg className="clockIcon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12ZM11 13L16.2 16.2L17 14.9L12.5 12.2V7H11V13Z" fill="#757575"></path></svg>
                    </div>
                    <div>About 1 week</div>
                </div>
            </div>
        </div>
    )
}

export default Publishing
