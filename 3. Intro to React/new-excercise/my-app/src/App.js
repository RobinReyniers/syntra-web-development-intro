import React, { useState } from "react";
import Series from "./Series";
import Characters from "./Characters";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// marvel config
export const marvelApiConfig = {
  publicKey: "b8239b826dc6d752ed091a392c276a78",
  hash: "ff5ce42447571e197fae4fd3e9308d3c",
  ts: 1,
};

function App() {
  const [characters, setCharacters] = useState([]);
  return (
    <Container>
      <Row>
        <Col sm={8} lg="auto">
          <Series setCharacters={setCharacters} />
        </Col>
        <Col sm={4} lg="auto">
          {characters.length > 0 ? (
            <Characters characters={characters} />
          ) : null}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
