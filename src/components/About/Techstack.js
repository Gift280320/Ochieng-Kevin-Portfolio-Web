import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs } from "react-icons/si";

import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";

const iconStyle = {
  width: "42px",
  height: "42px",
  objectFit: "contain",
};

function Techstack() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "50px",
        rowGap: "10px",
      }}
    >
      <Col xs={6} md={3} lg={2} className="tech-icons">
        <img src={C} alt="C++" style={iconStyle} />
        <div className="tech-icons-text">C++</div>
      </Col>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <img src={Javascript} alt="JavaScript" style={iconStyle} />
        <div className="tech-icons-text">JavaScript</div>
      </Col>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <img src={Python} alt="Python" style={iconStyle} />
        <div className="tech-icons-text">Python</div>
      </Col>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <SiNextdotjs size={42} color="#ffffff" />
        <div className="tech-icons-text">Next.js</div>
      </Col>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <img src={Node} alt="Node.js" style={iconStyle} />
        <div className="tech-icons-text">Node.js</div>
      </Col>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <img src={ReactIcon} alt="React.js" style={iconStyle} />
        <div className="tech-icons-text">React.js</div>
      </Col>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <img src={Firebase} alt="Firebase" style={iconStyle} />
        <div className="tech-icons-text">Firebase</div>
      </Col>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <img src={Docker} alt="Docker" style={iconStyle} />
        <div className="tech-icons-text">Docker</div>
      </Col>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <img src={SQL} alt="PostgreSQL" style={iconStyle} />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <img src={Java} alt="Java" style={iconStyle} />
        <div className="tech-icons-text">Java</div>
      </Col>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <img src={Tailwind} alt="Tailwind CSS" style={iconStyle} />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <img src={Postman} alt="Postman" style={iconStyle} />
        <div className="tech-icons-text">Postman</div>
      </Col>

      <Col xs={6} md={3} lg={2} className="tech-icons">
        <img src={AWS} alt="AWS" style={iconStyle} />
        <div className="tech-icons-text">AWS</div>
      </Col>
    </Row>
  );
}

export default Techstack;