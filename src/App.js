import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css';

import { Row, Col } from 'antd';

function App() {
  return (
    <div className="App">
      <Row gutter={[24, 24]}>
        <Col lg={12}>
          <div style={{display: 'flex'}}>
            <div>
              <img src="https://zapier-images.imgix.net/storage/services/8913a06feb7556d01285c052e4ad59d0.png?auto=format&ixlib=react-9.0.2&ar=undefined&fit=crop&h=40&w=40&q=50&dpr=1" alt="" />
            </div>
            <div style={{textAlign: 'start'}}>
              <h2>Google Sheets</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Esse nulla reprehenderit ipsam repudiandae corporis minus distinctio sint iste saepe ad </p>
            </div>
          </div>
        </Col>
        <Col lg={12}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eum et corporis nisi mollitia ratione</Col>
      </Row>
    </div>
  );
}

export default App;
