import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed & Developed by Ochieng Kevin Madara</h3>
        </Col>

        <Col md="4" className="footer-copywright">
          <h3>Copyright © {new Date().getFullYear()}</h3>
        </Col>

        <Col md="4" className="footer-body">
          
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
