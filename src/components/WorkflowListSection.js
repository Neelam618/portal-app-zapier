import React, {useState} from 'react'
import { Row, Col, Input, Button } from 'antd';
import { Menu, Dropdown, Tooltip } from 'antd';
import WorkflowItem from '../components/WorkflowItem';
import { NavLink as Link } from 'react-router-dom';
import { AllCheckerCheckbox, Checkbox, CheckboxGroup } from '@createnl/grouped-checkboxes';

const menu = (
    <Menu>
        <Menu.Item>
            <a target="" href="">
                Select paused
            </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
            <a target="" href="">
               Select drafts
            </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
            <a target="" href=''>
                Select all
            </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
            <a target="" href="">
                Deselect all
            </a>
        </Menu.Item>
    </Menu>
);

function WorkflowListSection() {
    const [checked, setChecked] = useState(false)

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
        setChecked(!checked)
    }

    return (
        <Col lg={16} className="home">
            <h2 className="subHeading">Home</h2>
            <CheckboxGroup>
            <div style={{ position: 'relative' }}>
                <div className="toolbar">
                    {/* <Checkbox className="selectBox" onChange={onChange} checked={checked} /> */}
                    <AllCheckerCheckbox />
                    <Dropdown trigger="click" overlay={menu} placement="bottomLeft" overlayClassName="dropdownRoot">
                        <Button>
                            <span>
                                <svg width="15px" height="15px" viewBox="0 0 512 512"><path fill="#969ea2" d="M256 307l184-184c16-16 41-16 57 0s16 41 0 57L288 389c-9 9-21 13-32 12-11 1-23-3-32-12L15 180c-16-16-16-41 0-57s41-16 57 0z"></path></svg>
                            </span>
                        </Button>
                    </Dropdown>
                    <div><button className="trashBtn">Trash</button></div>
                    <Link to="/create-workflow"><button className="createBtn">Create Workflow</button></Link>
                </div>
            </div>
            <div className="zapList">
                <WorkflowItem switchDisabled={false} />
                <WorkflowItem switchDisabled={false} />
            </div>
            <h2 className="subHeading">Drafts</h2>
            <Tooltip placement="bottom" title="View workflow details">
                <WorkflowItem switchDisabled={true} />
            </Tooltip>
            </CheckboxGroup>
        </Col>
    )
}

export default WorkflowListSection
