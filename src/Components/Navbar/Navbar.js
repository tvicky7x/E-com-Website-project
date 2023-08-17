import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Context from "../../Context";

function NavbarCom() {
  const ctx = useContext(Context);
  return (
    <Navbar expand="md" className="bg-body-dark" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home" style={{ fontSize: "25px" }}>
          The Generics
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Store">Store</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link
              href="#Cart"
              className="p-0 align-self-center w-100 ms-md-2"
            >
              <div className="d-grid">
                <Button
                  variant="light"
                  size="sm"
                  className="px-3 fw-semibold"
                  onClick={ctx.openCart}
                >
                  Cart
                  {ctx.CartList.length > 0 ? ` - ${ctx.CartList.length}` : ""}
                </Button>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCom;