import React from 'react'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'

function AppConnections() {
    return (
        <div id="appConnections">
            <div className="heading">
                <div><h1 className="title">Apps</h1></div>
                <div className="searchContainer">
                    <div><Input id="inputBox" size="large" placeholder="Search by App" prefix={<SearchOutlined />} /></div>
                    <div><button>Add connection</button></div>
                </div>
            </div>
        </div>
    )
}

export default AppConnections
