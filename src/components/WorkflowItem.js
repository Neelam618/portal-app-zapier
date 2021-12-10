import React, {useState} from 'react'
import { Switch } from 'antd';
import { Tooltip, Button, Checkbox } from 'antd';
import { Menu, Dropdown } from 'antd';

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                View
            </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                Rename
            </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                Delete
            </a>
        </Menu.Item>
    </Menu>
);

function WorkflowItem(props) {
    const [checked, setChecked] = useState(false)

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
        setChecked(!checked)
    }

    return (
        <div>
            <div className="zapItem">
                <Checkbox className="zapCheckbox" onChange={onChange} checked={checked}/>
                <div className="zap">
                    <div style={{ position: 'relative' }}>
                        <div className="dashboardZap">
                            <div className="miniZap">
                                <div className="zapWrapper">
                                    <div className="zapLogos">
                                        <ol className="zapIcons">
                                            <li className="zapIconsStep">
                                                <div className="zapIconWrap">
                                                    <div className="zapIcon"></div>
                                                </div>
                                                <span className="caretIcon">
                                                    <svg viewBox="0 0 512 512"><path d="M71 455c0 35 39 55 67 35l285-199c24-17 24-53 0-70L138 22c-28-20-67 0-67 35z"></path></svg>
                                                </span>
                                            </li>
                                            <li className="zapIconsStep">
                                                <div className="zapIconWrap">
                                                    <div className="zapIcon-number">2</div>
                                                </div>
                                                <span className="caretIcon">
                                                    <svg viewBox="0 0 512 512"><path d="M71 455c0 35 39 55 67 35l285-199c24-17 24-53 0-70L138 22c-28-20-67 0-67 35z"></path></svg>
                                                </span>
                                            </li>
                                            <li className="zapIconsStep">
                                                <div className="zapIconWrap">
                                                    <div className="zapIcon"></div>
                                                </div>
                                            </li>
                                        </ol>
                                    </div>
                                    <div className="zapTitle">
                                        <span className="zapTitleText">Name your workflow</span>
                                    </div>
                                    <div className="zapControls">
                                        <div className="zapToggle">
                                            {props.switchDisabled?
                                                <Tooltip placement="bottom" title="This workflow is not complete">
                                                    <Switch checkedChildren="ON" unCheckedChildren="OFF" defaultUnchecked disabled={props.switchDisabled} />
                                                </Tooltip> : 
                                                <Switch checkedChildren="ON" unCheckedChildren="OFF" defaultUnchecked disabled={props.switchDisabled} />
                                            }
                                        </div>
                                        <div className="zapTooltip">
                                            <Tooltip placement="bottom" title="View workflow details">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 17V11H13V17H11ZM11 7V9H13V7H11Z" fill="#666666"></path></svg>
                                            </Tooltip>
                                        </div>
                                    </div>
                                    <div className="zapDropdown">
                                        <Dropdown trigger="click" overlay={menu} placement="bottomLeft" overlayClassName="dropdownRoot">
                                            <Button>
                                                <span>
                                                    <svg width="15px" height="15px" viewBox="0 0 512 512"><path fill="#969ea2" d="M256 307l184-184c16-16 41-16 57 0s16 41 0 57L288 389c-9 9-21 13-32 12-11 1-23-3-32-12L15 180c-16-16-16-41 0-57s41-16 57 0z"></path></svg>
                                                </span>
                                            </Button>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkflowItem
