import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Icons() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Font Awesome Icons</Card.Title>
                <p className="card-category">
                  {/* Handcrafted by our friends from{" "} */}
                </p>
              </Card.Header>
              <Card.Body className="all-icons">
                <Row>
                  <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
                    <div className="font-icon-detail">
                      <i className="fa fa-2x fa-football-ball"></i>
                      <p>fa-football-ball</p>
                    </div>
                  </Col>
                  <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
                    <div className="font-icon-detail">
                      <i className="fa fa-2x fa-images"></i>
                      <p>fa-images</p>
                    </div>
                  </Col>
                  <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
                    <div className="font-icon-detail">
                      <i className="fa fa-2x fa-beer"></i>
                      <p>fa-beer</p>
                    </div>
                  </Col>
                  <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
                    <div className="font-icon-detail">
                      <i className="fa fa-2x fa-align-center"></i>
                      <p>fa-align-center</p>
                    </div>
                  </Col>
                  <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
                    <div className="font-icon-detail">
                      <i className="fa fa-2x fa-align-left"></i>
                      <p>fa-align-left</p>
                    </div>
                  </Col>
                  <Col className="font-icon-list" lg="2" md="3" sm="4" xs="6">
                    <div className="font-icon-detail">
                      <i className="fa fa-2x fa-ambulance"></i>
                      <p>fa-ambulance</p>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Icons;
