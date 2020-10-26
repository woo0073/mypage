import React, { Component } from "react";
import MyProfile from "./myProfile";
import MyContainers from "./myContainers";
import { Container, Row, Col } from "react-bootstrap";

class MainPage extends Component {
  state = {};
  styles = { marginTop: "100px", marginBottom: "100px" };
  render() {
    return (
      <Container style={this.styles}>
        <Row>
          <Col xs lg="3">
            <MyProfile />
          </Col>
          <Col xs lg={true}>
            <MyContainers />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainPage;
