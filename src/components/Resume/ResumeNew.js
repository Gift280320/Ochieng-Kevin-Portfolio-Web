import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// ✅ Public folder PDF
const resumeLink = "/Ochieng_Kevin_Madara_CV.pdf";

// ✅ PDF worker fix (important for Vercel / production)
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Container
        fluid
        className="resume-section"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Particle />

        {/* 🔥 Top Download Button */}
        <Row style={{ justifyContent: "center", marginBottom: "20px" }}>
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{
              maxWidth: "250px",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </a>
        </Row>

        {/* 📄 PDF CENTER VIEW */}
        <Row
          className="resume"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Document
              file={resumeLink}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={<p style={{ textAlign: "center" }}>Loading CV...</p>}
              error={
                <p style={{ textAlign: "center", color: "red" }}>
                  Failed to load CV
                </p>
              }
            >
              {Array.from(new Array(numPages), (el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  scale={width > 786 ? 1.6 : 0.6}
                />
              ))}
            </Document>
          </div>
        </Row>

        {/* 🔥 Bottom Download Button */}
        <Row style={{ justifyContent: "center", marginTop: "20px" }}>
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{
              maxWidth: "250px",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </a>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;