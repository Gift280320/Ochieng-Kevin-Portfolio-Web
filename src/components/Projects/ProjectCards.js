import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function ProjectCards({
  imgPath,
  title,
  description,
  demoLink,
}) {
  return (
    <Card
      className="project-card-view h-100 border-0"
      style={{
        borderRadius: "18px",
        overflow: "hidden",
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(12px)",
        transition: "all .35s ease",
      }}
    >
      <div
        style={{
          overflow: "hidden",
          borderTopLeftRadius: "18px",
          borderTopRightRadius: "18px",
        }}
      >
        <Card.Img
          variant="top"
          src={imgPath}
          alt={title}
          style={{
            height: "230px",
            objectFit: "cover",
            transition: "transform .45s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.06)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        />
      </div>

      <Card.Body
        className="d-flex flex-column"
        style={{
          padding: "1.5rem",
        }}
      >
        <Card.Title
          style={{
            fontSize: "1.35rem",
            fontWeight: "700",
            marginBottom: "1rem",
            color: "#ffffff",
          }}
        >
          {title}
        </Card.Title>

        <Card.Text
          style={{
            color: "#d3d3d3",
            textAlign: "justify",
            lineHeight: "1.8",
            flexGrow: 1,
            fontSize: "0.97rem",
          }}
        >
          {description}
        </Card.Text>

        {demoLink && (
          <div
            style={{
              marginTop: "1.5rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              style={{
                borderRadius: "30px",
                padding: "10px 28px",
                fontWeight: "600",
                letterSpacing: "0.4px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <CgWebsite size={20} />
              Live Demo
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;