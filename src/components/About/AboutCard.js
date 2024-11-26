import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Nishar Alam </span>
            from <span className="purple"> Gopalganj, India.</span>
            <br />
            I am currently working as a Freelancer software developer .
            <br />I hold a{" "}
            <span className="purple">
              {" "}
              B.E. in Information Technology
            </span> from{" "}
            <span className="purple">
              Marwadi Education Foundation Group of Institutions, Rajkot,
            </span>{" "}
            with a strong focus on full-stack development and web technologies
            <br />
            <span className="purple">Previously, </span>
            <br />I have gained valuable experience through internships:
            <ul>
              <li>
                At Netclues Technologies, where I developed responsive websites
                using React.js, Node.js, MongoDB, and MySQL.
              </li>
              <li>
                At CodeClause Pvt Ltd, where I built a Task Manager application
                leveraging Node.js, Express.js, and Bootstrap.
              </li>
            </ul>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Aim to create solutions that truly make an impact!"{" "}
          </p>
          <footer className="blockquote-footer">Nishar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
