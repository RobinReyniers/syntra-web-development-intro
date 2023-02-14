import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import ThemeContext from "../state/Themecontext";

function Navigationbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Bol.com</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link
                  to={`/`}
                  style={{
                    color: "white",
                  }}
                >
                  Home
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button onClick={toggleTheme}>Toggle the theme</Button>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigationbar;
