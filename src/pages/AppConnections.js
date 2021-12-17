import React, { useState, useEffect } from 'react'
import { Input, Modal } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { useUserContext } from '../context/UserContext';

function AppConnections() {
    const {user} = useUserContext()

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [appList, setAppList] = useState([])

    useEffect(() => {
        fetch('http://143.244.142.223:8005/app/v1/public/', {
            // mode: 'no-cors',
            // method: 'GET',
            // headers: {
            //   'Content-Type': 'application/json'
            // }
        })
            .then((response) => {
                response.json().then((appList) => {
                    // Work with JSON appList here
                    console.log(appList)
                    setAppList(appList)
                })
            })
            .catch((err) => {
                // Do something for an error here
                console.log(err)
            })
    }, [])

    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    function redirectToUserAuthInApp(appId) {
        setIsModalVisible(false)

        fetch('http://143.244.142.223:8005/app/v1/public/auth/user/authenticate_url/' + appId, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + user.accessToken,
            }
        }).then((resp) => resp.json())
            .then((response) => {
                // Work with JSON authUrl here
                console.log("response1", response)
                return response.url
                // setAuthUrl(authUrl)
            }).then(url => {
                fetch('http://143.244.142.223:8005/app/v1/public/auth/user/' + appId + "?name=gitlab", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + user.accessToken,
                    },
                    body: JSON.stringify({
                        "client_id": "1ee66772259adacc31c6306a563d2437bcf4eee9c58b6fd5a8277c5dcc1ceb1e",
                        "user_data": {
                            "authorization_response_url": url
                        },
                    })
                }).then(response => response.json())
                .then(response => console.log("response2", response))
            })
            .catch((err) => {
                // Do something for an error here
                console.log(err)
            })
    }

    return (
        <div id="appConnections">
            <div className="heading">
                <div><h1 className="title">Apps</h1></div>
                <div className="searchContainer">
                    <div className="searchInput"><Input id="inputBox" size="medium" placeholder="Search by App" prefix={<SearchOutlined />} /></div>
                    <div className="addBtnWrapper"><button onClick={showModal} className="addBtn">Add connection</button></div>
                    <Modal className='addConnectionModal' centered title="Add a new app connection" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        {/* <p>Add a new app connection</p> */}
                        <Input size="large" placeholder="Search apps..." prefix={<SearchOutlined />} style={{ marginBottom: 10 }} />
                        {
                            appList.map((appItem) => {
                                return (
                                    <div className="appWrapper" onClick={() => redirectToUserAuthInApp(appItem.id)}>
                                        <div className="appIcon" style={{ marginRight: 10 }}>
                                            <img width="36" src={appItem.appIcon} alt="" />
                                        </div>
                                        <div className="appName">{appItem.name}</div>
                                    </div>
                                )
                            })
                        }
                    </Modal>

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
                                <span className="count">1</span><div className="countText">Connection</div>
                            </div>
                            <div className="zaps">
                                <span className="count">2</span><div className="countText">Zaps</div>
                            </div>
                            <div>
                                <svg className="arrowIcon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z" fill="#136bf5"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppConnections
