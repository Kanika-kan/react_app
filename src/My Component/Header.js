import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  const auth = localStorage.getItem("accessToken");
  const logout = () => {
    localStorage.removeItem("accessToken");
    window.location.reload();
    // NotificationManager.info('You are logged out');
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/about">
              About{" "}
            </Link>
            <Link className="nav-link" to="/contact">
              Contact Us
            </Link>
            <Link className="nav-link" to="/weather">
              Weather{" "}
            </Link>
            {auth && (
              // <Link className="nav-item" to="/">
                <Button
                  onClick={logout}
                  className="btn btn-success"
                  type="logout"
                >
                  Logout
                </Button>
              // </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
