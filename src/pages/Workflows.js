import React from 'react'
import { Row, Col, Input, Button } from 'antd';
import { Menu, Dropdown, Tooltip, Checkbox } from 'antd';
import WorkflowItem from '../components/WorkflowItem';
import WorkflowsSection from '../components/WorkflowsSection';
import WorkflowListSection from '../components/WorkflowListSection';

function Workflows() {
    return (
        <div id="zaps">
            <div>
                <Row>
                    <WorkflowsSection />
                    <WorkflowListSection />
                </Row>
            </div>
        </div>
    )
}

export default Workflows
