import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Login from 'containers/auth/login';

class Main extends Component<{}> {
  render() {
    return (
      <Container id="main" fluid>
        <Row>
          <Col md="12">
            <Login />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
