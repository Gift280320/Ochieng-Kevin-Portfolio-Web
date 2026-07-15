import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

import logo from "../Assets/my-logo.png";

import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavColour(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="lg"
      className={navColour ? "sticky navbar" : "navbar"}
    >
      <Container>

        {/* Logo */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center"
          onClick={() => setExpand(false)}
        >
          <img
            src={logo}
            alt="Ochieng Kevin Madara"
            className="img-fluid"
            style={{
              height: "65px",
              width: "auto",
              objectFit: "contain",
              transition: "0.3s",
            }}
          />
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpand(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                onClick={() => setExpand(false)}
              >
                <AiOutlineHome
                  style={{
                    marginBottom: "2px",
                    marginRight: "6px",
                    fontSize: "20px",
                    color: "#60a5fa",
                  }}
                />
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => setExpand(false)}
              >
                <AiOutlineUser
                  style={{
                    marginBottom: "2px",
                    marginRight: "6px",
                    fontSize: "20px",
                    color: "#22c55e",
                  }}
                />
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => setExpand(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{
                    marginBottom: "2px",
                    marginRight: "6px",
                    fontSize: "20px",
                    color: "#f59e0b",
                  }}
                />
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => setExpand(false)}
              >
                <CgFileDocument
                  style={{
                    marginBottom: "2px",
                    marginRight: "6px",
                    fontSize: "20px",
                    color: "#ec4899",
                  }}
                />
                Resume
              </Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavBar;