import React from 'react'
import { Carousel } from 'antd';
import { Row, Col } from 'antd';
import PopularAppsApi from './PopularAppsApi';

function PopularApps() {
    const carouselItems = PopularAppsApi().reduce((previousValue, currentValue, currentIndex) => {
        let row = [];
        if (currentIndex % 2 == 1) {
            row = previousValue.splice(-1, 1)[0]
        }
        row.push(currentValue)
        previousValue.push(row)
        return previousValue
    }, [])
    console.log(carouselItems);
    return (
        <div>
            <Carousel>
                {
                    carouselItems.map((items) => {
                        return (
                        <div>
                            <Row gutter={[0, 0]}>
                                <Col lg={12}>
                                    <a href="" className="appContent">
                                        <div className="appImg">
                                            <span className="appImgWrapper">
                                                <img src={items[0].image} alt="" />
                                            </span>
                                        </div>
                                        <div className="appText">
                                            <h3>{items[0].title}</h3>
                                            <p>{items[0].description}</p>
                                        </div>
                                    </a>
                                </Col>
                                {items.length > 1 ? 
                                <Col lg={12}>
                                    <div className="appContent">
                                        <div className="appImg">
                                            <span className="appImgWrapper">
                                                <img src={items[1].image} alt="" />
                                            </span>
                                        </div>
                                        <div className="appText">
                                            <h3>{items[1].title}</h3>
                                            <p>{items[1].description}</p>
                                        </div>
                                    </div>
                                </Col>
                                : null }
                            </Row>
                        </div>
                        )
                    })
                }
                {/* <div>
                    <Row gutter={[0, 0]}>
                        <Col lg={12}>
                            <div className="appContent">
                                <div className="appImg">
                                    <span className="appImgWrapper">
                                        <img src="https://zapier-images.imgix.net/storage/services/8913a06feb7556d01285c052e4ad59d0.png?auto=format&ixlib=react-9.0.2&ar=undefined&fit=crop&h=40&w=40&q=50&dpr=1" alt="" />
                                    </span>
                                </div>
                                <div className="appText">
                                    <h3>Google Sheets</h3>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Esse nulla reprehenderit ipsam repudiandae corporis minus distinctio sint iste saepe ad </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className="appContent">
                                <div className="appImg">
                                    <span className="appImgWrapper">
                                        <img src="https://zapier-images.imgix.net/storage/services/8913a06feb7556d01285c052e4ad59d0.png?auto=format&ixlib=react-9.0.2&ar=undefined&fit=crop&h=40&w=40&q=50&dpr=1" alt="" />
                                    </span>
                                </div>
                                <div className="appText">
                                    <h3>Google Sheets</h3>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Esse nulla reprehenderit ipsam repudiandae corporis minus distinctio sint iste saepe ad </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div> */}
            </Carousel>
        </div>
    )
}

export default PopularApps
