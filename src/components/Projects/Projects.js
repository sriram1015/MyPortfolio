import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/Ecommerce.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/constr.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/Farmmarket.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Construction Monitoring using ML "
              description="Construction monitoring using Machine Learning (ML) involves leveraging AI techniques to track, analyze, and optimize construction projects in real time. This approach enhances efficiency, reduces costs, and improves safety."
              ghLink="https://github.com/sriram1015/Construction_progress"
              demoLink="https://livesite.onesrv.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Farm Market"
              description="A farm market website is an online platform that connects farmers with consumers, allowing them to buy and sell fresh produce directly. It typically includes features like product listings, search filters, a shopping cart, user authentication, and online payments."
              ghLink="https://github.com/sriram1015/FarmMarket"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Vehicle Model Recognition"
              description="Vehicle model recognition is a computer vision task that involves identifying the make and model of a vehicle from an image. This project uses a deep learning model to recognize the make and model of vehicles in images."
              ghLink="https://github.com/sriram1015/VehicleModelRecognition"
              demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="E-Commerce Website"
              description="An e-commerce website for a retail shop is an online platform where customers can browse, purchase, and receive products from a retail store. It enhances business reach, provides a seamless shopping experience, and automates sales processes."
              ghLink="https://github.com/sriram1015/Krithin-Plaza"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Sleep Disoreder Prediction "
              description="The Sleep Disorder Prediction project uses machine learning to analyze sleep patterns and predict potential sleep disorders. It processes user data like sleep duration and heart rate to train models for accurate predictions. This system aids in early detection, promoting better sleep health"
              ghLink="https://github.com/sriram1015/SleepDisorderPrediction"
              demoLink="https://sleepdisorderprediction.onrender.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
