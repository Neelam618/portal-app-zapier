import React from 'react'

function TestTrigger() {
    return (
        <div id='testTriggerContainer'>
            <div className="stepContentTitle">Test trigger</div>
            <div className="testTriggerIcons">
                <div className="appIcon">
                    <img width="40" src="https://zapier-images.imgix.net/storage/services/54f0bd6f9c31b757ab20d4c7058dc7c0.128x128.png?auto=format%2Ccompress&ixlib=python-3.0.0&q=50" alt="" />
                </div>
                <div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="#666666"></path></svg>
                </div>
                <div className="workflowIcon">
                    <svg width="40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M318 256c0 19-4 36-10 52-16 7-34 10-52 10-19 0-36-3-52-9-7-17-10-34-10-53 0-18 3-36 10-52 16-6 33-10 52-10 18 0 36 4 52 10 6 16 10 34 10 52zm182-41H355l102-102c-8-11-17-22-26-32-10-9-21-18-32-26L297 157V12c-13-2-27-3-41-3s-28 1-41 3v145L113 55c-12 8-22 17-32 26-10 10-19 21-27 32l102 102H12s-3 27-3 41 1 28 3 41h144L54 399c16 23 36 43 59 59l102-102v144c13 2 27 3 41 3s28-1 41-3V356l102 102c11-8 22-17 32-27 9-10 18-20 26-32L355 297h145c2-13 3-27 3-41s-1-28-3-41z" fill="#fd7622"></path></svg>
                </div>
            </div>
            <p className="testTriggerTitle">Test your trigger</p>
            <div className="testTriggerPara">We'll find a recent attachment in your Gmail account <span>Gmail email@gmail.com</span> to confirm that the right account is connected and your trigger is set up correctly.</div>
            <div className="testTriggerBtnWrapper">
                <button className="testTriggerBtn">Test Trigger</button>
            </div>
        </div>
    )
}

export default TestTrigger
