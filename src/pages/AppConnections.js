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
            <div>
            <div className="listItem">
                <div className="listTitleWrapper">
                    <span className="imgWrapper">
                        <img src="https://cdn.zapier.com/storage/services/54f0bd6f9c31b757ab20d4c7058dc7c0.32x32.png?auto=format&ar=undefined&fit=crop&ixlib=react-9.0.2&h=28&w=28&q=75&dpr=1" alt="" />
                    </span>
                    <span className="listTitle">Gmail</span>
                </div>
                <div>
                    <div className="listDetails">
                        <div className="connections">
                            <span className="count">1</span><div>Connection</div>
                        </div>
                        <div className="zaps">
                            <span className="count">2</span><div>Zaps</div>
                        </div>
                        <div>
                            <svg className="arrowIcon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z" fill="#666666"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default AppConnections
