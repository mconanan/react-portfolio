import React from "react";
import Project from "../Project";
import JATE from "../../assets/JATE.png";
import README from "../../assets/readme-generator.png";
import SOCIAL from "../../assets/social-network.png";
import SCHEDULER from "../../assets/workday-scheduler.png";
import { Row, Col } from "react-bootstrap";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <Row xs={2} md={4} lg={12}>
        <Col><Project
          img={JATE}
          title="Just Another Text Editor"
          text="an installable PWA using indexeddb for saving colorful code snippets "
          url="https://github.com/mconanan/Text-Editor"
        /></Col>
       <Col> <Project
          img={SOCIAL}
          title="The Social Network"
          text="an Express back-end for a social network web app where users can share their thoughts, reactions, and create a friend list"
          url="https://github.com/mconanan/The-Social-Network"
        /></Col>
        <Col><Project
          img={SCHEDULER}
          title="Weekday Scheduler"
          text="an ineractive, in-browser weekday scheduler with data persistance using local storage"
          url="https://github.com/mconanan/workday-scheduler"
        /></Col>
        <Col><Project
          img={README}
          title="README Generator"
          text="a CLI using the Inquirer package to generate a professional README from the command line"
          url="https://github.com/mconanan/README-generator"
        /></Col>
      </Row>
    </div>
  );
}
