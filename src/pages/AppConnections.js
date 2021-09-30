import React from 'react'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'

function AppConnections() {
    return (
        <div id="appConnections">
            <div className="heading">
                <div><h1 className="title">Apps</h1></div>
                <div className="searchContainer">
                    <div className="searchInput"><Input id="inputBox" size="medium" placeholder="Search by App" prefix={<SearchOutlined />} /></div>
                    <div className="addBtnWrapper"><button className="addBtn">Add connection</button></div>
                </div>
            </div>
        </div>
    )
}

export default AppConnections
