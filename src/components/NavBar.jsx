import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BsFillPersonFill } from "react-icons/bs";

export default function NavBar() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <div className="cont-navbar">
            <div className="cont-tit-nav">
              <Navbar.Brand href="#home">MyTinerary</Navbar.Brand>
            </div>
            <div className="cont-menu-nav">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Cities</Nav.Link>
                  <Nav.Link className="login-button-nav" href="#link">
                    <BsFillPersonFill className="icon-login" />
                    Login
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
