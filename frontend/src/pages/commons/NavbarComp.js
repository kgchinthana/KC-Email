import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavbarComp.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarComp() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      fixed="top"
    >
      <Container className=" mt-0">
        <Navbar.Brand href="/" ><h3 className="heading">KC Mail</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
          <Nav className="ml-auto">
            <Link to="/login">
              <Button variant="primary mr-2 mt-auto mb-2 loginBtns">
                LOGIN
              </Button>
            </Link>
            <Link to="/">
              <Button variant="primary mr-2 mt-auto mb-2 loginBtns">
                SIGN UP
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
