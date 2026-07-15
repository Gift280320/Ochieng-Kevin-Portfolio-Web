import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row className="align-items-center">

        <Col md="4" className="footer-copywright">
          <h3>Designed & Developed by Ochieng Kevin Madara</h3>
        </Col>

        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>

        <Col md="4" className="footer-body">
          <ul className="footer-icons">

            <li className="social-icons">
              <a
                href="https://facebook.com/Gift200M"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour"
              >
                <FaFacebookF
                  size={28}
                  style={{ color: "#1877F2" }}
                />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour"
              >
                <FaXTwitter
                  size={28}
                  style={{ color: "#000000" }}
                />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour"
              >
                <FaInstagram
                  size={28}
                  style={{ color: "#E4405F" }}
                />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour"
              >
                <FaLinkedinIn
                  size={28}
                  style={{ color: "#0A66C2" }}
                />
              </a>
            </li>

          </ul>
        </Col>

      </Row>
    </Container>
  );
}

export default Footer;
