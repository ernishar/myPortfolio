import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calculator from "../../Assets/Projects/calculator.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import todo from "../../Assets/Projects/todo.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import transparentEstate from "../../Assets/Projects/transparentEstate.png";

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
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={transparentEstate}
              isBlog={false}
              title="Transparent Estate"
              description="Transparent Estates is a cutting-edge real estate website aimed at revolutionizing the way individuals buy, sell, List, and rent properties bulit using MERN stack Technologies."
              ghLink="https://github.com/ernishar/TransparentEstate.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-commerce"
              description="Developed a salable e-commerce platform with enhanced user engagement, efficient admin control, and robust securitymeasures, significantly improving operational efficiency. Built using MERN Stack Technologies."
              ghLink="https://github.com/ernishar/Ecommerce.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="The Portfolio Project is a comprehensive personal showcase designed to highlight professional expertise, skills, and achievements. Built using HTML, CSS, JavaScript."
              demoLink="https://nishar6264.github.io/Nishar-Portfolio/"
              ghLink="https://github.com/Nishar6264/Nishar-Portfolio.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Calculator"
              description="Developed a user-friendly and responsive calculator website that performs basic arithmetic operations (addition, subtraction, multiplication, and division) with clean design and smooth functionality. Utilized HTML, CSS, and JavaScript to build the interface and ensure real-time calculations. "
              ghLink="https://github.com/Nishar6264/myCalculator.git"
              demoLink="https://nishar6264.github.io/myCalculator/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To-Do App"
              description="The to-do app helps users manage tasks efficiently by allowing them to add, edit, delete, and track their daily activities."
              ghLink="https://github.com/Nishar6264/TODOAPP.git"
              demoLink="https://nishar6264.github.io/TodoApp.github.io/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
