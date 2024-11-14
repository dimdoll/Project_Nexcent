import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { navLinks } from "../constant";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container>
        <span className="my-auto font-inter  fs-2 fw-bold ">
          <img src="/logo.svg" alt="logo" />
          Nexcent
        </span>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="mx-auto">
            {navLinks.map((link) => (
              <Nav.Link key={link.name} href={link.href}>
                {link.name}
              </Nav.Link>
            ))}
          </Nav>
        <div className="d-flex gap-2">
          <Button variant="outline-success">Login</Button>
          <Button variant="success">Signup</Button>
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
