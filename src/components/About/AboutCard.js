import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Ochieng Kevin Madara</span>{" "}
            from <span className="purple">Nairobi, Kenya</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Software Developer</span> at{" "}
            <span className="purple">Mindset Labs</span>.
            <br />I hold a Bachelor Degree Of Management in{" "}
            <span className="purple">Information Systems</span> from{" "}
            <span className="purple">Kabarak University</span>.
            <br />
            <br />
            Outside of Tech Environment, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games(FIFA) 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Watchng Science Fiction Movies👀
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ochieng</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
