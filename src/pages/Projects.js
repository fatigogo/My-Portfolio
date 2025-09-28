// src/pages/Projects.js
import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        <div className="project-card">
          <h2>Logistics System</h2>
          <p>
            A logistics web app with shipment tracking, pricing, and customer dashboard.
          </p>
          <p><strong>Tech:</strong> React, Bootstrap, Node.js</p>
          <a href="https://github.com/fatigogo/logistics-frontend-starter.git" target="_blank" rel="noreferrer">
            🔗 View on GitHub
          </a>
        </div>

        <div className="project-card">
          <h2>eDoc Request System</h2>
          <p>
            A Laravel-based app for document requests and tracking with a customer dashboard.
          </p>
          <p><strong>Tech:</strong> PHP, Laravel, MySQL</p>
          <a href="https://github.com/fatigogo/studentManagement" target="_blank" rel="noreferrer">
            🔗 View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
