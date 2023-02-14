import { React, useContext } from "react";
import ThemeContext from "../state/Themecontext";
import NavContext from "../state/Navcontext";
import Container from "react-bootstrap/Container";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./navbar.css";

export default function Navigationbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { contextClass, toggleClass } = useContext(NavContext);

  return (
    <>
      <button onClick={toggleClass}>
        <GiHamburgerMenu />
      </button>
      <div className={contextClass}>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link>
                  <Link
                    to={`/`}
                    style={{
                      color: "lightblue",
                    }}
                  >
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to={`Details`}
                    style={{
                      color: "lightblue",
                    }}
                  >
                    Details
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
          <Button onClick={toggleTheme}>Toggle the theme!</Button>
        </Navbar>
      </div>
    </>
  );
}
