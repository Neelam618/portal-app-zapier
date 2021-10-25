import React from 'react'

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
                    <div className="actionContent">
                        <div>Action</div>
                        <div>An action is an event a Zap performs after it starts</div>
                    </div>
                </div>
                <div className="learnMore">
                    <button className="learnMoreBtn">Learn more</button>
                </div>
            </div>
            <div className="actionMain">

            </div>
        </div >
    )
}

export default ActionPopup
