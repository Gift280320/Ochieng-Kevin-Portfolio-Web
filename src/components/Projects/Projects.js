import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Project images
import schoolMgmt from "../../Assets/Projects/school-management.png";
import ellyCrotchets from "../../Assets/Projects/elly-crochets.png";
import medicalChatbot from "../../Assets/Projects/medical-chatbot.png";
import propertyMgmt from "../../Assets/Projects/property-manager.png";
import mealPlanner from "../../Assets/Projects/idpmp.png";
import idpmpDashboard from "../../Assets/Projects/idpmp.png";   // <-- your new screenshot

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* School Management System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={schoolMgmt}
              isBlog={false}
              title="School Management System"
              description="A full-featured system for managing student records, courses, teachers, and fees. Built with React.js, Node.js, and MongoDB."
              demoLink="https://school-management-system-pi-livid.vercel.app/"
            />
          </Col>

          {/* Elly's Crotchets Ecommerce */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ellyCrotchets}
              isBlog={false}
              title="Elly's Crotchets Ecommerce"
              description="An online store for buying custom crocheted products. Built with React.js and integrated with a payment gateway for seamless purchases."
              demoLink="https://elly-s-crotchets.vercel.app/"
            />
          </Col>

          {/* Medical Consultation Chatbot */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medicalChatbot}
              isBlog={false}
              title="Medical Consultation Chatbot"
              description="An AI-powered chatbot for medical consultation. Built with Python, Streamlit, and integrated with NLP models for accurate responses."
              demoLink="https://huggingface.co/spaces/Gift254/medical-chatbot"
            />
          </Col>

          {/* Property Management Website */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={propertyMgmt}
              isBlog={false}
              title="Mwaura Property Management Website"
              description="A web application for managing properties, tenants, and rental payments. Built with React.js, Node.js, and Firebase for backend services."
              demoLink="https://ubiquitous-rolypoly-401f23.netlify.app/"
            />
          </Col>

          {/* Kenyan Weekly Meal Planner */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mealPlanner}
              isBlog={false}
              title="Kenyan Weekly Meal Planner"
              description="A meal planning app that helps users plan nutritious meals for the week. Built with React.js and Tailwind CSS."
              demoLink="https://merry-jelly-1378ae.netlify.app/"
            />
          </Col>

          {/* ========== NEW PROJECT ========== */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={idpmpDashboard}                          // your screenshot
              isBlog={false}
              title="IDPMP – Integrated Development Project Management & Monitoring Platform"
              description="A government‑grade M&E platform with 9 user roles, AI‑powered project health insights, budget tracking, GIS county maps, risk register, document management, and executive dashboards. Built with React, Node.js, PostgreSQL, and deployed on Vercel/Render."
              demoLink="https://me-monitoring-system.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;