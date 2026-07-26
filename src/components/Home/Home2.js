import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";

import myImg from "../../Assets/myphoto.jpg";

function Home2() {
  return (
    <Container
      fluid
      className="home-about-section"
      id="about"
      style={{
        paddingTop: "25px",
      }}
    >
      <Container>
        <Row
          className="align-items-center"
          style={{
            rowGap: "30px",
          }}
        >
          {/* About Me */}
          <Col md={8} className="home-about-description">
            <h1
              style={{
                fontSize: "2.8rem",
                fontWeight: "700",
                marginBottom: "25px",
              }}
            >
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>

            <p
              className="home-about-body"
              style={{
                lineHeight: "2",
                fontSize: "1.15rem",
              }}
            >
              I am a passionate{" "}
              <b className="purple">Management Information Systems (MIS)</b>{" "}
              graduate and Full Stack Web Developer who enjoys transforming
              ideas into secure, scalable and user-friendly digital solutions.

              <br />
              <br />

              I have experience building modern applications using

              <b className="purple">
                {" "}
                React.js, Node.js, JavaScript, HTML5, CSS3, Python, Java,
                PostgreSQL and Tailwind CSS.
              </b>

              <br />
              <br />

              I enjoy designing systems that solve real-world problems in
              education, healthcare, property management, county government,
              NGOs and business organizations.

              <br />
              <br />

              My focus is on developing
              <b className="purple">
                {" "}
                scalable web applications, dashboards, management systems,
                automation tools and AI-powered solutions
              </b>{" "}
              that improve efficiency and user experience.

              <br />
              <br />

              Every project I build emphasizes
              <b className="purple">
                {" "}
                clean code, security, responsiveness, maintainability and
                excellent user experience.
              </b>
            </p>
          </Col>

          {/* Profile Image */}
          <Col
            md={4}
            className="myAvtar"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              glareEnable={true}
              glareMaxOpacity={0.15}
              scale={1.03}
            >
              <img
                src={myImg}
                alt="Ochieng Kevin Madara"
                className="img-fluid"
                style={{
                  width: "100%",
                  maxWidth: "310px",
                  borderRadius: "50%",
                  border: "5px solid #7c3aed",
                  boxShadow: "0 15px 35px rgba(124,58,237,.45)",
                  transition: "0.4s",
                }}
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;