import React from 'react';
import Project from "../Project";
import JATE from "../../assets/JATE.png";
import README from "../../assets/readme-generator.png"
import SOCIAL from "../../assets/social-network.png"
import SCHEDULER from "../../assets/workday-scheduler.png"
import Row from 'react-bootstrap/Row';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <Row className="md-4">
     <Project img={JATE} title="Just Another Text Editor" text="an installable PWA using indexeddb for saving colorful code snippets " />
     <Project img={SOCIAL} title="The Social Network" text="an Express back-end for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list" />
     <Project img={SCHEDULER} title="Weekday Scheduler" text="an ineractive, in-browser weekday scheduler with data persistance using local storage" />
     <Project img={README} title="README Generator" text="a CLI using the Inquirer package to generate a professional README from the command line" />
    </Row>
    </div>
  );
}
