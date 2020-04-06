import React, {useState, useEffect } from 'react'
import axios from 'axios';
import {
  Card, CardText, CardBody,
  CardTitle, Container, Row, Col
} from 'reactstrap';

import './index.css'

const Cards = () => {
  const [globalData, setGlobalData] = useState();

  useEffect(() => {
    axios.get('https://covidapi.info/api/v1/global')
          .then((data) => {
            setGlobalData(data.data);
            console.log("DATA:::",data.data.result.confirmed)
            console.log("DATA:::",data.data.result.deaths)
            console.log("DATA:::",data.data.result.recovered)
          });
  }, []);

  
  
  return ( 
    <div>
      <Container fluid>
        <Row className="mb-3 mt-3">
        <Col sm="3">
            <Card>
              <CardBody className="firstcard">
                <CardTitle>Date</CardTitle>
                <CardText>{globalData ? globalData.date: globalData}</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col sm="3">
            <Card>
              <CardBody className="firstcard">
                <CardTitle>Confirmed Cases</CardTitle>
                <CardText>{globalData ? globalData.result.confirmed: globalData}</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col sm="3">
            <Card>
              <CardBody className="firstcard">
                <CardTitle>Confirmed Deaths</CardTitle>
                <CardText>{globalData ? globalData.result.deaths: globalData}</CardText>
              </CardBody>
            </Card>
          </Col>
          <Col sm="3">
            <Card>
              <CardBody className="firstcard">
                <CardTitle>Confirmed Recovered</CardTitle>
                <CardText>{globalData ? globalData.result.recovered: globalData}</CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
   );
}
 
export default Cards;