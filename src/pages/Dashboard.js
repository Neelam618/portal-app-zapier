import React from 'react'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import '../components/style.css'

function Dashboard() {
    return (
        <div id="dashboard">
            <div className="welcomeContent">
                <div className="miniLogo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M318 256c0 19-4 36-10 52-16 7-34 10-52 10-19 0-36-3-52-9-7-17-10-34-10-53 0-18 3-36 10-52 16-6 33-10 52-10 18 0 36 4 52 10 6 16 10 34 10 52zm182-41H355l102-102c-8-11-17-22-26-32-10-9-21-18-32-26L297 157V12c-13-2-27-3-41-3s-28 1-41 3v145L113 55c-12 8-22 17-32 26-10 10-19 21-27 32l102 102H12s-3 27-3 41 1 28 3 41h144L54 399c16 23 36 43 59 59l102-102v144c13 2 27 3 41 3s28-1 41-3V356l102 102c11-8 22-17 32-27 9-10 18-20 26-32L355 297h145c2-13 3-27 3-41s-1-28-3-41z"></path></svg></div>
                <div className="welcomeText"><h1>Welcome to Zapier!</h1></div>
            </div>
            <section>
                <div className="card">
                    <h2 className="title">Create your own workflow</h2>
                    <p className="para">Know exactly what you want to build? Select the apps you want to connect to start your custom setup.</p>
                    <div className="make-a-zap">
                <div style={{ display: 'flex', alignItems: 'center', flexFlow: 'row nowrap'}}>
                    <div className="trigger-app-input" style={{width: '100%'}}>
                        <div style={{textAlign: 'left', fontWeight: 700, marginBottom: 10}}>Connect this app...</div>
                        <Input id="inputBox" size="large" placeholder="Search for an app" prefix={<SearchOutlined />} />
                    </div>
                    <span className="plusIcon" style={{ position: 'relative', margin: 0, padding: '0 10px', display: 'flex', boxPack: 'center', transform: 'translateY(17px)', justifyContent: 'center', width: 'auto' }}>
                        <span style={{ background: 'white', borderRadius: '50%', position: 'relative', zIndex: 1, height: 30, width: 30, fill: '#cccccc' }}>
                            <span style={{ fill: '#cccccc', height: 30, width: 30, display: 'inline-block' }}>
                                <svg style={{ display: 'block', fill: '#cccccc' }} width="30" height="30" viewBox="0 0 24 24" fill="#cccccc" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM13 13H17V11H13V7H11V11H7V13H11V17H13V13Z" fill="#cccccc"></path></svg>
                            </span>
                        </span>
                    </span>
                    <div className="action-app-input" style={{width: '100%'}}>
                        <div style={{textAlign: 'left', fontWeight: 700, marginBottom: 10}}>with this one!</div>
                        <Input id="inputBox" size="large" placeholder="Search for an app" prefix={<SearchOutlined />} />
                    </div>
                </div>
            </div>
                </div>
            </section>
        </div>
    )
}

export default Dashboard
