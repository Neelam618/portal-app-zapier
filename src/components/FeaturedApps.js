import React from 'react'
import { Row, Col } from 'antd';
import FeaturedAppsApi from './FeaturedAppsApi'
import './style.css'

function FeaturedApps() {
    return (
        <div id="overrideFeatured">
            <div>
                <Row gutter={[0, 0]}>
                    {
                        FeaturedAppsApi().map((item) => {
                            return (
                                <Col span={6}>
                                    <div className="appContainer">
                                        <span className="imgContainer">
                                            <span className="badge">{item.badgeText}</span>
                                            <span className="imgWrapper">
                                                <img src={item.image} alt="" />
                                            </span>
                                        </span>
                                    </div>
                                    <div>{item.title}</div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        </div>
    )
}

export default FeaturedApps
