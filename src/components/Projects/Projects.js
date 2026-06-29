import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Project Images
import schoolMgmt from "../../Assets/Projects/school-management.png";
import ellyCrotchets from "../../Assets/Projects/elly-crochets.png";
import medicalChatbot from "../../Assets/Projects/medical-chatbot.png";
import propertyMgmt from "../../Assets/Projects/property-manager.png";
import mealPlanner from "../../Assets/Projects/meal-planner.png";
import idpmpDashboard from "../../Assets/Projects/idpmp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are some of the real-world projects I've designed and developed.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* School Management System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={schoolMgmt}
              isBlog={false}
              title="School Management System"
              description="A comprehensive school management system for managing students, teachers, courses, attendance, examinations, and fee payments. Developed using React.js, Node.js, Express, and MongoDB."
              demoLink="https://school-management-system-pi-livid.vercel.app/"
            />
          </Col>

          {/* Elly's Crotchets */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ellyCrotchets}
              isBlog={false}
              title="Elly's Crotchets Ecommerce"
              description="A modern ecommerce platform for selling handmade crochet products with responsive product galleries, secure ordering, and customer-friendly shopping experience."
              demoLink="https://elly-s-crotchets.vercel.app/"
            />
          </Col>

          {/* Medical Chatbot */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medicalChatbot}
              isBlog={false}
              title="Medical Consultation Chatbot"
              description="An AI-powered medical consultation assistant capable of answering health-related questions using Natural Language Processing and machine learning models."
              demoLink="https://huggingface.co/spaces/Gift254/medical-chatbot"
            />
          </Col>

          {/* Property Management */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={propertyMgmt}
              isBlog={false}
              title="Mwaura Property Management System"
              description="A property management platform for landlords and property managers featuring tenant management, rent tracking, property listings, and maintenance requests."
              demoLink="https://ubiquitous-rolypoly-401f23.netlify.app/"
            />
          </Col>

          {/* Meal Planner */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mealPlanner}
              isBlog={false}
              title="Kenyan Weekly Meal Planner"
              description="A smart meal planning application that helps users generate affordable and nutritious weekly meal plans based on Kenyan cuisine."
              demoLink="https://merry-jelly-1378ae.netlify.app/"
            />
          </Col>

          {/* IDPMP */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={idpmpDashboard}
              isBlog={false}
              title="IDPMP – Integrated Development Project Management & Monitoring Platform"
              description="A government-grade monitoring and evaluation platform featuring executive dashboards, GIS county maps, project lifecycle management, budget tracking, AI-powered project insights, document management, risk registers, and role-based access control."
              demoLink="https://me-monitoring-system.vercel.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;