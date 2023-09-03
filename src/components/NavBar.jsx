import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsFillPersonFill } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";
export default function NavBar() {
  return (
    <div className="cont-header">
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
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/cities">Cities</Nav.Link>
                  <NavDropdown
                    className="login-button-nav"
                    title="Login"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item href="/auth/signup" className="signup-signap">
                      <BsFillPersonFill className="icon-login" /> SignUp
                    </NavDropdown.Item>
                    <NavDropdown.Item className="signup-signap" href="/signap">
                      <FiLogIn className="icon-signap" /> SignAp
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
