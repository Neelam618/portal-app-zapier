import React from 'react'
import { Row, Col } from 'antd';
import { useState, useEffect } from 'react/cjs/react.development';
import AllAppsApi from './AllAppsApi';
import './style.css'

function AllApps() {
    const [items, setItems] = useState([])
    const [visible, setVisible] = useState(6)

    const showMoreItems = () => {
        setVisible(prevValue => prevValue + 6);
    }

    useEffect(() => {
        return setItems(AllAppsApi())
    }, [])

    return (
        <div id="allApps">
            <Row gutter={[24, 24]}>
                {
                    items.slice(0, visible).map((item) => {
                        return (
                        <Col span={12}>{item}</Col>
                        )
                    })
                }
            </Row>
            <button onClick={showMoreItems}>Load More</button>
        </div>
    )
}

export default AllApps
