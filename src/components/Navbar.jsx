import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Nav_bar = () => {
    return (
      <Navbar expand="lg" bg="success" data-bs-theme="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
            <Nav>
              <Link to="/" className="text-light p-2 text-decoration-none">
                Home
              </Link>
              <Navbar.Text className="text-light p-2 text-decoration-none">|</Navbar.Text>
              <Link to="/favoritos" className="text-light p-2 text-decoration-none">
                Favoritos
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  
  export default Nav_bar;