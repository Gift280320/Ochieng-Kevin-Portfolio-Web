import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

const resumeLink = process.env.PUBLIC_URL + "/Ochieng_Kevin_Madara_CV.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeLink;
    link.download = "Ochieng_Kevin_Madara_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container fluid className="resume-section">
      <Particle />

      <Row
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "110px",
          paddingBottom: "40px",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Document
            file={resumeLink}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<h4 style={{ color: "#fff" }}>Loading CV...</h4>}
            error={<h4 style={{ color: "red" }}>Failed to load CV.</h4>}
          >
            {Array.from(new Array(numPages || 0), (_, index) => (
              <Page
                key={index}
                pageNumber={index + 1}
                width={
                  width > 1200
                    ? 900
                    : width > 992
                    ? 800
                    : width > 768
                    ? 650
                    : width * 0.9
                }
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            ))}
          </Document>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "35px",
          }}
        >
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleDownload}
            style={{
              width: "220px",
              height: "52px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              fontSize: "17px",
              fontWeight: "600",
              borderRadius: "10px",
            }}
          >
            <AiOutlineDownload size={22} />
            Download CV
          </button>
        </div>
      </Row>
    </Container>
  );
}

export default ResumeNew;