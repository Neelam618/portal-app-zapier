import React, { useState } from 'react'
import Card from './Card'
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function Advanced() {

    const [pairList, setPairList] = useState([
        { key: "", value: "" },
    ])
    const handleChange = (e, index) => {
        const { name, value } = e.target;

        const list = [...pairList];
        list[index][name] = value

        setPairList(list);
    }

    const addPair = () => {
        setPairList([...pairList, { key: "", value: "" }])
        // OR
        // const list = [...pairList]
        // list.push({key: "", value: ""})
        // setPairList(list)
    }

    const deletePair = index => {
        const list = [...pairList]
        list.splice(index, 1)
        setPairList(list)
    }
    return (
        <div id="advanced">
            <h1 className='title'>Advanced</h1>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Environment" key="1">
                    <h1 className="tabTitle">Environment Variables</h1>
                    <Card
                        title="Set Variables for This Integration Version"
                        description="Use environment variables to set secret values (such as API keys or client IDs and secrets), or to manage configurations and switch between staging and production environments. Environment variables are set per version."
                        link=""
                    />
                    <div className="formContainer">
                        <div className="inputRow inputRowtitle">
                            <h3>Key</h3>
                            <h3>Value</h3>
                        </div>
                        {
                            pairList.map((item, i) => {
                                return (
                                    <div className="inputRow" key={i}>
                                        <input className="input" type="text" placeholder="key" name="key" value={item.key} onChange={e => handleChange(e, i)} />
                                        <input className="input" type="text" placeholder="value" name="value" value={item.value} onChange={e => handleChange(e, i)} />
                                        <button className="deleteBtn" onClick={() => deletePair(i)}>
                                            <svg className="delete" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#666666"></path></svg>
                                        </button>
                                    </div>
                                )
                            })
                        }
                        <button className="addPairBtn" onClick={addPair}>Add</button>
                    </div>
                    {/* <pre>{JSON.stringify(inputList)}</pre> */}
                </TabPane>
                <TabPane tab="Export Project" key="2">
                    <h1 className="tabTitle">Export Project to CLI</h1>
                    <div className="tabText">
                        <p>The Zapier CLI (Command Line Interface) is a toolset you install and run on your local development environment. It allows you to build, test, and manage your Zapier integration through code and command line commands. Moving from the visual builder to the CLI tool brings a couple of advantages:</p>
                        <ul className="list">
                            <li>Access to every feature of the Zapier Platform</li>
                            <li>Ability to better optimize your code</li>
                            <li>Easier team collaboration</li>
                            <li>Automated regression testing tools, and more</li>
                        </ul>
                        <p>To try it out, you’ll install the Zapier CLI and run a command that creates a local version of your project. This will not change the existing work you've done in the visual builder, so feel free to explore. Note that versions built with the CLI can't be edited in the UI.</p>
                    </div>
                    <a href="">How to export your integration
                        <svg className="arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="#136bf5"></path></svg>
                    </a>
                </TabPane>
                <TabPane tab="View Source" key="3">
                    <h1 className="tabTitle">Source Definition for v1.0.0</h1>
                </TabPane>
            </Tabs>
        </div>
    )
}

export default Advanced
