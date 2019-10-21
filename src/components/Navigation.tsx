import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

export default () => {
  const [active, setActive] = useState("page-1");

  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="page-1">
        <img
          src="/bellotero.io.jpg"
          width="auto"
          height="40"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto justify-content-end col-12">
          <Nav.Item className={`${active === "page-1" ? "active" : ""}`}>
            <Link to="/page-1" onClick={e => setActive("page-1")}>
              Testimonial
            </Link>
          </Nav.Item>
          <Nav.Item className={`${active === "page-2" ? "active" : ""}`}>
            <Link to="/page-2" onClick={e => setActive("page-2")}>
              Configurator
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="#">Stories</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="#">About</Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
