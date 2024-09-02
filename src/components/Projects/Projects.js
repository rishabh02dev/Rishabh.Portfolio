import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.jpeg";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import game from "../../Assets/Projects/game.png";

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
              title="Video Hub using React"
              description="Designed and developed a responsive and user-friendly video streaming platform using React. Key features include a video upload functionality that facilitated easy content sharing, leading to a 55% increase in user-generated content. Enhanced the streaming capabilities for smooth playback, which improved user retention by 25%."
              ghLink="https://github.com/rishabh02dev/Video-Hub-Using-React"
              demoLink="https://react-video-eocwyzseb-rishabh02dev.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Kara Fashion Brand"
              description="Developed an online shopping website for local vendors, showcasing arts from over 50 vendors. The platform features a clean, user-friendly interface with integrated payment solutions."
              ghLink="https://github.com/rishabh02dev/Kara-Fashion-Brand-Ecommerce-Website"
              demoLink="https://karaindiabyrishabh.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="GPT3 Clone"
              description="Build a ChatGPT3 frotend clone with React.js, Javascript, CSS showcasing cleaner UI with proper functionalities."
              ghLink="https://github.com/rishabh02dev/GPT3_Rishabh02dev"
              demoLink="https://gpt-3-rishabh02dev.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Face Emotion Recognizer"
              description="It is python based machine learning project in which we had built a mood recognizer. As soon as you run our program it starts deducting your emotions."
              ghLink="https://github.com/rishabh02dev/FACE_EMOTION_RECOGNIER"
              demoLink="https://github.com/rishabh02dev/FACE_EMOTION_RECOGNIER"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="She Shield"
              description="A new Flutter project Women Safety app. I wrote the architecture of the working app."
              ghLink="https://github.com/rishabh02dev/she-shield"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Airbnb FrontEnd"
              description="A fully responsive clonoe for the famous Airbnb platform. The project is built using HTML, CSS, and JavaScript, with a focus on a clean and modern UI design."
              ghLink="https://github.com/rishabh02dev/Airbnb-Frontend"
              demoLink="https://rishabh02dev.github.io/Airbnb-Frontend/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="Tic-Toc-Toe"
              description="A project which I used to play tic-tac-toc and it contains react.js and uses hooks like use-state to get the functioning done. A beautiful UI with dark theme."
              ghLink="https://github.com/rishabh02dev/Airbnb-Frontend"
              demoLink="https://rishabh02dev.github.io/Airbnb-Frontend/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
