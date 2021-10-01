import React from 'react'
import { Row, Col, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'

function zaps() {
    return (
        <div id="zaps">
            <div>
                <Row>
                    <Col span={10} className="zaps">
                        <h1 className="heading">Zaps</h1>
                        <Input size="medium" placeholder="Search by App" prefix={<SearchOutlined />} />
                    </Col>
                    <Col span={14}>
                        1 col-order-4
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default zaps
