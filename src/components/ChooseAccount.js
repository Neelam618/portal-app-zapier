import React from 'react'
import { Select } from 'antd';

const { Option } = Select;

function ChooseAccount() {
    return (
        <div className="chooseAccountContent">
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
            <button className="continueBtn">Continue</button>
        </div>
    )
}

export default ChooseAccount
