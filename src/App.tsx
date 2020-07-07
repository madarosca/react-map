import React, { Component } from 'react';
import Routes from './routes';
import Container from 'react-bootstrap/Container';

class App extends Component<{}> {
  render() {
    return (
      <Container fluid>
        <Routes />
      </Container>
    );
  }
}

export default App;
