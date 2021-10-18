import React from 'react'
import { Steps } from 'antd';

const { Step } = Steps;

function Publishing() {
    return (
        <div id="publishing">
            <h1>Publishing</h1>
            <div className="publishing">
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
                <h3>Getting Ready for Review</h3>
                <p>Once you submit, we’ll be in touch within 1 week to start the review process.</p>
                <div className="listItem">
                    <span className="listIconWrapper">
                        <svg className="listIcon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 3H7C5.9 3 5 3.9 5 5V21L12 18L19 21V5C19 3.9 18.1 3 17 3Z" fill="#666666"></path></svg>
                    </span>
                    <span>
                        Check out our pre-publishing guide to make sure your integration is ready.
                    </span>
                </div>
                <div className="listItem">
                    <span className="listIconWrapper">
                        <svg className="listIcon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 17V15H13V17H11ZM11 7V13H13V7H11Z" fill="#666666"></path></svg>                    
                    </span>
                    <span>
                        Validate your integration to ensure you don’t have warnings or errors to work through first.                   
                    </span>
                </div>
                <div className="listItem">
                    <span className="listIconWrapper">
                        <svg className="listIcon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.9 3.89 3 5 3ZM13 13H17V11H13V7H11V11H7V13H11V17H13V13Z" fill="#666666"></path></svg>
                    </span>
                    <span>
                        Invite users to start using your integration.                    
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Publishing
