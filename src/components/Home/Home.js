import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

import {
  FaFacebook,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

function Home() {
  return (
    <>
      <Container fluid className="home-section" id="home">
        <Particle />

        <Container className="home-content">
          <Row className="align-items-center">

            <Col md={7} className="home-header">
              <h1 className="heading">
                Hi There! <span className="wave">👋</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <br />
                <strong className="main-name">
                  OCHIENG KEVIN MADARA
                </strong>
              </h1>

              <div
                style={{
                  paddingTop: "35px",
                  paddingLeft: "50px",
                }}
              >
                <Type />
              </div>
            </Col>

            <Col
              md={5}
              className="text-center"
              style={{ paddingTop: "30px" }}
            >
              <img
                src={homeLogo}
                alt="Developer Illustration"
                className="img-fluid"
                style={{
                  maxHeight: "500px",
                  width: "100%",
                  objectFit: "contain",
                }}
              />
            </Col>

          </Row>
        </Container>
      </Container>

      <Home2 />

      {/* SOCIAL SECTION */}

      <Container>
        <Row
          style={{
            paddingTop: "60px",
            paddingBottom: "90px",
            justifyContent: "center",
          }}
        >
          <Col md={12} className="home-about-social">

            <h1>
              FIND ME <span className="purple">ONLINE</span>
            </h1>

            <p style={{ fontSize: "18px" }}>
              Let's connect and build something amazing together.
            </p>

            <ul className="home-about-social-links">

              <li className="social-icons">
                <a
                  href="https://facebook.com/Gift200M"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="facebook home-social-icons"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://x.com/joan280320"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="twitter home-social-icons"
                  aria-label="Twitter"
                >
                  <FaXTwitter />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ochieng-kevin-madara/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/gift200m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram home-social-icons"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </li>

            </ul>

          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;