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
                            let badgeColor = "";
                            if (item.badgeText == "Featured") {
                                badgeColor = "badgeRed"
                            }
                            if (item.badgeText == "New actions added") {
                                badgeColor = "badgeYellow"
                            }
                            if (item.badgeText == "Coming soon") {
                                badgeColor = "badgeBlue"
                            }
                            if (item.badgeText == "Recently added") {
                                badgeColor = "badgeGreen"
                            }
                            return (
                                <Col span={6}>
                                    <a href="">
                                        <div className="appContainer">
                                            <span className="imgContainer">
                                                <span className={`badge ${badgeColor}`}>{item.badgeText}</span>
                                                <span className="imgWrapper">
                                                    <img src={item.image} alt="" />
                                                </span>
                                            </span>
                                        </div>
                                        <div className="title">{item.title}</div>
                                    </a>
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
