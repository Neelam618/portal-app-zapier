import React from 'react'
import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import FeaturedAppsApi from './FeaturedAppsApi'
import '../../src/style.css'

function FeaturedApps() {
    let chunkedItems = []
    let size = 4;
    for (let i = 0; i < FeaturedAppsApi().length; i += size) {
        chunkedItems.push(FeaturedAppsApi().slice(i, i + size))
    }
    console.log(chunkedItems);
    return (
        <div id="overrideFeatured">
            <div style={{margin: '0 3em'}}>
                <Carousel autoplay>
                    {
                        chunkedItems.map((slide) => {
                            return (
                                <div>
                                    <Row gutter={[16, 16]}>
                                        {
                                            slide.map((item) => {
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
                                                    <Col md={24} lg={12} xl={6}>
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
                            )
                        })
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default FeaturedApps
