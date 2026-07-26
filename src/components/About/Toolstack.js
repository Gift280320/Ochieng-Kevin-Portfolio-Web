import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  SiMicrosoftexcel,
  SiPowerbi,
  SiMysql,
  SiPostgresql,
  SiPython,
  SiTableau,
  SiCanva,
  SiAdobe,
  SiOpenai,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row className="toolstack-container">

      <Col xs={6} md={3} className="tool-card excel">
        <div className="icon-box">
          <SiMicrosoftexcel />
        </div>
        <p>Microsoft Excel</p>
      </Col>

      <Col xs={6} md={3} className="tool-card powerbi">
        <div className="icon-box">
          <SiPowerbi />
        </div>
        <p>Power BI</p>
      </Col>

      <Col xs={6} md={3} className="tool-card tableau">
        <div className="icon-box">
          <SiTableau />
        </div>
        <p>Tableau</p>
      </Col>

      <Col xs={6} md={3} className="tool-card mysql">
        <div className="icon-box">
          <SiMysql />
        </div>
        <p>MySQL</p>
      </Col>

      <Col xs={6} md={3} className="tool-card postgres">
        <div className="icon-box">
          <SiPostgresql />
        </div>
        <p>PostgreSQL</p>
      </Col>

      <Col xs={6} md={3} className="tool-card python">
        <div className="icon-box">
          <SiPython />
        </div>
        <p>Python</p>
      </Col>

      <Col xs={6} md={3} className="tool-card ai">
        <div className="icon-box">
          <SiOpenai />
        </div>
        <p>ChatGPT / AI</p>
      </Col>

      <Col xs={6} md={3} className="tool-card canva">
        <div className="icon-box">
          <SiCanva />
        </div>
        <p>Canva</p>
      </Col>

      <Col xs={6} md={3} className="tool-card adobe">
        <div className="icon-box">
          <SiAdobe />
        </div>
        <p>Adobe Suite</p>
      </Col>

      <Col xs={6} md={3} className="tool-card git">
        <div className="icon-box">
          <SiGit />
        </div>
        <p>Git</p>
      </Col>

      <Col xs={6} md={3} className="tool-card github">
        <div className="icon-box">
          <SiGithub />
        </div>
        <p>GitHub</p>
      </Col>

      <Col xs={6} md={3} className="tool-card vscode">
        <div className="icon-box">
          <SiVisualstudiocode />
        </div>
        <p>VS Code</p>
      </Col>

    </Row>
  );
}

export default Toolstack;
