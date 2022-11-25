import React from "react";

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <div className="resume-container">
        <div className="skills">
          <h2>Front-End Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <h2>Back-End Skills</h2>
          <ul>
            <li>Express</li>
            <li>Node.js</li>
            <li>Mongo/Mongoose</li>
            <li>MySQL</li>
            <li>React</li>
          </ul>
        </div>
        
        <div className="resume">
          <div className="small-resume">
          <iframe width="560" height="315"
            title="updated-resume"
            src={require("../../assets/updated-resume.pdf")}
          ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
