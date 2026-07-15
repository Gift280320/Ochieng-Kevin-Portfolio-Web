import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Project Images
import idpmpDashboard from "../../Assets/Projects/idpmp.png";
import schoolMgmt from "../../Assets/Projects/school-management.png";
import medicalChatbot from "../../Assets/Projects/medical-chatbot.png";
import propertyMgmt from "../../Assets/Projects/property-manager.png";
import ellyCrotchets from "../../Assets/Projects/elly-crochets.png";
import mealPlanner from "../../Assets/Projects/meal-planner.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          Featured <strong className="purple">Projects</strong>
        </h1>

        <p
          style={{
            color: "#d1d5db",
            textAlign: "center",
            marginBottom: "35px",
            fontSize: "1.05rem",
          }}
        >
          A selection of real-world systems and applications I've designed and
          developed using modern technologies.
        </p>

        <Row style={{ justifyContent: "center" }}>

          {/* 1. Integrated Dashboard */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={idpmpDashboard}
              isBlog={false}
              title="Integrated Development Project Management & Monitoring Platform"
              description="A government-grade Monitoring & Evaluation platform featuring executive dashboards, GIS county maps, project lifecycle management, budget tracking, AI-powered insights, document management, risk registers and role-based access control."
              demoLink="https://me-monitoring-system.vercel.app"
            />
          </Col>

          {/* 2. School Management */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={schoolMgmt}
              isBlog={false}
              title="School Management System"
              description="A complete school management solution for managing students, teachers, classes, examinations, attendance, finance and academic records."
              demoLink="https://school-management-system-pi-livid.vercel.app/"
            />
          </Col>

          {/* 3. Medical Chatbot */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medicalChatbot}
              isBlog={false}
              title="Medical Consultation Chatbot"
              description="An AI-powered medical consultation assistant capable of answering health-related questions using Natural Language Processing and intelligent recommendations."
              demoLink="https://huggingface.co/spaces/Gift254/medical-chatbot"
            />
          </Col>

          {/* 4. Property Management */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={propertyMgmt}
              isBlog={false}
              title="Mwaura Property Management System"
              description="A complete property management platform featuring tenant management, rent collection, maintenance requests, property listings and reporting."
              demoLink="https://ubiquitous-rolypoly-401f23.netlify.app/"
            />
          </Col>

          {/* 5. Ecommerce */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ellyCrotchets}
              isBlog={false}
              title="Elly's Crotchets Ecommerce"
              description="A modern ecommerce platform for selling handmade crochet products with responsive shopping experience, product galleries and customer ordering."
              demoLink="https://elly-s-crotchets.vercel.app/"
            />
          </Col>

          {/* 6. Meal Planner */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mealPlanner}
              isBlog={false}
              title="Kenyan Weekly Meal Planner"
              description="A smart meal planning application that generates affordable and nutritious weekly meal plans based on Kenyan cuisine and dietary preferences."
              demoLink="https://merry-jelly-1378ae.netlify.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;