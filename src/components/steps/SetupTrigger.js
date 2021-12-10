import React from 'react'
import { Select, Input } from 'antd';

const { Option } = Select;

function SetupTrigger() {
    return (
        <div className="chooseAppAndEventContent">
            <div className='stepContentTitle'>Set up Trigger</div>

            <label htmlFor="">Label/Mailbox</label>
            <div>
                <div className="chooseAccountContainer">
                    <div className="chooseAccountIcon">
                        <img width="20px" src="https://zapier-images.imgix.net/storage/services/54f0bd6f9c31b757ab20d4c7058dc7c0.128x128.png?auto=format%2Ccompress&ixlib=python-3.0.0&q=50" alt="" />
                    </div>
                    <Select defaultValue="Inbox and All Labels" style={{ width: "100%" }}>
                        <Option value="chat">Chat</Option>
                        <Option value="sent">Sent</Option>
                        <Option value="inbox">Inbox</Option>
                        <Option value="imp">Important</Option>
                        <Option value="trash">Trash</Option>
                        <Option value="draft">Draft</Option>
                        <Option value="span">Span</Option>
                    </Select>
                </div>
            </div>
            <p className="chooseAccountInfo">Gmail is a secure partner with Zapier. Your credentials are encrypted & can be removed at any time.</p>
            <label htmlFor="">Search String</label>
            <Input placeholder="Enter text..." />
            <p className='searchStringInfo'>This works the same as the search bar you see in Gmail. For example: from:amy OR from:david or subject:dinner label:my-family</p>
            <button>Refresh fields</button>
            <button className="continueBtn">Continue</button>
        </div>
    )
}

export default SetupTrigger
